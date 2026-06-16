'use client'

import { useState } from 'react'
import SlotPicker from './SlotPicker'

// Fires the "lead booked" conversion to whatever ad platforms are loaded.
// Guarded — does nothing until a GA4 tag / Meta Pixel is actually present.
function fireLeadConversion(variant: string) {
  if (typeof window === 'undefined') return
  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
  if (typeof w.gtag === 'function') {
    w.gtag('event', 'generate_lead', { event_category: 'campaign', event_label: variant })
  }
  if (typeof w.fbq === 'function') {
    w.fbq('track', 'Lead', { content_name: variant })
  }
  if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event: 'zoom_lead', variant })
  }
}

const SAVINGS_OPTIONS = [
  'קרן פנסיה',
  'קופת גמל',
  'קרן השתלמות',
  'ביטוח מנהלים',
  'כמה מהם / לא בטוח',
]

export default function CampaignLeadForm({ variant }: { variant: string }) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [savings, setSavings] = useState('')
  const [slot, setSlot] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      })
      if (res.ok) {
        setStatus('success')
        fireLeadConversion(variant)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-10 px-6">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-white mb-2">קיבלנו! נתאם את הזום</h3>
        <p className="text-white/70 text-sm">
          {slot ? <>ביקשת: <span className="text-white">{slot}</span>. נשלח לך הזמנה לזום לאישור החלון.</> : 'נשלח לך הזמנה לפגישת זום בהקדם.'}
        </p>
      </div>
    )
  }

  return (
    <div className="w-full max-w-sm mx-auto">
        <form
          name="zoom-meeting"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input type="hidden" name="form-name" value="zoom-meeting" />
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="variant" value={variant} />
          <input type="hidden" name="slot" value={slot} />

          <div>
            <p className="text-white font-bold text-base mb-3">בחר חלון לפגישת הזום</p>
            <SlotPicker value={slot} onChange={setSlot} />
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-1.5">איפה עיקר החיסכון שלך?</label>
            <select
              name="savings" required
              value={savings} onChange={e => setSavings(e.target.value)}
              className="w-full px-4 py-3 rounded-xl text-sm bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#5A9A72] focus:bg-white/15 transition-all appearance-none"
            >
              <option value="" disabled className="text-black">בחר…</option>
              {SAVINGS_OPTIONS.map(opt => (
                <option key={opt} value={opt} className="text-black">{opt}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-1.5">שם מלא</label>
            <input
              type="text" name="name" required placeholder="ישראל ישראלי"
              value={name} onChange={e => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl text-sm bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#5A9A72] focus:bg-white/15 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-1.5">מספר טלפון</label>
            <input
              type="tel" name="phone" required placeholder="050-0000000" dir="ltr"
              value={phone} onChange={e => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-xl text-sm bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#5A9A72] focus:bg-white/15 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-1.5">אימייל</label>
            <input
              type="email" name="email" required placeholder="your@email.com" dir="ltr"
              value={email} onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl text-sm bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#5A9A72] focus:bg-white/15 transition-all"
            />
          </div>

          {status === 'error' && (
            <p className="text-red-300 text-xs text-center">שגיאה בשליחה — אפשר להתקשר ישירות: 07777-83000</p>
          )}

          {!slot && (
            <p className="text-white/50 text-xs text-center">בחר חלון זמן למעלה כדי להמשיך</p>
          )}

          <button
            type="submit" disabled={status === 'submitting' || !slot}
            className="btn-gold w-full justify-center py-3 text-base font-bold disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? '...' : 'קבע פגישת זום חינמית ←'}
          </button>

          <p className="text-white/40 text-xs text-center">ללא עלות · ללא התחייבות · פגישה בזום 30 דקות</p>
        </form>
    </div>
  )
}
