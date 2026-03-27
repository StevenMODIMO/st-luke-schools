'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Academics', href: '/academics' },
  {
    label: 'Portal',
    href: '#',
    children: [
      { label: 'Check Results', href: '/results' },
      { label: 'Teacher Dashboard', href: '/dashboard/teacher' },
      { label: 'Admin Dashboard', href: '/dashboard/admin' },
    ],
  },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-charcoal-100">
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex-shrink-0">
            <Image
              src="/images/school-logos.png"
              alt="Flame Academy Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-charcoal-900 text-sm tracking-wide">
              St. Luke Endamaghan Schools
            </div>
            <div className="text-[10px] text-charcoal-400 tracking-[0.12em] uppercase font-body">
              Academic Excellence with Integrity
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <li key={link.label} className="relative">
                <button
                  onClick={() => setDropOpen(!dropOpen)}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-body font-medium text-charcoal-600 hover:text-flame-500 transition-colors rounded-md hover:bg-flame-50"
                >
                  {link.label}
                  <ChevronDown size={14} className={`transition-transform ${dropOpen ? 'rotate-180' : ''}`} />
                </button>
                {dropOpen && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-charcoal-100 rounded-xl shadow-lg overflow-hidden">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setDropOpen(false)}
                        className="block px-4 py-3 text-sm text-charcoal-700 hover:bg-flame-50 hover:text-flame-600 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm font-body font-medium text-charcoal-600 hover:text-flame-500 transition-colors rounded-md hover:bg-flame-50 block"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium text-charcoal-600 hover:text-flame-500 transition-colors px-3 py-1.5"
          >
            Staff Login
          </Link>
          <Link
            href="/results"
            className="text-sm font-medium bg-flame-500 hover:bg-flame-600 text-white px-4 py-2 rounded-lg transition-colors shadow-sm"
          >
            Check Results
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md text-charcoal-600"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-charcoal-100 px-5 py-4 space-y-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <div className="px-3 py-2 text-xs font-semibold text-charcoal-400 uppercase tracking-wider">
                  {link.label}
                </div>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setOpen(false)}
                    className="block px-5 py-2.5 text-sm text-charcoal-700 hover:text-flame-500 transition-colors"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-charcoal-700 hover:text-flame-500 transition-colors rounded-md"
              >
                {link.label}
              </Link>
            )
          )}
          <div className="pt-3 border-t border-charcoal-100 flex flex-col gap-2">
            <Link href="/login" onClick={() => setOpen(false)} className="text-sm text-center py-2 text-charcoal-600">
              Staff Login
            </Link>
            <Link
              href="/results"
              onClick={() => setOpen(false)}
              className="text-sm text-center bg-flame-500 text-white py-2.5 rounded-lg font-medium"
            >
              Check Results
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
