import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import { Users, Award, BookOpen, Globe } from 'lucide-react'

const milestones = [
  { year: '2004', event: 'Flame Academy founded with 120 primary students and a vision for academic excellence.' },
  { year: '2009', event: 'Secondary school (Forms 1–4) launched; first national examination cohort achieves 91% pass rate.' },
  { year: '2015', event: 'Senior Secondary (Forms 5–6) opened across three science and arts streams.' },
  { year: '2020', event: 'Digital learning infrastructure introduced; school management system deployed.' },
  { year: '2024', event: 'Enrolment surpasses 1,200 students; online results portal launched for parents.' },
]

const leadership = [
  { name: 'Dr. Mwalimu Kaunda', role: 'Headmaster', initials: 'MK', colour: 'bg-flame-100 text-flame-700' },
  { name: 'Mrs. Fatuma Rashid', role: 'Director of Academics', initials: 'FR', colour: 'bg-blue-100 text-blue-700' },
  { name: 'Mr. Juma Mwangi', role: 'Head of Secondary', initials: 'JM', colour: 'bg-emerald-100 text-emerald-700' },
  { name: 'Ms. Amara Diallo', role: 'Head of Primary', initials: 'AD', colour: 'bg-purple-100 text-purple-700' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="bg-charcoal-950 py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle, #e83010 1px, transparent 1px)`, backgroundSize: '28px 28px' }} />
          <div className="relative z-10 max-w-4xl mx-auto px-5 lg:px-8 text-center">
            <span className="text-xs font-semibold text-flame-400 uppercase tracking-[0.2em]">Our Story</span>
            <h1 className="font-display text-5xl font-bold text-white mt-3 mb-5">About Flame Academy</h1>
            <p className="text-charcoal-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Two decades of nurturing leaders, scholars, and citizens — built on a foundation of excellence, faith, and community.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-flame-500 py-10">
          <div className="max-w-5xl mx-auto px-5 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, value: '1,200+', label: 'Students' },
              { icon: BookOpen, value: '80+', label: 'Teaching Staff' },
              { icon: Award, value: '98%', label: '2024 Pass Rate' },
              { icon: Globe, value: '20+', label: 'Years Est.' },
            ].map(s => (
              <div key={s.label} className="text-center text-white">
                <s.icon size={20} className="mx-auto mb-2 opacity-80" />
                <div className="font-display text-3xl font-bold">{s.value}</div>
                <div className="text-xs uppercase tracking-wider opacity-80 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* History */}
        <section className="py-20 bg-cream">
          <div className="max-w-4xl mx-auto px-5 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-charcoal-900 mb-10 text-center">Our Journey</h2>
            <div className="relative border-l-2 border-flame-200 pl-8 space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[2.15rem] top-1 w-4 h-4 rounded-full bg-flame-500 border-2 border-white shadow" />
                  <div className="text-xs font-mono font-bold text-flame-500 mb-1">{m.year}</div>
                  <p className="text-charcoal-600 font-body text-sm leading-relaxed">{m.event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 bg-parchment">
          <div className="max-w-5xl mx-auto px-5 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-charcoal-900 mb-10 text-center">School Leadership</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {leadership.map(l => (
                <div key={l.name} className="bg-white border border-charcoal-100 rounded-xl p-5 text-center hover:shadow-md transition-all">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3 ${l.colour}`}>
                    {l.initials}
                  </div>
                  <div className="font-display font-semibold text-charcoal-900 text-sm">{l.name}</div>
                  <div className="text-xs text-charcoal-400 mt-1">{l.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
