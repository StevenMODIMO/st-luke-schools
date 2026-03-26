import { Eye, Target, Heart } from 'lucide-react'

const values = [
  { icon: '🔥', label: 'Excellence', desc: 'Striving for the highest academic and personal standards in everything we do.' },
  { icon: '⚖️', label: 'Integrity', desc: 'Building character founded on honesty, respect, and ethical conduct.' },
  { icon: '🌍', label: 'Purpose', desc: 'Equipping students to serve their communities and lead with vision.' },
  { icon: '🤝', label: 'Inclusion', desc: 'Embracing every learner with dignity, diversity, and belonging.' },
]

export default function VisionMission() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Section label */}
        <div className="text-center mb-16">
          <span className="text-xs font-body font-semibold text-flame-500 uppercase tracking-[0.2em]">
            Who We Are
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-charcoal-900 mt-3">
            Vision & Mission
          </h2>
        </div>

        {/* Vision + Mission cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Vision */}
          <div className="bg-charcoal-950 rounded-2xl p-8 lg:p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-flame-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-flame-500/15 flex items-center justify-center mb-6">
                <Eye className="text-flame-400" size={22} />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-charcoal-300 leading-relaxed font-body">
                To be a beacon of academic excellence and moral formation — raising a generation of critical thinkers, compassionate leaders, and lifelong learners who drive positive change in Tanzania and beyond.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-parchment border border-charcoal-100 rounded-2xl p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-flame-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-flame-50 flex items-center justify-center mb-6">
                <Target className="text-flame-500" size={22} />
              </div>
              <h3 className="font-display text-2xl font-bold text-charcoal-900 mb-4">Our Mission</h3>
              <p className="text-charcoal-600 leading-relaxed font-body">
                To provide a nurturing, rigorous, and inclusive learning environment across primary, secondary, and senior secondary levels — where every student is challenged to grow intellectually, socially, and spiritually, supported by committed educators and engaged families.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="font-display text-xl font-semibold text-charcoal-700 mb-6 text-center">
            Core Values
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v) => (
              <div
                key={v.label}
                className="bg-white border border-charcoal-100 rounded-xl p-5 hover:border-flame-200 hover:shadow-md transition-all group"
              >
                <div className="text-2xl mb-3">{v.icon}</div>
                <div className="font-display font-semibold text-charcoal-900 mb-2 group-hover:text-flame-600 transition-colors">
                  {v.label}
                </div>
                <p className="text-xs text-charcoal-500 leading-relaxed font-body">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
