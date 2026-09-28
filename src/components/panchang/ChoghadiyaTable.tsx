'use client';

import { useState } from 'react';
import { Sun, Moon, Clock, Sparkles } from 'lucide-react';
import { ChoghadiyaPeriod } from '@/lib/panchang-engine';

interface Props {
  dayChoghadiya: ChoghadiyaPeriod[];
  nightChoghadiya: ChoghadiyaPeriod[];
}

export default function ChoghadiyaTable({ dayChoghadiya, nightChoghadiya }: Props) {
  const [activeTab, setActiveTab] = useState<'day' | 'night'>('day');

  const getBadgeStyle = (quality: string) => {
    switch (quality) {
      case 'Amrit':
        return 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60 ring-1 ring-emerald-500/30';
      case 'Shubh':
        return 'bg-teal-950/60 text-teal-300 border-teal-800/60';
      case 'Labh':
        return 'bg-sky-950/60 text-sky-300 border-sky-800/60';
      case 'Char':
        return 'bg-amber-950/60 text-amber-300 border-amber-800/60';
      case 'Rog':
        return 'bg-orange-950/60 text-orange-400 border-orange-900/60';
      case 'Kaal':
        return 'bg-rose-950/60 text-rose-400 border-rose-900/60';
      case 'Udveg':
        return 'bg-red-950/60 text-red-400 border-red-900/60';
      default:
        return 'bg-neutral-800 text-neutral-300 border-neutral-700';
    }
  };

  const currentList = activeTab === 'day' ? dayChoghadiya : nightChoghadiya;

  return (
    <div id="choghadiya" className="rounded-3xl bg-[#0f0f15] border border-amber-900/20 p-6 sm:p-8 shadow-xl">
      {/* Header & Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Clock className="w-4 h-4 text-amber-400" />
            <h3 className="text-xl sm:text-2xl font-bold text-white">दैनिक चौघड़िया मुहूर्त (Choghadiya)</h3>
          </div>
          <p className="text-xs text-neutral-400">
            कार्य सिद्धि हेतु दिन व रात्रि के चौघड़िया काल की सटीक गणना
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center bg-neutral-900 border border-neutral-800 p-1 rounded-2xl w-fit">
          <button
            onClick={() => setActiveTab('day')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'day'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>दिन का चौघड़िया (Day)</span>
          </button>
          <button
            onClick={() => setActiveTab('night')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'night'
                ? 'bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Moon className="w-3.5 h-3.5" />
            <span>रात्रि का चौघड़िया (Night)</span>
          </button>
        </div>
      </div>

      {/* Guide Legend */}
      <div className="flex flex-wrap items-center gap-2 mb-6 text-[11px] pb-4 border-b border-neutral-800/80">
        <span className="text-neutral-400 font-semibold mr-1">संकेत:</span>
        <span className="px-2 py-0.5 rounded-md bg-emerald-950/60 text-emerald-300 border border-emerald-800/50">
          अमृत (सर्वोत्तम)
        </span>
        <span className="px-2 py-0.5 rounded-md bg-teal-950/60 text-teal-300 border border-teal-800/50">
          शुभ (उत्तम)
        </span>
        <span className="px-2 py-0.5 rounded-md bg-sky-950/60 text-sky-300 border border-sky-800/50">
          लाभ (उन्नति)
        </span>
        <span className="px-2 py-0.5 rounded-md bg-amber-950/60 text-amber-300 border border-amber-800/50">
          चर (सामान्य)
        </span>
        <span className="px-2 py-0.5 rounded-md bg-orange-950/60 text-orange-400 border border-orange-900/50">
          रोग (अशुभ)
        </span>
        <span className="px-2 py-0.5 rounded-md bg-rose-950/60 text-rose-400 border border-rose-900/50">
          काल (हानिकारक)
        </span>
        <span className="px-2 py-0.5 rounded-md bg-red-950/60 text-red-400 border border-red-900/50">
          उद्वेग (चिंता)
        </span>
      </div>

      {/* Grid of 8 Choghadiya cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {currentList.map((period, i) => (
          <div
            key={i}
            className={`relative p-4 rounded-2xl border transition-all ${
              period.isActive
                ? 'bg-neutral-900 border-amber-500/60 shadow-lg ring-1 ring-amber-500/30'
                : 'bg-neutral-900/50 border-neutral-800/80 hover:border-neutral-700'
            }`}
          >
            {period.isActive && (
              <span className="absolute top-2.5 right-2.5 flex items-center gap-1 text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                चल रहा है (Now)
              </span>
            )}

            <div className="flex items-center gap-2 mb-2">
              <span
                className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${getBadgeStyle(
                  period.quality
                )}`}
              >
                {period.nameHi} ({period.name})
              </span>
              <span className="text-[11px] text-neutral-400 font-medium">
                {period.nature}
              </span>
            </div>

            <div className="mt-3">
              <p className="text-sm font-semibold text-white tracking-wide">
                {period.start} — {period.end}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
