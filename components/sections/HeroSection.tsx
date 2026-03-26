'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-charcoal-950 overflow-hidden flex items-center">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#e83010 1px, transparent 1px), linear-gradient(90deg, #e83010 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Large decorative logo watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.06] pointer-events-none">
        <Image src="/images/school-logo.png" alt="" fill className="object-contain" />
      </div>

      {/* Flame glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-flame-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-flame-500/10 border border-flame-500/20 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-flame-400 animate-pulse" />
            <span className="text-xs font-body font-medium text-flame-400 tracking-wider uppercase">
              Primary · Secondary · Senior Secondary
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 animate-fade-up">
            Igniting Minds,{' '}
            <span className="text-flame-400">Shaping</span>{' '}
            Futures.
          </h1>

          <p className="text-lg text-charcoal-300 leading-relaxed mb-10 max-w-xl font-body animate-fade-up" style={{ animationDelay: '150ms' }}>
            Flame Academy provides a rigorous, values-driven education from primary through senior secondary — cultivating excellence, integrity, and purpose in every student.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '250ms' }}>
            <Link
              href="/about"
              className="bg-flame-500 hover:bg-flame-600 text-white font-medium px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-flame-500/25 hover:shadow-flame-500/40 text-sm"
            >
              Discover Our School
            </Link>
            <Link
              href="/results"
              className="border border-charcoal-600 hover:border-flame-400 text-charcoal-200 hover:text-flame-400 font-medium px-7 py-3.5 rounded-xl transition-all text-sm"
            >
              Check Results →
            </Link>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-10 border-t border-charcoal-800 animate-fade-up" style={{ animationDelay: '350ms' }}>
            {[
              { value: '1,200+', label: 'Students Enrolled' },
              { value: '98%', label: 'Pass Rate 2024' },
              { value: '20+', label: 'Years of Excellence' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-charcoal-400 uppercase tracking-wider font-body">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-charcoal-400 uppercase tracking-[0.2em] font-body">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-charcoal-400 to-transparent" />
      </div>
    </section>
  )
}
