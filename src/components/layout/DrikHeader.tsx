'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Mic, Settings, User, Sparkles, Menu, X, Clock } from 'lucide-react';

export default function DrikHeader() {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();

  // Live ticking clock (e.g. 21:24:12 Tue Sep 29, 2026)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-GB', { hour12: false });
      const dateStr = now.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
      setCurrentTime(`${timeStr} ${dateStr}`);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { label: 'होम', labelEn: 'Home', href: '/' },
    { label: 'पञ्चाङ्ग', labelEn: 'Panchang', href: '/panchang' },
    { label: 'चौघड़िया', labelEn: 'Choghadiya', href: '/panchang#choghadiya' },
    { label: 'मुहूर्त', labelEn: 'Muhurat', href: '/panchang#muhurat' },
    { label: 'व्रत एवं उपवास', labelEn: 'Vrat', href: '/festivals' },
    { label: 'त्यौहार', labelEn: 'Festivals', href: '/festivals' },
    { label: 'स्तोत्र सागर', labelEn: 'Stotras', href: '/stotras' },
    { label: 'साधना ऐप 🔱', labelEn: 'Japa App', href: '/sadhana', isSpecial: true },
  ];

  return (
    <header className="w-full bg-[#100c0a] border-b border-amber-900/30 text-neutral-100 font-sans shadow-md">
      {/* 1. Top Bar: Logo, Search, Language, Clock */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-4">
        {/* Brand Logo with Panditji / Rishi Icon */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-600 via-orange-600 to-amber-800 p-0.5 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center text-2xl">
            🕉️
          </div>
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-amber-400 font-serif">
                Rudr<span className="text-orange-500">Panchang</span>
              </span>
              <span className="text-[10px] text-amber-500/80 font-bold uppercase">®</span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-amber-200/70 font-medium">
              द्रिक वैदिक पञ्चाङ्ग • साधना मंच
            </p>
          </div>
        </Link>

        {/* Center Search Input */}
        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="खोजिये पञ्चाङ्ग, तिथि, व्रत, स्तोत्र, मुहूर्त..."
              className="w-full bg-neutral-900/90 border border-amber-900/40 rounded-full pl-10 pr-10 py-1.5 text-xs text-white placeholder-neutral-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/40 shadow-inner"
            />
            <Search className="w-4 h-4 text-amber-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <Mic className="w-3.5 h-3.5 text-neutral-400 hover:text-amber-400 absolute right-3.5 top-1/2 -translate-y-1/2 cursor-pointer" />
          </div>
        </div>

        {/* Right Tools: Language, Clock, Login, Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Hindi / English Toggle */}
          <div className="hidden sm:flex items-center bg-neutral-900 border border-neutral-800 rounded-lg p-0.5 text-xs font-bold text-amber-300">
            <span className="px-2 py-0.5 rounded bg-amber-600/30 text-amber-200">हिं</span>
            <span className="px-2 py-0.5 text-neutral-400 hover:text-white cursor-pointer">EN</span>
          </div>

          {/* Live Digital Clock (Matches Drik Panchang) */}
          <div className="hidden lg:flex flex-col text-right font-mono bg-neutral-900/80 border border-neutral-800/80 px-2.5 py-1 rounded-lg">
            <span className="text-[11px] font-bold text-amber-300">
              {currentTime || '21:24:00 Tue Sep 29'}
            </span>
            <span className="text-[9px] text-neutral-400">भारतीय मानक समय (IST)</span>
          </div>

          {/* Settings Icon */}
          <button
            title="पंचांग सेटिंग्स"
            className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-amber-300 transition-colors"
          >
            <Settings className="w-4 h-4" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 md:hidden rounded-lg bg-neutral-900 border border-neutral-800 text-amber-400"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* 2. Drik Style Navigation Bar (Traditional Deep Crimson / Maroon Bar) */}
      <nav className="bg-[#6B1717] border-y border-[#8B2323] shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex items-center justify-between text-xs font-bold">
            <div className="flex items-center overflow-x-auto scrollbar-none py-1">
              {navItems.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    className={`px-3.5 py-2 border-r border-[#8B2323] transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                      item.isSpecial
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-black hover:brightness-110 ml-2 rounded font-black shadow'
                        : isActive
                        ? 'bg-[#8B1E1E] text-amber-300'
                        : 'text-amber-100 hover:bg-[#8B1E1E] hover:text-amber-300'
                    }`}
                  >
                    {item.isSpecial && <Sparkles className="w-3.5 h-3.5 fill-black" />}
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Quick Link on far right */}
            <div className="text-[11px] font-semibold text-amber-200/90 whitespace-nowrap pl-3">
              दैनिक पंचांग व पंचांग सारणी
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#160c0c] border-b border-amber-900/40 p-4 space-y-2 animate-fadeIn">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between p-3 rounded-xl border text-sm font-bold ${
                item.isSpecial
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-black border-amber-400 shadow-md'
                  : 'bg-neutral-900/80 border-neutral-800 text-amber-200 hover:border-amber-500/40'
              }`}
            >
              <span>{item.label}</span>
              <span className="text-xs opacity-75">{item.labelEn}</span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
