import Link from 'next/link'
import { BookOpen, GraduationCap, Award } from 'lucide-react'

const levels = [
  {
    icon: BookOpen,
    level: 'Primary School',
    grades: 'Standards 1 – 7',
    color: 'bg-blue-50 text-blue-600',
    accent: 'border-blue-200',
    subjects: ['English Language', 'Kiswahili', 'Mathematics', 'Science', 'Social Studies', 'Religious Education'],
    desc: 'A foundation of curiosity, literacy, and numeracy — building the essential skills every learner needs.',
  },
  {
    icon: BookOpen,
    level: 'Secondary School',
    grades: 'Forms 1 – 4  (O-Level)',
    color: 'bg-flame-50 text-flame-600',
    accent: 'border-flame-200',
    subjects: ['Mathematics', 'Biology', 'Chemistry', 'Physics', 'History', 'Geography', 'English', 'Kiswahili', 'Civics', 'Commerce'],
    desc: 'A broad and balanced curriculum preparing students for national examinations and senior studies.',
  },
  {
    icon: GraduationCap,
    level: 'Senior Secondary',
    grades: 'Forms 5 – 6  (A-Level)',
    color: 'bg-emerald-50 text-emerald-600',
    accent: 'border-emerald-200',
    subjects: ['PCM Stream', 'PCB Stream', 'CBG Stream', 'HGL Stream', 'EGM Stream'],
    desc: 'Specialised streams offering deep subject mastery in preparation for higher education and careers.',
  },
]

export default function AcademicsPreview() {
  return (
    <section className="py-24 bg-parchment">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-body font-semibold text-flame-500 uppercase tracking-[0.2em]">
              Curriculum
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-charcoal-900 mt-3">
              Academic Programs
            </h2>
          </div>
          <Link href="/academics" className="text-sm font-medium text-flame-500 hover:text-flame-600 transition-colors">
            View full curriculum →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {levels.map((lvl) => (
            <div
              key={lvl.level}
              className={`bg-white rounded-2xl border ${lvl.accent} overflow-hidden hover:shadow-lg transition-all group`}
            >
              {/* Header */}
              <div className="p-6 border-b border-charcoal-50">
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4 ${lvl.color}`}>
                  <lvl.icon size={12} />
                  {lvl.grades}
                </div>
                <h3 className="font-display text-xl font-bold text-charcoal-900 mb-2 group-hover:text-flame-600 transition-colors">
                  {lvl.level}
                </h3>
                <p className="text-sm text-charcoal-500 font-body leading-relaxed">{lvl.desc}</p>
              </div>

              {/* Subjects */}
              <div className="p-6">
                <div className="text-xs font-semibold text-charcoal-400 uppercase tracking-wider mb-3">
                  Subjects Offered
                </div>
                <div className="flex flex-wrap gap-2">
                  {lvl.subjects.map((subj) => (
                    <span key={subj} className="text-xs bg-charcoal-50 text-charcoal-600 rounded-full px-2.5 py-1">
                      {subj}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
