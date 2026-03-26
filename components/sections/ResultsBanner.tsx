import Link from 'next/link'
import { Search, Shield, Printer } from 'lucide-react'

const features = [
  { icon: Search, text: 'Lookup by registration number — no login needed' },
  { icon: Shield, text: 'Secure — only your child\'s results are shown' },
  { icon: Printer, text: 'Download or print result slips instantly' },
]

export default function ResultsBanner() {
  return (
    <section className="py-20 bg-charcoal-950 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #e83010 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-40 bg-flame-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-body font-semibold text-flame-400 uppercase tracking-[0.2em]">
            Parent & Guardian Portal
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mt-3 mb-4">
            Check Your Child&apos;s Results Online
          </h2>
          <p className="text-charcoal-400 font-body mb-8">
            Enter your child&apos;s student registration number to instantly access their term results — no account required.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {features.map((f) => (
              <div key={f.text} className="flex items-center gap-2 text-sm text-charcoal-300">
                <f.icon size={14} className="text-flame-400 flex-shrink-0" />
                <span>{f.text}</span>
              </div>
            ))}
          </div>

          <Link
            href="/results"
            className="inline-flex items-center gap-2 bg-flame-500 hover:bg-flame-600 text-white font-medium px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-flame-500/30 text-sm"
          >
            <Search size={16} />
            Check Results Now
          </Link>
        </div>
      </div>
    </section>
  )
}
