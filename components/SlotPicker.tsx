'use client'

import { useEffect, useMemo, useState } from 'react'
import { slotsFromOpenWindows, type OpenWindow, type Slot } from '@/lib/availability'

// Calendar-style picker: choose a day, then a time. Fetches the windows the
// office opened (closed by default) and calls onChange with the human-readable
// slot label (the value submitted with the lead).
export default function SlotPicker({
  value,
  onChange,
}: {
  value: string
  onChange: (label: string) => void
}) {
  const [windows, setWindows] = useState<OpenWindow[] | null>(null)

  useEffect(() => {
    let alive = true
    fetch('/.netlify/functions/availability')
      .then(r => r.json())
      .then(d => { if (alive) setWindows(Array.isArray(d.windows) ? d.windows : []) })
      .catch(() => { if (alive) setWindows([]) })
    return () => { alive = false }
  }, [])

  const slots = useMemo(() => (windows ? slotsFromOpenWindows(windows) : []), [windows])

  const days = useMemo(() => {
    const map = new Map<string, { dayKey: string; dayLabel: string; slots: Slot[] }>()
    for (const s of slots) {
      if (!map.has(s.dayKey)) map.set(s.dayKey, { dayKey: s.dayKey, dayLabel: s.dayLabel, slots: [] })
      map.get(s.dayKey)!.slots.push(s)
    }
    return Array.from(map.values())
  }, [slots])

  const [activeDay, setActiveDay] = useState<string>('')
  useEffect(() => {
    if (days.length && !days.some(d => d.dayKey === activeDay)) {
      setActiveDay(days[0].dayKey)
      if (!value && days[0].slots.length) onChange(days[0].slots[0].label)
    }
  }, [days, activeDay, value, onChange])

  const activeSlots = days.find(d => d.dayKey === activeDay)?.slots ?? []

  if (windows === null) {
    return <p className="text-white/70 text-sm text-center py-4">טוען חלונות פנויים…</p>
  }

  if (days.length === 0) {
    return (
      <p className="text-white/70 text-sm text-center py-4">
        אין כרגע חלונות פנויים — אפשר להתקשר ישירות: 07777-83000
      </p>
    )
  }

  return (
    <div>
      <p className="text-white font-semibold text-sm mb-2">בחר יום</p>
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
        {days.map(d => (
          <button
            key={d.dayKey}
            type="button"
            onClick={() => { setActiveDay(d.dayKey); if (d.slots.length) onChange(d.slots[0].label) }}
            className={`flex-shrink-0 px-3 py-2 rounded-xl text-xs whitespace-nowrap border transition-all ${
              d.dayKey === activeDay
                ? 'bg-[#5A9A72] border-[#5A9A72] text-white'
                : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/15'
            }`}
          >
            {d.dayLabel}
          </button>
        ))}
      </div>

      <p className="text-white font-semibold text-sm mt-4 mb-2">בחר שעה</p>
      <div className="grid grid-cols-3 gap-2">
        {activeSlots.map(s => (
          <button
            key={s.iso}
            type="button"
            onClick={() => onChange(s.label)}
            className={`px-2 py-2.5 rounded-xl text-sm border transition-all ${
              value === s.label
                ? 'bg-[#5A9A72] border-[#5A9A72] text-white font-bold'
                : 'bg-white/10 border-white/20 text-white hover:bg-white/15 hover:border-[#5A9A72]'
            }`}
            dir="ltr"
          >
            {s.timeLabel}
          </button>
        ))}
      </div>

      {value && (
        <p className="text-[#7DB895] text-xs mt-3 text-center">נבחר: {value}</p>
      )}
    </div>
  )
}
