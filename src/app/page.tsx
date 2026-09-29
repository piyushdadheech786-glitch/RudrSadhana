'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { Sparkles, Calendar, BookOpen, Clock, Flame, ArrowRight, ShieldCheck, Heart, Play, Volume2 } from 'lucide-react';
import { getFullPanchang } from '@/lib/panchang-engine';
import { STOTRAS_DATA } from '@/lib/stotras-data';
import { FESTIVALS_DATA } from '@/lib/festivals-data';
import PanchangHeroCard from '@/components/panchang/PanchangHeroCard';
import DrikPanchangCard from '@/components/panchang/DrikPanchangCard';
import ChoghadiyaTable from '@/components/panchang/ChoghadiyaTable';
import MuhuratGrid from '@/components/panchang/MuhuratGrid';

export default function HomePage() {
  const panchang = useMemo(() => getFullPanchang(), []);

  return (
    <div className="min-h-screen bg-[#0a0a0c]">
      {/* 1. Grand Vedic Cosmic Hero */}
      <section className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-24 border-b border-amber-900/20">
        {/* Subtle aura lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-b from-amber-500/10 via-orange-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>सत्यम् शिवम् सुन्दरम् • वैदिक पंचांग व आध्यात्मिक पोर्टल</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight sm:leading-none mb-6">
              दैनिक वैदिक पंचांग,{' '}
              <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                चौघड़िया
              </span>{' '}
              व साधना महासागर
            </h1>

            <p className="text-sm sm:text-lg text-neutral-300 leading-relaxed mb-8 font-normal">
              सनातन धर्म की प्रमाणिक गणनाओं के साथ आज का शुभ-अशुभ मुहूर्त, राहु काल, 
              प्रदोष व्रत, दुर्लभ शिव स्तोत्र व 108 डिजिटल जप माला का सम्पूर्ण संकलन।
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/sadhana"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 text-black font-extrabold text-sm sm:text-base shadow-xl shadow-orange-500/25 hover:brightness-110 active:scale-95 transition-all"
              >
                <span>🔱 108 डिजिटल जप माला खोलें</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/panchang"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-neutral-900 border border-amber-900/40 text-neutral-200 hover:text-amber-300 hover:border-amber-500/40 font-semibold text-sm sm:text-base transition-all"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>आज का विस्तृत पंचांग</span>
              </Link>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-4 text-center">
            <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-3.5">
              <p className="text-xs text-neutral-400 font-medium">आज की तिथि</p>
              <p className="text-base font-bold text-amber-300 mt-0.5">{panchang.tithi.nameHi}</p>
              <p className="text-[10px] text-neutral-400">{panchang.tithi.pakshaHi} पक्ष</p>
            </div>
            <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-3.5">
              <p className="text-xs text-neutral-400 font-medium">आज का नक्षत्र</p>
              <p className="text-base font-bold text-amber-300 mt-0.5">{panchang.nakshatra.nameHi}</p>
              <p className="text-[10px] text-neutral-400">देवता: {panchang.nakshatra.deity}</p>
            </div>
            <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-3.5">
              <p className="text-xs text-neutral-400 font-medium">अभिजित मुहूर्त</p>
              <p className="text-base font-bold text-emerald-400 mt-0.5">{panchang.shubhMuhurats[1].start}</p>
              <p className="text-[10px] text-neutral-400">विजय व सिद्धि कारक</p>
            </div>
            <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-3.5">
              <p className="text-xs text-neutral-400 font-medium">राहु काल</p>
              <p className="text-base font-bold text-red-400 mt-0.5">{panchang.ashubhMuhurats[0].start}</p>
              <p className="text-[10px] text-neutral-400">शुभ कार्य वर्जित</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Hub */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* Signature Drik Panchang Card: Diyas, Moon Phase, City Selector & Timeline */}
        <section>
          <DrikPanchangCard />
        </section>

        {/* 2. Today's Core Vedic Panchang Card */}
        <section>
          <PanchangHeroCard />
        </section>

        {/* 3. Choghadiya Table (Day & Night) */}
        <section>
          <ChoghadiyaTable
            dayChoghadiya={panchang.dayChoghadiya}
            nightChoghadiya={panchang.nightChoghadiya}
          />
        </section>

        {/* 4. Shubh & Ashubh Muhurats Grid */}
        <section>
          <MuhuratGrid
            shubhMuhurats={panchang.shubhMuhurats}
            ashubhMuhurats={panchang.ashubhMuhurats}
          />
        </section>

        {/* 5. Stotra & Mantra Mahasagar (SEO Anchor) */}
        <section className="rounded-3xl bg-[#0f0f15] border border-amber-900/20 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <BookOpen className="w-5 h-5 text-amber-400" />
                <h3 className="text-2xl font-bold text-white">स्तोत्र व मन्त्र महासागर</h3>
              </div>
              <p className="text-xs text-neutral-400">
                संस्कृत मूल श्लोक, भावार्थ, जप विधि व आध्यात्मिक लाभ
              </p>
            </div>
            <Link
              href="/stotras"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300"
            >
              <span>सम्पूर्ण स्तोत्र संग्रह देखें</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {STOTRAS_DATA.map((stotra) => (
              <Link
                key={stotra.id}
                href={`/stotras/${stotra.slug}`}
                className="group relative flex flex-col justify-between p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-amber-500/40 hover:bg-neutral-900 transition-all shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-semibold text-amber-400/90 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                      {stotra.tags[0]}
                    </span>
                    <span className="text-[11px] text-neutral-400 font-mono">
                      {stotra.verses.length} श्लोक
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {stotra.titleHi}
                  </h4>
                  <p className="text-xs text-neutral-400 font-medium mb-3">
                    {stotra.title}
                  </p>
                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-4">
                    {stotra.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
                  <span>सार्थ पाठ पढ़ें</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 6. Upcoming Festivals & Vrats */}
        <section className="rounded-3xl bg-[#0f0f15] border border-amber-900/20 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Flame className="w-5 h-5 text-orange-400" />
                <h3 className="text-2xl font-bold text-white">प्रमुख व्रत व त्यौहार (Vrat & Festivals)</h3>
              </div>
              <p className="text-xs text-neutral-400">
                महाशिवरात्रि, प्रदोष, मासिक शिवरात्रि व सावन सोमवार की तिथियां
              </p>
            </div>
            <Link
              href="/festivals"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300"
            >
              <span>सम्पूर्ण व्रत पंचांग</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FESTIVALS_DATA.slice(0, 3).map((f) => (
              <div
                key={f.id}
                className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded-full border border-orange-500/20">
                      {f.month}
                    </span>
                    <span className="text-[11px] text-neutral-400 font-medium">
                      {f.fastingRecommended ? 'उपवास विहित' : 'उत्सव'}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">{f.nameHi}</h4>
                  <p className="text-xs text-amber-300 font-semibold mb-2">{f.date}</p>
                  <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed">
                    {f.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-800/80 text-[11px] text-neutral-400">
                  <span className="font-semibold text-neutral-300">तिथि:</span> {f.tithi}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Dedicated Sadhana App Banner (Call to Action) */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-950/40 via-orange-950/30 to-neutral-950 border border-amber-600/30 p-8 sm:p-12 shadow-2xl">
          <div className="max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              दैनिक आध्यात्मिक साधना
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-4 mb-3 tracking-tight">
              108 मनकों की डिजिटल जप माला व शिव संकल्प
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6 font-normal">
              मोबाइल व डेस्कटॉप पर स्पर्श (Haptic Vibration) के साथ जप करें, 21 व 40 दिवसीय संकल्प की निरंतरता बनाए रखें, और शिव नाम के स्पंदन में लीन हों।
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/sadhana"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-extrabold text-sm sm:text-base shadow-lg hover:brightness-110 active:scale-95 transition-all"
              >
                <span>साधना ऐप प्रारंभ करें</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
