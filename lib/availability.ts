// ─── Advisor availability ────────────────────────────────────────────────────
// The calendar is CLOSED by default. The office opens specific windows from the
// admin page (/admin/availability), stored in Wasabi. Each open window is an
// Israel-local date + time. This module turns those windows into bookable slots:
// it computes the absolute instant (DST-correct), hides past windows and any
// inside MIN_LEAD_HOURS, and builds the Hebrew labels shown to the lead.

export const TIMEZONE = 'Asia/Jerusalem'
export const SLOT_DURATION_MIN = 30
export const MIN_LEAD_HOURS = 24 // earliest a lead may book, measured from now

// An open window as stored/edited by the office. Israel-local.
export type OpenWindow = {
  date: string // "YYYY-MM-DD"
  time: string // "HH:MM" (24h)
}

export type Slot = {
  iso: string // absolute instant, ISO 8601 (for sorting)
  dayKey: string // Israel-local "YYYY-MM-DD" (groups slots by day)
  dayLabel: string // e.g. "יום שלישי, 24 ביוני"
  timeLabel: string // e.g. "12:00"
  label: string // full human label submitted with the lead
}

const HE_DAYS = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת']
const HE_MONTHS = [
  'בינואר', 'בפברואר', 'במרץ', 'באפריל', 'במאי', 'ביוני',
  'ביולי', 'באוגוסט', 'בספטמבר', 'באוקטובר', 'בנובמבר', 'בדצמבר',
]
const heMonth = (mo: number) => HE_MONTHS[mo - 1]

// Offset (ms) of `timeZone` at the given instant — the standard Intl trick.
function tzOffsetMs(timeZone: string, date: Date): number {
  const dtf = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
  const parts = dtf.formatToParts(date)
  const m: Record<string, number> = {}
  for (const p of parts) if (p.type !== 'literal') m[p.type] = Number(p.value)
  const asUTC = Date.UTC(m.year, m.month - 1, m.day, m.hour, m.minute, m.second)
  return asUTC - date.getTime()
}

// Absolute instant for an Israel wall-clock time, DST-correct.
function israelWallClockToDate(y: number, mo: number, d: number, h: number, mi: number): Date {
  const utcGuess = Date.UTC(y, mo - 1, d, h, mi)
  const offset = tzOffsetMs(TIMEZONE, new Date(utcGuess))
  return new Date(utcGuess - offset)
}

// Day-of-week (0=Sun) for an Israel-local date.
function israelDow(y: number, mo: number, d: number): number {
  const noon = israelWallClockToDate(y, mo, d, 12, 0)
  const wd = new Intl.DateTimeFormat('en-US', { timeZone: TIMEZONE, weekday: 'short' }).format(noon)
  return { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[wd] ?? 0
}

// Human label for an Israel-local date + time (used by the lead UI and admin).
export function describeWindow({ date, time }: OpenWindow): { dayLabel: string; timeLabel: string; label: string } {
  const [y, mo, d] = date.split('-').map(Number)
  const dow = israelDow(y, mo, d)
  const dayLabel = `יום ${HE_DAYS[dow]}, ${d} ${heMonth(mo)}`
  return { dayLabel, timeLabel: time, label: `${dayLabel} בשעה ${time} (שעון ישראל)` }
}

// Turn the office's open windows into bookable slots, soonest first.
// Past windows and windows inside MIN_LEAD_HOURS are dropped.
export function slotsFromOpenWindows(open: OpenWindow[], now: Date = new Date()): Slot[] {
  const earliest = now.getTime() + MIN_LEAD_HOURS * 3600_000
  const slots: Slot[] = []
  for (const w of open) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(w.date) || !/^\d{2}:\d{2}$/.test(w.time)) continue
    const [y, mo, d] = w.date.split('-').map(Number)
    const [h, mi] = w.time.split(':').map(Number)
    const slotDate = israelWallClockToDate(y, mo, d, h, mi)
    if (slotDate.getTime() < earliest) continue
    const { dayLabel, label } = describeWindow(w)
    slots.push({ iso: slotDate.toISOString(), dayKey: w.date, dayLabel, timeLabel: w.time, label })
  }
  return slots.sort((a, b) => a.iso.localeCompare(b.iso))
}
