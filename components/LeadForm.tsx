'use client'

import { useState } from 'react'

export default function LeadForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

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
        setName('')
        setPhone('')
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
        <h3 className="text-xl font-bold text-[#1E3651] mb-2">קיבלנו! נחזור אליך בהקדם</h3>
        <p className="text-[#5A4F3F] text-sm">נשלח לך הזמנה לפגישת זום — בדרך כלל תוך יום עסקים אחד.</p>
      </div>
    )
  }

  return (
    <form
      name="zoom-meeting"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-sm mx-auto"
    >
      <input type="hidden" name="form-name" value="zoom-meeting" />
      <input type="hidden" name="bot-field" />

      <div>
        <label className="block text-sm font-semibold text-white mb-1.5">שם מלא</label>
        <input
          type="text"
          name="name"
          required
          placeholder="ישראל ישראלי"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-xl text-sm bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#868C95] focus:bg-white/15 transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-white mb-1.5">מספר טלפון</label>
        <input
          type="tel"
          name="phone"
          required
          placeholder="050-0000000"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          className="w-full px-4 py-3 rounded-xl text-sm bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#868C95] focus:bg-white/15 transition-all"
          dir="ltr"
        />
      </div>

      {status === 'error' && (
        <p className="text-red-300 text-xs text-center">שגיאה בשליחה — אפשר להתקשר ישירות: 07777-83000</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-gold w-full justify-center py-3 text-base font-bold disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? '...' : 'קבע פגישת זום חינמית ←'}
      </button>

      <p className="text-white/40 text-xs text-center">ללא עלות · ללא התחייבות · פגישה בזום 30 דקות</p>
    </form>
  )
}
