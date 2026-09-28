'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, Menu, X, Calendar, BookOpen, Clock, Flame, Heart } from 'lucide-react';

const NAV_LINKS = [
  { href: '/panchang', label: 'दैनिक पंचांग', labelEn: 'Daily Panchang', icon: Calendar },
  { href: '/panchang#choghadiya', label: 'चौघड़िया', labelEn: 'Choghadiya', icon: Clock },
  { href: '/stotras', label: 'स्तोत्र व मन्त्र', labelEn: 'Stotra Sangrah', icon: BookOpen },
  { href: '/festivals', label: 'व्रत व त्यौहार', labelEn: 'Vrat & Festivals', icon: Flame },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0c]/90 backdrop-blur-xl border-b border-amber-900/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 via-orange-600/30 to-amber-700/20 border border-amber-500/30 flex items-center justify-center text-xl shadow-inner group-hover:scale-105 transition-transform">
              🔱
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl tracking-wide bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                  RudrSadhana
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  Vedic
                </span>
              </div>
              <p className="text-[10px] text-neutral-400 font-medium">
                वैदिक पंचांग • साधना • स्तोत्र महासागर
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-xl text-xs lg:text-sm font-medium transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                      : 'text-neutral-300 hover:text-amber-300 hover:bg-neutral-800/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 text-amber-400" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Launch Sadhana App & Seva */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/sadhana"
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:brightness-110 shadow-lg shadow-orange-500/20 active:scale-95 transition-all"
            >
              <Sparkles className="w-4 h-4 text-neutral-900 fill-neutral-900" />
              <span>साधना ऐप (Japa App)</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/sadhana"
              className="px-2.5 py-1.5 rounded-lg text-xs font-bold text-black bg-gradient-to-r from-amber-400 to-orange-400"
            >
              साधना 🔱
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-neutral-800/80 text-neutral-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-amber-900/20 bg-neutral-950/95 backdrop-blur-2xl px-4 py-4 space-y-2">
          {NAV_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/60 text-neutral-200 hover:text-amber-300 hover:border-amber-500/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{link.label}</p>
                    <p className="text-[11px] text-neutral-500">{link.labelEn}</p>
                  </div>
                </div>
                <span className="text-xs text-neutral-600">→</span>
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/sadhana"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold text-sm shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>साधना ऐप खोलें (108 Japa Mala)</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
