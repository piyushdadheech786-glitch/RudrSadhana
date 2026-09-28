'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Flame, Calendar, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { FESTIVALS_DATA } from '@/lib/festivals-data';

export default function FestivalsPage() {
  const [filter, setFilter] = useState<'All' | 'Major' | 'High'>('All');

  const filtered = FESTIVALS_DATA.filter((item) => {
    if (filter === 'All') return true;
    return item.importance === filter;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0c] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
            सनातन व्रत व पर्व
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            श्री शिव व्रत एवं प्रमुख हिन्दू त्यौहार पंचांग
          </h1>
          <p className="text-sm sm:text-base text-neutral-400">
            महाशिवरात्रि, प्रदोष व्रत, मासिक शिवरात्रि, सावन सोमवार एवं पवित्र उत्सवों की तिथियां व प्रामाणिक पूजा विधि
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center gap-2">
          {(['All', 'Major', 'High'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === tab
                  ? 'bg-orange-500/20 text-orange-300 border border-orange-500/40 shadow-sm'
                  : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white'
              }`}
            >
              {tab === 'All' ? 'सभी पर्व (All Festivals)' : tab === 'Major' ? 'महापर्व (Major)' : 'महत्वपूर्ण व्रत (High)'}
            </button>
          ))}
        </div>

        {/* Festival Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {filtered.map((fest) => (
            <div
              key={fest.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-[#0f0f15] border border-amber-900/20 hover:border-orange-500/40 transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                    {fest.month} मास
                  </span>
                  <span
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded-md ${
                      fest.fastingRecommended
                        ? 'bg-amber-950/60 text-amber-300 border border-amber-800/60'
                        : 'bg-neutral-800 text-neutral-400'
                    }`}
                  >
                    {fest.fastingRecommended ? '✓ उपवास विहित' : 'उत्सव / पर्व'}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {fest.nameHi}
                </h3>
                <p className="text-xs text-neutral-400 font-medium mb-3">
                  {fest.name}
                </p>

                <div className="bg-neutral-900/80 p-3 rounded-2xl border border-neutral-800 mb-4 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-400">दिनांक (Date):</span>
                    <span className="text-amber-300 font-bold">{fest.date}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-400">तिथि (Tithi):</span>
                    <span className="text-neutral-200 font-medium">{fest.tithi}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-400">पूज्य देव:</span>
                    <span className="text-neutral-200 font-medium">{fest.deity}</span>
                  </div>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                  {fest.description}
                </p>

                <div className="bg-orange-950/20 p-3 rounded-2xl border border-orange-900/30">
                  <p className="text-[11px] font-bold text-orange-400 uppercase tracking-wider mb-1">
                    पूजा व व्रत विधि:
                  </p>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {fest.vidhi}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-800/80 flex items-center justify-between">
                <Link
                  href="/sadhana"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>इस व्रत का संकल्प लें</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
