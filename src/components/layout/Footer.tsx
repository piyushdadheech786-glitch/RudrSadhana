import Link from 'next/link';
import { Heart, Music, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#070709] border-t border-amber-900/20 text-neutral-400 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 via-orange-600/30 to-amber-700/20 border border-amber-500/30 flex items-center justify-center text-xl shadow-inner">
                🔱
              </div>
              <span className="font-extrabold text-xl tracking-wide bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                RudrSadhana
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              सनातन धर्म की शुद्ध वैदिक गणनाओं, दैनिक पंचांग, चौघड़िया, दुर्लभ स्तोत्र संग्रह और डिजिटल साधना का आधुनिक आध्यात्मिक मंच।
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.youtube.com/@rudrshivansh-108"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-950/40 border border-red-900/40 text-red-400 hover:bg-red-900/40 text-xs transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>Rudrshivansh Official</span>
              </a>
            </div>
          </div>

          {/* Quick Links: Panchang */}
          <div>
            <h4 className="text-sm font-semibold text-amber-400 tracking-wider uppercase mb-3">
              दैनिक पंचांग व काल
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/panchang" className="hover:text-amber-300 transition-colors">
                  आज का सम्पूर्ण पंचांग (Tithi & Nakshatra)
                </Link>
              </li>
              <li>
                <Link href="/panchang#choghadiya" className="hover:text-amber-300 transition-colors">
                  दिन व रात का चौघड़िया (Day & Night)
                </Link>
              </li>
              <li>
                <Link href="/panchang#muhurat" className="hover:text-amber-300 transition-colors">
                  ब्रह्म व अभिजित मुहूर्त (Shubh Timings)
                </Link>
              </li>
              <li>
                <Link href="/panchang#ashubh" className="hover:text-amber-300 transition-colors">
                  राहु काल व यमगण्ड समय (Inauspicious Windows)
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links: Stotra Sangrah */}
          <div>
            <h4 className="text-sm font-semibold text-amber-400 tracking-wider uppercase mb-3">
              स्तोत्र व मन्त्र सागर
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/stotras/shiva-tandava-stotram" className="hover:text-amber-300 transition-colors">
                  शिव ताण्डव स्तोत्रम् (सार्थ व भावार्थ)
                </Link>
              </li>
              <li>
                <Link href="/stotras/mahamrityunjaya-mantra" className="hover:text-amber-300 transition-colors">
                  महामृत्युंजय मन्त्र (ऋग्वेद जप विधि)
                </Link>
              </li>
              <li>
                <Link href="/stotras/lingashtakam-stotram" className="hover:text-amber-300 transition-colors">
                  लिङ्गाष्टकम् स्तोत्रम् (आदि शंकराचार्य)
                </Link>
              </li>
              <li>
                <Link href="/stotras/rudrashtakam-stotram" className="hover:text-amber-300 transition-colors">
                  श्री रुद्राष्टकम् (तुलसीदास कृत)
                </Link>
              </li>
              <li>
                <Link href="/stotras/shri-shiv-chalisa" className="hover:text-amber-300 transition-colors">
                  श्री शिव चालीसा (नित्य पाठ)
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links: Sadhana & Seva */}
          <div>
            <h4 className="text-sm font-semibold text-amber-400 tracking-wider uppercase mb-3">
              आध्यात्मिक साधना
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/sadhana" className="flex items-center gap-1.5 text-amber-300 hover:underline font-semibold">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  108 डिजिटल जप माला (Haptic Counter)
                </Link>
              </li>
              <li>
                <Link href="/sadhana" className="hover:text-amber-300 transition-colors">
                  21 व 40 दिवसीय शिव संकल्प ट्रैकर
                </Link>
              </li>
              <li>
                <Link href="/festivals" className="hover:text-amber-300 transition-colors">
                  आगामी प्रदोष व मासिक शिवरात्रि व्रत
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} RudrSadhana. All Rights Reserved. Devotionally crafted by Rudrshivansh.</p>
          <div className="flex items-center gap-4">
            <span>ॐ नमः शिवाय</span>
            <span>•</span>
            <span>सत्यम् शिवम् सुन्दरम्</span>
            <span>•</span>
            <span>हर हर महादेव</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
