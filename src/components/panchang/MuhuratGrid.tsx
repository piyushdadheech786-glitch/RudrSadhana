'use client';

import { Sparkles, AlertOctagon, CheckCircle2 } from 'lucide-react';
import { MuhuratTime } from '@/lib/panchang-engine';

interface Props {
  shubhMuhurats: MuhuratTime[];
  ashubhMuhurats: MuhuratTime[];
}

export default function MuhuratGrid({ shubhMuhurats, ashubhMuhurats }: Props) {
  return (
    <div id="muhurat" className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
      {/* Shubh Muhurats */}
      <div className="rounded-3xl bg-[#0d1210] border border-emerald-900/30 p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">शुभ मुहूर्त (Auspicious Timings)</h3>
            <p className="text-xs text-emerald-400/80">पूजा, जप, नए कार्य व अनुष्ठान हेतु कल्याणकारी समय</p>
          </div>
        </div>

        <div className="space-y-3 mt-6">
          {shubhMuhurats.map((m, i) => (
            <div
              key={i}
              className={`p-4 rounded-2xl border transition-all ${
                m.isActive
                  ? 'bg-emerald-950/40 border-emerald-500/60 ring-1 ring-emerald-500/30'
                  : 'bg-neutral-900/40 border-neutral-800/80 hover:border-emerald-900/50'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm sm:text-base text-white">{m.nameHi}</span>
                  <span className="text-xs text-neutral-400">({m.name})</span>
                </div>
                {m.isActive ? (
                  <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-500/40">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    सक्रिय (Active Now)
                  </span>
                ) : (
                  <span className="text-xs font-mono font-bold text-emerald-300 bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-900/50">
                    {m.start} - {m.end}
                  </span>
                )}
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed mt-1">{m.description}</p>
              {m.isActive && (
                <p className="text-xs font-mono font-semibold text-emerald-300 mt-2">
                  समय: {m.start} से {m.end}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Ashubh Muhurats */}
      <div id="ashubh" className="rounded-3xl bg-[#140e0f] border border-red-900/30 p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400">
            <AlertOctagon className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">अशुभ समय (Inauspicious Windows)</h3>
            <p className="text-xs text-red-400/80">नया व्यापार, गृहप्रवेश, यात्रा व शुभ कार्य वर्जित</p>
          </div>
        </div>

        <div className="space-y-3 mt-6">
          {ashubhMuhurats.map((m, i) => (
            <div
              key={i}
              className={`p-4 rounded-2xl border transition-all ${
                m.isActive
                  ? 'bg-red-950/40 border-red-500/60 ring-1 ring-red-500/30 animate-pulse'
                  : 'bg-neutral-900/40 border-neutral-800/80 hover:border-red-900/50'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm sm:text-base text-white">{m.nameHi}</span>
                  <span className="text-xs text-neutral-400">({m.name})</span>
                </div>
                {m.isActive ? (
                  <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-300 text-[11px] font-bold border border-red-500/40">
                    <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
                    सावधान: अभी जारी है
                  </span>
                ) : (
                  <span className="text-xs font-mono font-bold text-red-300 bg-red-950/40 px-2.5 py-1 rounded-lg border border-red-900/50">
                    {m.start} - {m.end}
                  </span>
                )}
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed mt-1">{m.description}</p>
              {m.isActive && (
                <p className="text-xs font-mono font-semibold text-red-300 mt-2">
                  समय: {m.start} से {m.end}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
