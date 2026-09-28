'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { Sun, Moon, Sunrise, Sunset, Clock, AlertTriangle, ShieldCheck, Calendar, ArrowRight } from 'lucide-react';
import { getFullPanchang } from '@/lib/panchang-engine';

export default function PanchangHeroCard() {
  const panchang = useMemo(() => getFullPanchang(), []);

  // Find active muhurats
  const activeShubh = panchang.shubhMuhurats.find((m) => m.isActive);
  const activeAshubh = panchang.ashubhMuhurats.find((m) => m.isActive);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#121218] via-[#161622] to-[#0d0d12] border border-amber-900/30 p-6 sm:p-8 shadow-2xl">
      {/* Decorative cosmic background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Row */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-neutral-800/80 pb-6 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>आज का वैदिक पंचांग</span>
            </span>
            <span className="text-xs text-neutral-400 font-medium">
              विक्रम संवत् {panchang.samvat.vikram} ({panchang.samvat.vikramName}) • शक {panchang.samvat.shaka}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {panchang.formattedDate}
          </h2>
          <p className="text-sm text-amber-300 font-medium mt-1">
            {panchang.dayOfWeekHi} ({panchang.dayOfWeek}) • {panchang.samvat.monthHi} मास • {panchang.samvat.rituHi} ऋतु • {panchang.samvat.ayanaHi}
          </p>
        </div>

        {/* Live Muhurat Status Pill */}
        <div className="flex flex-wrap items-center gap-2">
          {activeAshubh ? (
            <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-red-950/50 border border-red-900/50 text-red-300 text-xs font-semibold animate-pulse">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span>राहु काल सक्रिय: {activeAshubh.start} - {activeAshubh.end}</span>
            </div>
          ) : activeShubh ? (
            <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-emerald-950/50 border border-emerald-800/50 text-emerald-300 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>शुभ मुहूर्त सक्रिय: {activeShubh.nameHi} ({activeShubh.start} - {activeShubh.end})</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-neutral-900/80 border border-neutral-800 text-neutral-300 text-xs">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>अगला शुभ समय: अभिजित मुहूर्त</span>
            </div>
          )}
        </div>
      </div>

      {/* Core 5 Limbs Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-6">
        {/* Tithi */}
        <div className="bg-neutral-900/70 border border-neutral-800/80 rounded-2xl p-4">
          <p className="text-[11px] font-medium text-amber-400/80 uppercase tracking-wider mb-1">तिथि (Tithi)</p>
          <p className="text-lg font-bold text-white">{panchang.tithi.nameHi}</p>
          <p className="text-xs text-neutral-400">{panchang.tithi.pakshaHi} पक्ष</p>
          <p className="text-[10px] text-neutral-400 mt-2 font-mono">समाप्ति: {panchang.tithi.endTime}</p>
        </div>

        {/* Nakshatra */}
        <div className="bg-neutral-900/70 border border-neutral-800/80 rounded-2xl p-4">
          <p className="text-[11px] font-medium text-amber-400/80 uppercase tracking-wider mb-1">नक्षत्र (Nakshatra)</p>
          <p className="text-lg font-bold text-white">{panchang.nakshatra.nameHi}</p>
          <p className="text-xs text-neutral-400">{panchang.nakshatra.name}</p>
          <p className="text-[10px] text-neutral-400 mt-2 font-mono">देवता: {panchang.nakshatra.deity}</p>
        </div>

        {/* Yoga */}
        <div className="bg-neutral-900/70 border border-neutral-800/80 rounded-2xl p-4">
          <p className="text-[11px] font-medium text-amber-400/80 uppercase tracking-wider mb-1">योग (Yoga)</p>
          <p className="text-lg font-bold text-white">{panchang.yoga.nameHi}</p>
          <p className="text-xs text-neutral-400">{panchang.yoga.nature}</p>
          <p className="text-[10px] text-neutral-400 mt-2 font-mono">तक: {panchang.yoga.endTime}</p>
        </div>

        {/* Karana */}
        <div className="bg-neutral-900/70 border border-neutral-800/80 rounded-2xl p-4">
          <p className="text-[11px] font-medium text-amber-400/80 uppercase tracking-wider mb-1">करण (Karana)</p>
          <p className="text-lg font-bold text-white">{panchang.karana.nameHi}</p>
          <p className="text-xs text-neutral-400">{panchang.karana.name}</p>
          <p className="text-[10px] text-neutral-400 mt-2 font-mono">प्रकार: {panchang.karana.type}</p>
        </div>

        {/* Sun/Moon Sign */}
        <div className="bg-neutral-900/70 border border-neutral-800/80 rounded-2xl p-4 col-span-2 sm:col-span-1">
          <p className="text-[11px] font-medium text-amber-400/80 uppercase tracking-wider mb-1">सूर्य / चन्द्र राशि</p>
          <p className="text-sm font-bold text-amber-300">सूर्य: {panchang.rashis.suryaRashiHi}</p>
          <p className="text-sm font-bold text-sky-300 mt-0.5">चन्द्र: {panchang.rashis.chandraRashiHi}</p>
        </div>
      </div>

      {/* Solar & Lunar Timings Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-neutral-950/60 border border-neutral-800/80 rounded-2xl p-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
            <Sunrise className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] text-neutral-400">सूर्योदय (Sunrise)</p>
            <p className="text-sm font-bold text-white">{panchang.sunrise}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
            <Sunset className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] text-neutral-400">सूर्यास्त (Sunset)</p>
            <p className="text-sm font-bold text-white">{panchang.sunset}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400">
            <Moon className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] text-neutral-400">चन्द्रोदय (Moonrise)</p>
            <p className="text-sm font-bold text-white">{panchang.moonrise}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
            <Sun className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] text-neutral-400">चन्द्रास्त (Moonset)</p>
            <p className="text-sm font-bold text-white">{panchang.moonset}</p>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-neutral-400 font-medium">राहु काल (आज):</span>
          <span className="px-2.5 py-1 rounded-lg bg-red-950/40 border border-red-900/30 text-red-400 text-xs font-semibold">
            {panchang.ashubhMuhurats[0].start} - {panchang.ashubhMuhurats[0].end}
          </span>
          <span className="text-xs text-neutral-400 font-medium ml-2">अभिजित:</span>
          <span className="px-2.5 py-1 rounded-lg bg-emerald-950/40 border border-emerald-900/30 text-emerald-400 text-xs font-semibold">
            {panchang.shubhMuhurats[1].start} - {panchang.shubhMuhurats[1].end}
          </span>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Link
            href="/panchang"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/15 text-amber-300 border border-amber-500/30 hover:bg-amber-500/25 text-xs sm:text-sm font-semibold transition-all"
          >
            <span>विस्तृत पंचांग देखें</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/panchang#choghadiya"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-800 text-neutral-200 hover:text-white hover:bg-neutral-700 text-xs sm:text-sm font-medium transition-all"
          >
            <span>आज का चौघड़िया</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
