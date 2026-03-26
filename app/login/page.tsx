'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Eye, EyeOff, Lock, Mail, ChevronRight } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [role, setRole] = useState<'teacher' | 'admin'>('teacher')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) { setError('Please fill in all fields.'); return }
    setLoading(true)
    setError('')
    await new Promise(r => setTimeout(r, 900))
    setLoading(false)
    // Mock redirect
    if (role === 'teacher') window.location.href = '/dashboard/teacher'
    else window.location.href = '/dashboard/admin'
  }

  return (
    <main className="min-h-screen bg-charcoal-950 flex items-center justify-center px-5 py-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: `linear-gradient(#e83010 1px, transparent 1px), linear-gradient(90deg, #e83010 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-flame-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex flex-col items-center gap-3">
            <div className="relative w-14 h-14">
              <Image src="/images/school-logo.png" alt="Logo" fill className="object-contain" />
            </div>
            <div>
              <div className="font-display font-bold text-white text-xl">Flame Academy</div>
              <div className="text-xs text-charcoal-400 tracking-[0.15em] uppercase mt-0.5">Staff Portal</div>
            </div>
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Role tabs */}
          <div className="grid grid-cols-2 border-b border-charcoal-100">
            {(['teacher', 'admin'] as const).map(r => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`py-3.5 text-sm font-medium capitalize transition-colors ${role === r ? 'bg-charcoal-950 text-white' : 'text-charcoal-500 hover:text-charcoal-700 bg-white'}`}
              >
                {r === 'teacher' ? 'Teacher Login' : 'Admin Login'}
              </button>
            ))}
          </div>

          <form onSubmit={handleLogin} className="p-7 space-y-4">
            <div>
              <label className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider block mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal-300" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@school.ac.tz"
                  className="w-full pl-10 pr-4 py-3 border border-charcoal-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-flame-300 focus:border-flame-400 bg-charcoal-50 text-charcoal-800 placeholder:text-charcoal-300"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider block mb-2">
                Password
              </label>
              <div className="relative">
                <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal-300" />
                <input
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-3 border border-charcoal-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-flame-300 focus:border-flame-400 bg-charcoal-50 text-charcoal-800 placeholder:text-charcoal-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-charcoal-300 hover:text-charcoal-500"
                >
                  {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">{error}</p>
            )}

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-charcoal-500 cursor-pointer">
                <input type="checkbox" className="rounded" />
                Remember me
              </label>
              <button type="button" className="text-flame-500 hover:text-flame-600 font-medium">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-flame-500 hover:bg-flame-600 disabled:opacity-60 text-white font-medium py-3 rounded-xl transition-all shadow-sm text-sm mt-2"
            >
              {loading
                ? <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                : <>Sign In <ChevronRight size={15} /></>
              }
            </button>
          </form>

          <div className="px-7 pb-5 text-center">
            <Link href="/" className="text-xs text-charcoal-400 hover:text-flame-500 transition-colors">
              ← Back to school website
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
