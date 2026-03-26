import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { BookOpen, GraduationCap, FlaskConical, Palette, TrendingUp } from 'lucide-react'

const levels = [
  {
    icon: BookOpen,
    level: 'Primary School',
    grades: 'Standards 1 – 7',
    duration: '7 years',
    colour: 'text-blue-600 bg-blue-50',
    subjects: [
      'English Language', 'Kiswahili', 'Mathematics',
      'Science & Technology', 'Social Studies', 'Religious Education', 'Creative Arts', 'Physical Education',
    ],
    highlights: ['National Primary Examination (PSLE) preparation', 'Reading and literacy programme', 'STEM fundamentals from Standard 3'],
  },
  {
    icon: BookOpen,
    level: 'O-Level Secondary',
    grades: 'Forms 1 – 4',
    duration: '4 years',
    colour: 'text-flame-600 bg-flame-50',
    subjects: [
      'Mathematics', 'English', 'Kiswahili', 'Biology', 'Chemistry', 'Physics',
      'History', 'Geography', 'Civics', 'Commerce', 'Book-Keeping', 'Agriculture',
    ],
    highlights: ['NECTA O-Level Examinations (Form 4)', 'Science and Arts streams', 'Co-curricular clubs and competitions'],
  },
  {
    icon: GraduationCap,
    level: 'A-Level Senior Secondary',
    grades: 'Forms 5 – 6',
    duration: '2 years',
    colour: 'text-emerald-600 bg-emerald-50',
    subjects: [],
    streams: [
      { code: 'PCM', name: 'Physics, Chemistry, Mathematics', icon: FlaskConical },
      { code: 'PCB', name: 'Physics, Chemistry, Biology', icon: FlaskConical },
      { code: 'CBG', name: 'Chemistry, Biology, Geography', icon: FlaskConical },
      { code: 'HGL', name: 'History, Geography, Language', icon: Palette },
      { code: 'EGM', name: 'Economics, Geography, Mathematics', icon: TrendingUp },
    ],
    highlights: ['NECTA A-Level Examinations (Form 6)', 'University entrance preparation', 'Subject-specialist teachers'],
  },
]

export default function AcademicsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="bg-charcoal-950 py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(#e83010 1px, transparent 1px), linear-gradient(90deg, #e83010 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
          <div className="relative z-10 max-w-3xl mx-auto px-5 lg:px-8 text-center">
            <span className="text-xs font-semibold text-flame-400 uppercase tracking-[0.2em]">Curriculum</span>
            <h1 className="font-display text-5xl font-bold text-white mt-3 mb-5">Academic Programs</h1>
            <p className="text-charcoal-300 text-lg leading-relaxed">
              A structured, nationally aligned curriculum from primary through senior secondary — rigorous, relevant, and rooted in strong values.
            </p>
          </div>
        </section>

        {/* Program cards */}
        <section className="py-20 bg-cream">
          <div className="max-w-6xl mx-auto px-5 lg:px-8 space-y-8">
            {levels.map((lvl) => (
              <div key={lvl.level} className="bg-white border border-charcoal-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                {/* Header */}
                <div className="p-6 lg:p-8 border-b border-charcoal-50">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${lvl.colour}`}>
                        <lvl.icon size={22} />
                      </div>
                      <div>
                        <h2 className="font-display text-2xl font-bold text-charcoal-900">{lvl.level}</h2>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-sm text-charcoal-500">{lvl.grades}</span>
                          <span className="w-1 h-1 bg-charcoal-300 rounded-full" />
                          <span className="text-sm text-charcoal-500">{lvl.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 lg:p-8 grid md:grid-cols-2 gap-8">
                  {/* Subjects or Streams */}
                  <div>
                    <h3 className="text-xs font-semibold text-charcoal-400 uppercase tracking-wider mb-4">
                      {lvl.streams ? 'Available Streams' : 'Subjects Offered'}
                    </h3>
                    {lvl.streams ? (
                      <div className="space-y-2">
                        {lvl.streams.map(s => (
                          <div key={s.code} className="flex items-center gap-3 p-3 bg-charcoal-50 rounded-xl">
                            <span className="font-mono font-bold text-charcoal-700 text-xs w-10">{s.code}</span>
                            <span className="text-sm text-charcoal-600">{s.name}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {lvl.subjects.map(subj => (
                          <span key={subj} className="text-xs bg-charcoal-50 text-charcoal-600 rounded-full px-3 py-1.5 border border-charcoal-100">
                            {subj}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Highlights */}
                  <div>
                    <h3 className="text-xs font-semibold text-charcoal-400 uppercase tracking-wider mb-4">Highlights</h3>
                    <ul className="space-y-3">
                      {lvl.highlights.map(h => (
                        <li key={h} className="flex items-start gap-2.5 text-sm text-charcoal-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-flame-400 mt-2 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
