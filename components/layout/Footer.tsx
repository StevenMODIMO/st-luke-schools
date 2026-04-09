import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 text-charcoal-300">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 bg-white/10 rounded-lg p-1">
                <Image src="/images/school-logos.png" alt="Logo" fill className="object-contain" />
              </div>
              <div>
                <div className="font-display font-bold text-white text-base">St.Luke Endamaghan Schools</div>
                <div className="text-[10px] text-charcoal-400 tracking-[0.1em] uppercase">Est. 2026</div>
              </div>
            </div>
            <p className="text-sm text-charcoal-400 leading-relaxed mb-5">
              Nurturing excellence in primary, secondary, and senior secondary education with values-driven learning and academic rigour.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <button key={i} className="w-8 h-8 rounded-full bg-charcoal-800 hover:bg-flame-500 flex items-center justify-center transition-colors">
                  <Icon size={14} className="text-charcoal-300" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {['About Us', 'Academic Programs', 'News & Events', 'Gallery', 'Contact Us'].map(link => (
                <li key={link}>
                  <Link href="#" className="text-sm text-charcoal-400 hover:text-flame-400 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portals */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4 uppercase tracking-wider">Portals</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Check Results', href: '/results' },
                { label: 'Staff Login', href: '/login' },
                { label: 'Teacher Dashboard', href: '/dashboard/teacher' },
                { label: 'Admin Dashboard', href: '/dashboard/admin' },
              ].map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-charcoal-400 hover:text-flame-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <Link href="https://www.google.com/maps/place/St.+Luke+Primary+School/@-3.222053,35.2651412,17z/data=!3m1!4b1!4m6!3m5!1s0x1834631a4709fb65:0xcf73e89a6e0559a9!8m2!3d-3.222053!4d35.2651412!16s%2Fg%2F11ptsbh3vh?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D" target="_blank" className="flex items-start gap-2.5 text-sm text-flame-400 underline cursor-pointer">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-flame-400" />
                <span>Endulen, Arusha, Tanzania</span>
              </Link>
              <li className="flex items-center gap-2.5 text-sm text-charcoal-400">
                <Phone size={14} className="flex-shrink-0 text-flame-400" />
                <span>+255 712 345 678</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-charcoal-400">
                <Mail size={14} className="flex-shrink-0 text-flame-400" />
                <span>info@st-luke-schools.ac.tz</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-charcoal-800">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-charcoal-500">© {new Date().getFullYear()} Flame Academy. All rights reserved.</p>
          <p className="text-xs text-charcoal-600">Designed for academic excellence.</p>
        </div>
      </div>
    </footer>
  )
}
