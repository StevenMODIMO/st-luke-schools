'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Search, AlertCircle, Printer, Download, ChevronRight, User } from 'lucide-react'

const MOCK_RESULTS = {
  'FA-2024-001': {
    name: 'Amina Juma Hassan',
    class: 'Form 3A',
    regNo: 'FA-2024-001',
    year: '2024–2025',
    term: 'Term 1',
    position: 3,
    totalStudents: 38,
    overallGrade: 'B+',
    aggregate: 78.4,
    teacherRemark: 'An outstanding student who shows great dedication. Keep up the excellent work!',
    subjects: [
      { name: 'Mathematics',   cat: 32, exam: 68, total: 76, grade: 'B',  remark: 'Good' },
      { name: 'Biology',       cat: 28, exam: 72, total: 80, grade: 'A',  remark: 'Excellent' },
      { name: 'Chemistry',     cat: 30, exam: 65, total: 74, grade: 'B',  remark: 'Good' },
      { name: 'Physics',       cat: 27, exam: 70, total: 77, grade: 'B+', remark: 'Very Good' },
      { name: 'English',       cat: 35, exam: 74, total: 83, grade: 'A',  remark: 'Excellent' },
      { name: 'Kiswahili',     cat: 29, exam: 66, total: 75, grade: 'B',  remark: 'Good' },
      { name: 'History',       cat: 31, exam: 71, total: 79, grade: 'B+', remark: 'Very Good' },
      { name: 'Geography',     cat: 26, exam: 63, total: 72, grade: 'B',  remark: 'Good' },
    ],
  },
  'FA-2024-042': {
    name: 'David Mwangi Ochieng',
    class: 'Standard 6B',
    regNo: 'FA-2024-042',
    year: '2024–2025',
    term: 'Term 1',
    position: 1,
    totalStudents: 35,
    overallGrade: 'A',
    aggregate: 88.2,
    teacherRemark: 'Top of the class. Exceptional performance across all subjects. A role model to peers.',
    subjects: [
      { name: 'English',         cat: 38, exam: 80, total: 90, grade: 'A+', remark: 'Excellent' },
      { name: 'Kiswahili',       cat: 36, exam: 78, total: 87, grade: 'A',  remark: 'Excellent' },
      { name: 'Mathematics',     cat: 37, exam: 82, total: 92, grade: 'A+', remark: 'Excellent' },
      { name: 'Science',         cat: 35, exam: 76, total: 85, grade: 'A',  remark: 'Excellent' },
      { name: 'Social Studies',  cat: 33, exam: 72, total: 81, grade: 'A',  remark: 'Excellent' },
      { name: 'R.E.',            cat: 34, exam: 74, total: 83, grade: 'A',  remark: 'Excellent' },
    ],
  },
}

const gradeColor: Record<string, string> = {
  'A+': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'A':  'bg-emerald-50 text-emerald-700 border-emerald-200',
  'B+': 'bg-blue-50 text-blue-700 border-blue-200',
  'B':  'bg-blue-50 text-blue-700 border-blue-200',
  'C':  'bg-amber-50 text-amber-700 border-amber-200',
  'D':  'bg-orange-50 text-orange-700 border-orange-200',
  'F':  'bg-red-50 text-red-700 border-red-200',
}

export default function ResultsPage() {
  const [regNo, setRegNo] = useState('')
  const [term, setTerm] = useState('term1')
  const [year, setYear] = useState('2024-2025')
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    if (!regNo.trim()) {
      setError('Please enter a registration number.')
      return
    }
    setLoading(true)
    setError('')
    setResult(null)
    await new Promise(r => setTimeout(r, 800))
    const found = MOCK_RESULTS[regNo.trim().toUpperCase() as keyof typeof MOCK_RESULTS]
    if (found) {
      setResult(found)
    } else {
      setError('No results found for this registration number. Please check the number and try again. (Try: FA-2024-001 or FA-2024-042)')
    }
    setLoading(false)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">

          {/* Header */}
          <div className="mb-10">
            <span className="text-xs font-semibold text-flame-500 uppercase tracking-[0.2em]">Parent & Guardian Portal</span>
            <h1 className="font-display text-4xl font-bold text-charcoal-900 mt-2 mb-3">
              Student Results Lookup
            </h1>
            <p className="text-charcoal-500 font-body">
              Enter your child's registration number to view their academic results. No account required.
            </p>
          </div>

          {/* Search Card */}
          <div className="bg-white border border-charcoal-100 rounded-2xl p-6 lg:p-8 mb-8 shadow-sm">
            <div className="grid sm:grid-cols-3 gap-4 mb-5">
              <div className="sm:col-span-1">
                <label className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider block mb-2">
                  Registration Number
                </label>
                <input
                  type="text"
                  value={regNo}
                  onChange={e => setRegNo(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSearch()}
                  placeholder="e.g. FA-2024-001"
                  className="w-full border border-charcoal-200 rounded-xl px-4 py-3 text-sm font-mono text-charcoal-800 focus:outline-none focus:ring-2 focus:ring-flame-300 focus:border-flame-400 bg-charcoal-50 placeholder:text-charcoal-300 uppercase"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider block mb-2">
                  Academic Year
                </label>
                <select
                  value={year}
                  onChange={e => setYear(e.target.value)}
                  className="w-full border border-charcoal-200 rounded-xl px-4 py-3 text-sm text-charcoal-800 focus:outline-none focus:ring-2 focus:ring-flame-300 bg-charcoal-50"
                >
                  <option value="2024-2025">2024 – 2025</option>
                  <option value="2023-2024">2023 – 2024</option>
                  <option value="2022-2023">2022 – 2023</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider block mb-2">
                  Term / Examination
                </label>
                <select
                  value={term}
                  onChange={e => setTerm(e.target.value)}
                  className="w-full border border-charcoal-200 rounded-xl px-4 py-3 text-sm text-charcoal-800 focus:outline-none focus:ring-2 focus:ring-flame-300 bg-charcoal-50"
                >
                  <option value="term1">Term 1</option>
                  <option value="term2">Term 2</option>
                  <option value="term3">Term 3 (Final)</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleSearch}
              disabled={loading}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-flame-500 hover:bg-flame-600 disabled:opacity-60 text-white font-medium px-8 py-3 rounded-xl transition-all text-sm shadow-sm"
            >
              {loading ? (
                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              ) : (
                <Search size={16} />
              )}
              {loading ? 'Searching...' : 'Search Results'}
            </button>
          </div>

          {/* Error */}
          {error && (
            <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-6 text-sm text-red-700">
              <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Results */}
          {result && (
            <div className="bg-white border border-charcoal-100 rounded-2xl overflow-hidden shadow-sm animate-fade-up">
              {/* Student header */}
              <div className="bg-charcoal-950 px-6 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-flame-500/20 flex items-center justify-center">
                    <User size={22} className="text-flame-400" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-white text-lg">{result.name}</div>
                    <div className="text-charcoal-400 text-sm font-mono mt-0.5">
                      {result.regNo} · {result.class} · {result.year}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1.5 text-xs text-charcoal-300 hover:text-white bg-charcoal-800 hover:bg-charcoal-700 px-3 py-2 rounded-lg transition-colors">
                    <Printer size={13} /> Print
                  </button>
                  <button className="flex items-center gap-1.5 text-xs text-white bg-flame-500 hover:bg-flame-600 px-3 py-2 rounded-lg transition-colors">
                    <Download size={13} /> Download PDF
                  </button>
                </div>
              </div>

              {/* Summary row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-charcoal-100 border-b border-charcoal-100">
                {[
                  { label: 'Term', value: result.term },
                  { label: 'Overall Grade', value: result.overallGrade },
                  { label: 'Aggregate', value: `${result.aggregate}%` },
                  { label: 'Class Position', value: `${result.position} / ${result.totalStudents}` },
                ].map(item => (
                  <div key={item.label} className="px-5 py-4 text-center">
                    <div className="text-xs text-charcoal-400 uppercase tracking-wider mb-1">{item.label}</div>
                    <div className="font-display font-bold text-charcoal-900 text-lg">{item.value}</div>
                  </div>
                ))}
              </div>

              {/* Subject marks table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-charcoal-50 text-left">
                      <th className="px-5 py-3 text-xs font-semibold text-charcoal-500 uppercase tracking-wider">Subject</th>
                      <th className="px-4 py-3 text-xs font-semibold text-charcoal-500 uppercase tracking-wider text-center">CAT (40)</th>
                      <th className="px-4 py-3 text-xs font-semibold text-charcoal-500 uppercase tracking-wider text-center">Exam (100)</th>
                      <th className="px-4 py-3 text-xs font-semibold text-charcoal-500 uppercase tracking-wider text-center">Total</th>
                      <th className="px-4 py-3 text-xs font-semibold text-charcoal-500 uppercase tracking-wider text-center">Grade</th>
                      <th className="px-4 py-3 text-xs font-semibold text-charcoal-500 uppercase tracking-wider">Remark</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-charcoal-50">
                    {result.subjects.map((s: any) => (
                      <tr key={s.name} className="hover:bg-charcoal-50/50 transition-colors">
                        <td className="px-5 py-3.5 font-medium text-charcoal-800">{s.name}</td>
                        <td className="px-4 py-3.5 text-center text-charcoal-600">{s.cat}</td>
                        <td className="px-4 py-3.5 text-center text-charcoal-600">{s.exam}</td>
                        <td className="px-4 py-3.5 text-center font-semibold text-charcoal-800">{s.total}</td>
                        <td className="px-4 py-3.5 text-center">
                          <span className={`inline-block border rounded-full px-2.5 py-0.5 text-xs font-semibold ${gradeColor[s.grade] ?? 'bg-charcoal-50 text-charcoal-600'}`}>
                            {s.grade}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 text-charcoal-500 text-xs">{s.remark}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Teacher remark */}
              <div className="px-6 py-5 border-t border-charcoal-100 bg-parchment">
                <div className="text-xs font-semibold text-charcoal-400 uppercase tracking-wider mb-1">Class Teacher's Remark</div>
                <p className="text-sm text-charcoal-700 italic font-body">"{result.teacherRemark}"</p>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
