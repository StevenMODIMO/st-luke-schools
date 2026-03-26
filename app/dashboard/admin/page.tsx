'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  CheckCircle2, Clock, AlertCircle, ChevronRight, LogOut,
  Users, BookOpen, Award, Send, Download, Eye, Bell, BarChart3
} from 'lucide-react'

const ADMIN = { name: 'Mrs. Fatuma Rashid', initials: 'FR' }

const STATUS_OVERVIEW = [
  { class: 'Form 1A', subjects: 8, submitted: 8, status: 'ready' },
  { class: 'Form 2B', subjects: 8, submitted: 6, status: 'pending' },
  { class: 'Form 3A', subjects: 8, submitted: 8, status: 'combined' },
  { class: 'Form 4A', subjects: 8, submitted: 5, status: 'pending' },
  { class: 'Standard 6B', subjects: 6, submitted: 6, status: 'published' },
  { class: 'Form 5 PCM', subjects: 5, submitted: 5, status: 'ready' },
]

const COMBINED_MARKS = [
  { pos: 1, name: 'David Mwangi',      regNo: 'FA-2024-042', math: 88, eng: 82, sci: 90, kis: 79, his: 75, geo: 80, total: 494, avg: 82.3, grade: 'A' },
  { pos: 2, name: 'Amina Hassan',      regNo: 'FA-2024-001', math: 76, eng: 83, sci: 80, kis: 75, his: 79, geo: 72, total: 465, avg: 77.5, grade: 'B+' },
  { pos: 3, name: 'Grace Moshi',       regNo: 'FA-2024-007', math: 74, eng: 78, sci: 76, kis: 72, his: 70, geo: 68, total: 438, avg: 73.0, grade: 'B' },
  { pos: 4, name: 'Felix Mapunda',     regNo: 'FA-2024-006', math: 80, eng: 65, sci: 72, kis: 70, his: 64, geo: 60, total: 411, avg: 68.5, grade: 'B' },
  { pos: 5, name: 'Hassan Juma',       regNo: 'FA-2024-008', math: 65, eng: 60, sci: 68, kis: 63, his: 58, geo: 55, total: 369, avg: 61.5, grade: 'C' },
]

const GRADING = [
  { range: '90 – 100', grade: 'A+', remark: 'Outstanding' },
  { range: '80 – 89',  grade: 'A',  remark: 'Excellent' },
  { range: '75 – 79',  grade: 'B+', remark: 'Very Good' },
  { range: '65 – 74',  grade: 'B',  remark: 'Good' },
  { range: '55 – 64',  grade: 'C',  remark: 'Average' },
  { range: '45 – 54',  grade: 'D',  remark: 'Below Average' },
  { range: '0 – 44',   grade: 'F',  remark: 'Fail' },
]

const statusStyle: Record<string, string> = {
  pending:  'bg-amber-50 text-amber-700 border-amber-200',
  ready:    'bg-blue-50 text-blue-700 border-blue-200',
  combined: 'bg-purple-50 text-purple-700 border-purple-200',
  published:'bg-emerald-50 text-emerald-700 border-emerald-200',
}
const statusLabel: Record<string, string> = {
  pending: 'Marks Pending', ready: 'Ready to Combine', combined: 'Combined', published: 'Published',
}

type Tab = 'overview' | 'combine' | 'grading' | 'publish'

export default function AdminDashboard() {
  const [tab, setTab] = useState<Tab>('overview')
  const [publishedClass, setPublishedClass] = useState<string | null>(null)
  const [publishing, setPublishing] = useState(false)

  const handlePublish = async () => {
    setPublishing(true)
    await new Promise(r => setTimeout(r, 1000))
    setPublishedClass('Form 3A')
    setPublishing(false)
  }

  const tabs: { key: Tab; label: string; icon: any }[] = [
    { key: 'overview', label: 'Mark Status', icon: BarChart3 },
    { key: 'combine', label: 'Combine Marks', icon: Users },
    { key: 'grading', label: 'Grading Scheme', icon: Award },
    { key: 'publish', label: 'Publish Results', icon: Send },
  ]

  return (
    <div className="min-h-screen bg-cream font-body">
      {/* Top nav */}
      <header className="bg-charcoal-950 border-b border-charcoal-800 px-5 lg:px-8 h-14 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-charcoal-400 hover:text-white text-sm transition-colors">Flame Academy</Link>
          <ChevronRight size={12} className="text-charcoal-600" />
          <span className="text-white text-sm font-medium">Academic Admin</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-purple-500 flex items-center justify-center text-xs text-white font-bold">{ADMIN.initials}</div>
            <span className="text-sm text-charcoal-200">{ADMIN.name}</span>
          </div>
          <Link href="/login" className="flex items-center gap-1.5 text-xs text-charcoal-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-charcoal-800">
            <LogOut size={12} /> Sign Out
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-5 lg:px-8 py-8">
        {/* Heading */}
        <div className="mb-6">
          <h1 className="font-display text-3xl font-bold text-charcoal-900">Academic Admin Dashboard</h1>
          <p className="text-charcoal-500 mt-1 text-sm">Term 1 · 2024–2025 · Mark combination and results publication</p>
        </div>

        {/* Summary stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Classes',    value: STATUS_OVERVIEW.length,                               color: 'text-charcoal-900' },
            { label: 'All Submitted',    value: STATUS_OVERVIEW.filter(c => c.submitted === c.subjects).length, color: 'text-blue-600' },
            { label: 'Combined',         value: STATUS_OVERVIEW.filter(c => c.status === 'combined' || c.status === 'published').length, color: 'text-purple-600' },
            { label: 'Published',        value: STATUS_OVERVIEW.filter(c => c.status === 'published').length, color: 'text-emerald-600' },
          ].map(s => (
            <div key={s.label} className="bg-white border border-charcoal-100 rounded-xl p-4 text-center">
              <div className={`font-display text-3xl font-bold ${s.color}`}>{s.value}</div>
              <div className="text-xs text-charcoal-400 uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-charcoal-100 rounded-xl p-1 mb-6 overflow-x-auto">
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${tab === t.key ? 'bg-white text-charcoal-900 shadow-sm' : 'text-charcoal-500 hover:text-charcoal-700'}`}
            >
              <t.icon size={14} />{t.label}
            </button>
          ))}
        </div>

        {/* Tab: Overview */}
        {tab === 'overview' && (
          <div className="space-y-3">
            <h2 className="font-display text-lg font-semibold text-charcoal-800 mb-4">Mark Submission Status — All Classes</h2>
            {STATUS_OVERVIEW.map(cls => (
              <div key={cls.class} className="bg-white border border-charcoal-100 rounded-xl px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-charcoal-50 flex items-center justify-center">
                    <BookOpen size={16} className="text-charcoal-400" />
                  </div>
                  <div>
                    <div className="font-medium text-charcoal-900">{cls.class}</div>
                    <div className="text-xs text-charcoal-400 mt-0.5">
                      {cls.submitted} of {cls.subjects} subjects submitted
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {/* Progress */}
                  <div className="hidden sm:block w-24">
                    <div className="h-1.5 bg-charcoal-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${cls.submitted === cls.subjects ? 'bg-emerald-400' : 'bg-amber-400'}`}
                        style={{ width: `${(cls.submitted / cls.subjects) * 100}%` }}
                      />
                    </div>
                  </div>
                  <span className={`text-xs font-medium border px-3 py-1 rounded-full ${statusStyle[cls.status]}`}>
                    {statusLabel[cls.status]}
                  </span>
                  {cls.submitted < cls.subjects && (
                    <button className="flex items-center gap-1 text-xs text-charcoal-500 hover:text-flame-500 transition-colors">
                      <Bell size={12} /> Remind
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab: Combine */}
        {tab === 'combine' && (
          <div>
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-display text-lg font-semibold text-charcoal-800">Combined Marks — Form 3A</h2>
              <div className="flex items-center gap-2">
                <select className="text-sm border border-charcoal-200 rounded-lg px-3 py-2 text-charcoal-700 bg-white focus:outline-none focus:ring-2 focus:ring-flame-300">
                  <option>Form 3A</option>
                  <option>Form 1A</option>
                  <option>Form 5 PCM</option>
                </select>
                <button className="flex items-center gap-1.5 text-xs font-medium text-white bg-flame-500 hover:bg-flame-600 px-4 py-2 rounded-lg transition-colors">
                  <Download size={12} /> Export CSV
                </button>
              </div>
            </div>

            <div className="bg-white border border-charcoal-100 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-charcoal-50 border-b border-charcoal-100">
                      {['Pos', 'Student', 'Reg No.', 'Math', 'Eng', 'Sci', 'Kisw', 'Hist', 'Geo', 'Total', 'Avg', 'Grade'].map(h => (
                        <th key={h} className="px-3 py-3 text-xs font-semibold text-charcoal-500 uppercase tracking-wider text-center first:text-left">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-charcoal-50">
                    {COMBINED_MARKS.map(row => (
                      <tr key={row.regNo} className={`hover:bg-charcoal-50/30 transition-colors ${row.pos === 1 ? 'bg-amber-50/30' : ''}`}>
                        <td className="px-3 py-3 font-bold text-charcoal-700">
                          {row.pos === 1 ? '🥇' : row.pos === 2 ? '🥈' : row.pos === 3 ? '🥉' : `#${row.pos}`}
                        </td>
                        <td className="px-3 py-3 font-medium text-charcoal-800 whitespace-nowrap">{row.name}</td>
                        <td className="px-3 py-3 font-mono text-xs text-charcoal-400">{row.regNo}</td>
                        {[row.math, row.eng, row.sci, row.kis, row.his, row.geo].map((v, i) => (
                          <td key={i} className="px-3 py-3 text-center text-charcoal-600">{v}</td>
                        ))}
                        <td className="px-3 py-3 text-center font-bold text-charcoal-900">{row.total}</td>
                        <td className="px-3 py-3 text-center text-charcoal-600">{row.avg}</td>
                        <td className="px-3 py-3 text-center">
                          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-charcoal-100 text-charcoal-700">{row.grade}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Grading */}
        {tab === 'grading' && (
          <div>
            <h2 className="font-display text-lg font-semibold text-charcoal-800 mb-5">Grading Scheme Configuration</h2>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white border border-charcoal-100 rounded-xl overflow-hidden">
                <div className="px-5 py-3 border-b border-charcoal-100 bg-charcoal-50">
                  <h3 className="text-sm font-semibold text-charcoal-700">Current Grading Scale</h3>
                </div>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-charcoal-50">
                      <th className="px-5 py-2.5 text-left text-xs font-semibold text-charcoal-400 uppercase tracking-wider">Score Range</th>
                      <th className="px-4 py-2.5 text-center text-xs font-semibold text-charcoal-400 uppercase tracking-wider">Grade</th>
                      <th className="px-4 py-2.5 text-left text-xs font-semibold text-charcoal-400 uppercase tracking-wider">Remark</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-charcoal-50">
                    {GRADING.map(g => (
                      <tr key={g.grade} className="hover:bg-charcoal-50/30">
                        <td className="px-5 py-3 font-mono text-xs text-charcoal-600">{g.range}</td>
                        <td className="px-4 py-3 text-center">
                          <span className="font-bold text-charcoal-800 bg-charcoal-100 rounded-full px-2.5 py-0.5 text-xs">{g.grade}</span>
                        </td>
                        <td className="px-4 py-3 text-charcoal-500 text-xs">{g.remark}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-white border border-charcoal-100 rounded-xl p-5">
                <h3 className="text-sm font-semibold text-charcoal-700 mb-4">Assessment Components</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Continuous Assessment Test (CAT)', weight: 30 },
                    { label: 'End-of-Term Examination', weight: 70 },
                  ].map(c => (
                    <div key={c.label} className="flex items-center justify-between p-3 bg-charcoal-50 rounded-lg">
                      <span className="text-sm text-charcoal-700">{c.label}</span>
                      <span className="font-bold text-flame-500 text-sm">{c.weight}%</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded-lg text-xs text-blue-700">
                  Total weighting must equal 100%. Contact System Admin to modify assessment structure.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Publish */}
        {tab === 'publish' && (
          <div>
            <h2 className="font-display text-lg font-semibold text-charcoal-800 mb-5">Publish Results</h2>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white border border-charcoal-100 rounded-xl p-6">
                <h3 className="font-medium text-charcoal-800 mb-4 flex items-center gap-2">
                  <Eye size={16} className="text-flame-500" />
                  Publish Class Results
                </h3>
                <div className="space-y-3 mb-5">
                  <div>
                    <label className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider block mb-2">Select Class</label>
                    <select className="w-full border border-charcoal-200 rounded-xl px-4 py-3 text-sm text-charcoal-800 bg-charcoal-50 focus:outline-none focus:ring-2 focus:ring-flame-300">
                      <option>Form 3A — Combined ✓</option>
                      <option disabled>Form 1A — Ready to Combine</option>
                      <option disabled>Form 2B — Marks Pending</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider block mb-2">Term</label>
                    <select className="w-full border border-charcoal-200 rounded-xl px-4 py-3 text-sm text-charcoal-800 bg-charcoal-50 focus:outline-none focus:ring-2 focus:ring-flame-300">
                      <option>Term 1 · 2024–2025</option>
                    </select>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-800 mb-5">
                  <strong>Before publishing:</strong> Verify all subject marks are combined, grades are assigned, and class positions are correct. Published results are immediately accessible by parents via the results portal.
                </div>

                {publishedClass ? (
                  <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm rounded-xl px-4 py-3">
                    <CheckCircle2 size={16} />
                    <span className="font-medium">{publishedClass} results published successfully!</span>
                  </div>
                ) : (
                  <button
                    onClick={handlePublish}
                    disabled={publishing}
                    className="w-full flex items-center justify-center gap-2 bg-flame-500 hover:bg-flame-600 disabled:opacity-60 text-white font-medium py-3 rounded-xl text-sm transition-all"
                  >
                    {publishing
                      ? <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      : <Send size={15} />
                    }
                    {publishing ? 'Publishing...' : 'Publish Results for Form 3A'}
                  </button>
                )}
              </div>

              {/* Publication log */}
              <div className="bg-white border border-charcoal-100 rounded-xl overflow-hidden">
                <div className="px-5 py-3 border-b border-charcoal-100 bg-charcoal-50">
                  <h3 className="text-sm font-semibold text-charcoal-700">Publication Log</h3>
                </div>
                <div className="divide-y divide-charcoal-50">
                  {[
                    { cls: 'Standard 6B', term: 'Term 1', date: '12 Mar 2025', by: 'F. Rashid', status: 'Published' },
                    { cls: 'Form 3A', term: 'Term 1', date: publishedClass ? 'Today' : '—', by: publishedClass ? 'F. Rashid' : '—', status: publishedClass ? 'Published' : 'Pending' },
                  ].map((log, i) => (
                    <div key={i} className="px-5 py-4 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-charcoal-800">{log.cls} · {log.term}</div>
                        <div className="text-xs text-charcoal-400 mt-0.5">{log.date} · {log.by}</div>
                      </div>
                      <span className={`text-xs font-medium border px-3 py-1 rounded-full ${log.status === 'Published' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-charcoal-50 text-charcoal-500 border-charcoal-200'}`}>
                        {log.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
