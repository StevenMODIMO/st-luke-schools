'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BookOpen, CheckCircle2, Clock, AlertCircle, ChevronRight, Save, Send, LogOut, X } from 'lucide-react'

const TEACHER = { name: 'Mr. Boniface Kileo', subject: 'Mathematics', initials: 'BK' }

const ASSIGNMENTS = [
  { id: 1, class: 'Form 3A', subject: 'Mathematics', students: 38, submitted: false, saved: 22 },
  { id: 2, class: 'Form 2B', subject: 'Mathematics', students: 41, submitted: true, saved: 41 },
  { id: 3, class: 'Form 4A', subject: 'Mathematics', students: 35, submitted: false, saved: 0 },
]

const STUDENTS_3A = [
  { id: 1, name: 'Amina Hassan',       regNo: 'FA-2024-001', cat: 32, exam: 68 },
  { id: 2, name: 'Brian Oduya',         regNo: 'FA-2024-002', cat: 28, exam: 72 },
  { id: 3, name: 'Catherine Mwangi',   regNo: 'FA-2024-003', cat: 30, exam: '' },
  { id: 4, name: 'Daniel Kimaro',      regNo: 'FA-2024-004', cat: 27, exam: 70 },
  { id: 5, name: 'Esther Nyambura',    regNo: 'FA-2024-005', cat: '', exam: '' },
  { id: 6, name: 'Felix Mapunda',      regNo: 'FA-2024-006', cat: 35, exam: 74 },
  { id: 7, name: 'Grace Moshi',        regNo: 'FA-2024-007', cat: 29, exam: 66 },
  { id: 8, name: 'Hassan Juma',        regNo: 'FA-2024-008', cat: 31, exam: 71 },
]

function gradeFromTotal(total: number) {
  if (total >= 90) return 'A+'
  if (total >= 80) return 'A'
  if (total >= 75) return 'B+'
  if (total >= 65) return 'B'
  if (total >= 55) return 'C'
  if (total >= 45) return 'D'
  return 'F'
}

export default function TeacherDashboard() {
  const [activeSheet, setActiveSheet] = useState<number | null>(null)
  const [marks, setMarks] = useState<Record<string, { cat: any; exam: any }>>(
    Object.fromEntries(STUDENTS_3A.map(s => [s.regNo, { cat: s.cat, exam: s.exam }]))
  )
  const [saved, setSaved] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const updateMark = (regNo: string, field: 'cat' | 'exam', value: string) => {
    setMarks(prev => ({ ...prev, [regNo]: { ...prev[regNo], [field]: value } }))
    setSaved(false)
  }

  const filledCount = Object.values(marks).filter(m => m.cat !== '' && m.exam !== '').length

  return (
    <div className="min-h-screen bg-cream font-body">
      {/* Top nav */}
      <header className="bg-charcoal-950 border-b border-charcoal-800 px-5 lg:px-8 h-14 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-charcoal-400 hover:text-white text-sm transition-colors">Flame Academy</Link>
          <ChevronRight size={12} className="text-charcoal-600" />
          <span className="text-white text-sm font-medium">Teacher Dashboard</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-flame-500 flex items-center justify-center text-xs text-white font-bold">{TEACHER.initials}</div>
            <span className="text-sm text-charcoal-200">{TEACHER.name}</span>
          </div>
          <Link href="/login" className="flex items-center gap-1.5 text-xs text-charcoal-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-charcoal-800">
            <LogOut size={12} /> Sign Out
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-5 lg:px-8 py-8">
        {!activeSheet ? (
          <>
            {/* Welcome */}
            <div className="mb-8">
              <h1 className="font-display text-3xl font-bold text-charcoal-900">Good morning, {TEACHER.name.split(' ')[1]} 👋</h1>
              <p className="text-charcoal-500 mt-1 text-sm">Term 1 · 2024–2025 · Mark entry deadline: <span className="text-flame-500 font-medium">15 April 2025</span></p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: 'Assignments', value: ASSIGNMENTS.length, color: 'text-charcoal-900' },
                { label: 'Submitted', value: ASSIGNMENTS.filter(a => a.submitted).length, color: 'text-emerald-600' },
                { label: 'Pending', value: ASSIGNMENTS.filter(a => !a.submitted).length, color: 'text-flame-500' },
              ].map(s => (
                <div key={s.label} className="bg-white border border-charcoal-100 rounded-xl p-4 text-center">
                  <div className={`font-display text-3xl font-bold ${s.color}`}>{s.value}</div>
                  <div className="text-xs text-charcoal-400 uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Assignments */}
            <h2 className="font-display text-xl font-semibold text-charcoal-800 mb-4">Mark Sheets</h2>
            <div className="space-y-3">
              {ASSIGNMENTS.map(a => (
                <div key={a.id} className="bg-white border border-charcoal-100 rounded-xl p-5 flex items-center justify-between hover:border-flame-200 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-charcoal-50 flex items-center justify-center">
                      <BookOpen size={18} className="text-charcoal-400" />
                    </div>
                    <div>
                      <div className="font-medium text-charcoal-900">{a.class} — {a.subject}</div>
                      <div className="text-xs text-charcoal-400 mt-0.5">
                        {a.students} students · {a.saved} of {a.students} filled
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {a.submitted ? (
                      <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
                        <CheckCircle2 size={12} /> Submitted
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-xs font-medium text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-full">
                        <Clock size={12} /> Pending
                      </span>
                    )}
                    {!a.submitted && (
                      <button
                        onClick={() => setActiveSheet(a.id)}
                        className="text-xs font-medium text-white bg-flame-500 hover:bg-flame-600 px-4 py-2 rounded-lg transition-colors flex items-center gap-1"
                      >
                        Enter Marks <ChevronRight size={12} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          // Mark entry sheet
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <button onClick={() => setActiveSheet(null)} className="text-xs text-charcoal-400 hover:text-flame-500 flex items-center gap-1 mb-2 transition-colors">
                  ← Back to assignments
                </button>
                <h1 className="font-display text-2xl font-bold text-charcoal-900">Form 3A — Mathematics</h1>
                <p className="text-sm text-charcoal-400 mt-0.5">Term 1 · 2024–2025 · CAT (max 40) + Exam (max 100)</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-xs text-charcoal-500 bg-charcoal-50 border border-charcoal-100 rounded-lg px-3 py-2">
                  {filledCount}/{STUDENTS_3A.length} filled
                </div>
                <button
                  onClick={() => setSaved(true)}
                  className="flex items-center gap-1.5 text-xs font-medium text-charcoal-700 bg-white border border-charcoal-200 hover:border-charcoal-300 px-4 py-2 rounded-lg transition-colors"
                >
                  <Save size={13} /> Save Draft
                </button>
                <button
                  onClick={() => setSubmitted(true)}
                  className="flex items-center gap-1.5 text-xs font-medium text-white bg-flame-500 hover:bg-flame-600 px-4 py-2 rounded-lg transition-colors"
                >
                  <Send size={13} /> Submit Marks
                </button>
              </div>
            </div>

            {/* Progress bar */}
            <div className="bg-white border border-charcoal-100 rounded-xl p-4 mb-4">
              <div className="flex justify-between text-xs text-charcoal-500 mb-2">
                <span>Entry Progress</span>
                <span>{Math.round((filledCount / STUDENTS_3A.length) * 100)}%</span>
              </div>
              <div className="h-2 bg-charcoal-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-flame-500 rounded-full transition-all"
                  style={{ width: `${(filledCount / STUDENTS_3A.length) * 100}%` }}
                />
              </div>
            </div>

            {saved && !submitted && (
              <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs rounded-lg px-4 py-2.5 mb-4">
                <CheckCircle2 size={13} /> Draft saved successfully.
              </div>
            )}
            {submitted && (
              <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm rounded-xl px-5 py-4 mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  <span className="font-medium">Marks submitted successfully! This sheet is now locked for review.</span>
                </div>
                <button onClick={() => setSubmitted(false)} className="text-emerald-500 hover:text-emerald-700"><X size={15} /></button>
              </div>
            )}

            {/* Table */}
            <div className="bg-white border border-charcoal-100 rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-charcoal-50 border-b border-charcoal-100">
                    <th className="px-5 py-3 text-left text-xs font-semibold text-charcoal-500 uppercase tracking-wider">#</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-charcoal-500 uppercase tracking-wider">Student Name</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-charcoal-500 uppercase tracking-wider font-mono">Reg No.</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-charcoal-500 uppercase tracking-wider">CAT /40</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-charcoal-500 uppercase tracking-wider">Exam /100</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-charcoal-500 uppercase tracking-wider">Total</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-charcoal-500 uppercase tracking-wider">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal-50">
                  {STUDENTS_3A.map((student, i) => {
                    const m = marks[student.regNo]
                    const cat = parseFloat(m?.cat) || 0
                    const exam = parseFloat(m?.exam) || 0
                    const total = m?.cat !== '' && m?.exam !== '' ? Math.round(cat * 0.3 + exam * 0.7) : null
                    const incomplete = m?.cat === '' || m?.exam === ''
                    return (
                      <tr key={student.id} className={`hover:bg-charcoal-50/40 transition-colors ${incomplete ? 'bg-amber-50/30' : ''}`}>
                        <td className="px-5 py-3 text-charcoal-400 text-xs">{i + 1}</td>
                        <td className="px-4 py-3 font-medium text-charcoal-800">
                          <div className="flex items-center gap-2">
                            {incomplete && <AlertCircle size={13} className="text-amber-400 flex-shrink-0" />}
                            {student.name}
                          </div>
                        </td>
                        <td className="px-4 py-3 font-mono text-xs text-charcoal-400">{student.regNo}</td>
                        <td className="px-4 py-3">
                          <input
                            type="number"
                            min={0} max={40}
                            value={m?.cat}
                            disabled={submitted}
                            onChange={e => updateMark(student.regNo, 'cat', e.target.value)}
                            className="w-16 text-center border border-charcoal-200 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-flame-300 focus:border-flame-400 disabled:bg-charcoal-50 disabled:text-charcoal-400"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <input
                            type="number"
                            min={0} max={100}
                            value={m?.exam}
                            disabled={submitted}
                            onChange={e => updateMark(student.regNo, 'exam', e.target.value)}
                            className="w-16 text-center border border-charcoal-200 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-flame-300 focus:border-flame-400 disabled:bg-charcoal-50 disabled:text-charcoal-400 mx-auto block"
                          />
                        </td>
                        <td className="px-4 py-3 text-center font-semibold text-charcoal-800">
                          {total !== null ? total : <span className="text-charcoal-300">—</span>}
                        </td>
                        <td className="px-4 py-3 text-center">
                          {total !== null ? (
                            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-charcoal-100 text-charcoal-700">
                              {gradeFromTotal(total)}
                            </span>
                          ) : <span className="text-charcoal-300">—</span>}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
