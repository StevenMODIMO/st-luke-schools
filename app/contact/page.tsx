'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 900))
    setLoading(false)
    setSent(true)
  }

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="bg-charcoal-950 py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle, #e83010 1px, transparent 1px)`, backgroundSize: '28px 28px' }} />
          <div className="relative z-10 max-w-3xl mx-auto px-5 lg:px-8 text-center">
            <span className="text-xs font-semibold text-flame-400 uppercase tracking-[0.2em]">Get In Touch</span>
            <h1 className="font-display text-4xl font-bold text-white mt-3 mb-4">Contact Us</h1>
            <p className="text-charcoal-400 leading-relaxed">
              We welcome enquiries from prospective families, partners, and the community.
            </p>
          </div>
        </section>

        <section className="py-20 bg-cream">
          <div className="max-w-6xl mx-auto px-5 lg:px-8 grid lg:grid-cols-5 gap-10">
            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-charcoal-900 mb-5">School Information</h2>
                {[
                  { icon: MapPin, label: 'Address', value: '123 Academy Road, Kinondoni, Dar es Salaam, Tanzania' },
                  { icon: Phone, label: 'Phone', value: '+255 712 345 678' },
                  { icon: Mail, label: 'Email', value: 'info@flameacademy.ac.tz' },
                  { icon: Clock, label: 'Office Hours', value: 'Mon – Fri: 7:30 AM – 5:00 PM\nSat: 8:00 AM – 12:00 PM' },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-4 py-4 border-b border-charcoal-100">
                    <div className="w-9 h-9 rounded-lg bg-flame-50 flex items-center justify-center flex-shrink-0">
                      <item.icon size={16} className="text-flame-500" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-charcoal-400 uppercase tracking-wider mb-0.5">{item.label}</div>
                      <p className="text-sm text-charcoal-700 whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 bg-white border border-charcoal-100 rounded-2xl p-7 shadow-sm">
              {sent ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
                    <CheckCircle2 size={28} className="text-emerald-500" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-charcoal-900 mb-2">Message Sent!</h3>
                  <p className="text-charcoal-500 text-sm max-w-xs">
                    Thank you for reaching out. Our team will get back to you within 1–2 business days.
                  </p>
                  <button onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                    className="mt-6 text-sm text-flame-500 hover:text-flame-600 font-medium">
                    Send another message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="font-display text-xl font-bold text-charcoal-900 mb-5">Send a Message</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider block mb-2">Full Name</label>
                      <input required value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))}
                        placeholder="Your full name"
                        className="w-full border border-charcoal-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-flame-300 focus:border-flame-400 bg-charcoal-50 text-charcoal-800 placeholder:text-charcoal-300" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider block mb-2">Email Address</label>
                      <input type="email" required value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))}
                        placeholder="your@email.com"
                        className="w-full border border-charcoal-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-flame-300 focus:border-flame-400 bg-charcoal-50 text-charcoal-800 placeholder:text-charcoal-300" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider block mb-2">Subject</label>
                    <select required value={form.subject} onChange={e => setForm(f => ({...f, subject: e.target.value}))}
                      className="w-full border border-charcoal-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-flame-300 bg-charcoal-50 text-charcoal-800">
                      <option value="">Select a subject...</option>
                      <option>Admissions Enquiry</option>
                      <option>Academic Information</option>
                      <option>Results Portal Support</option>
                      <option>Fee Structure</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider block mb-2">Message</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm(f => ({...f, message: e.target.value}))}
                      placeholder="Write your message here..."
                      className="w-full border border-charcoal-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-flame-300 focus:border-flame-400 bg-charcoal-50 text-charcoal-800 placeholder:text-charcoal-300 resize-none" />
                  </div>
                  <button type="submit" disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-flame-500 hover:bg-flame-600 disabled:opacity-60 text-white font-medium py-3 rounded-xl text-sm transition-all shadow-sm">
                    {loading
                      ? <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      : 'Send Message'
                    }
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
