'use client';

import { useState } from 'react';
import { Clock, Info, ShieldCheck, AlertTriangle } from 'lucide-react';

interface Props {
  tithiName: string;
  nextTithiName: string;
  tithiEndTime: string;
  nakshatraName: string;
  nextNakshatraName: string;
  nakshatraEndTime: string;
  sunrise: string;
  sunset: string;
  rahuStart: string;
  rahuEnd: string;
  abhijitStart: string;
  abhijitEnd: string;
}

export default function VedicTimelineChart({
  tithiName = 'तृतीया, कृष्ण',
  nextTithiName = 'चतुर्थी, कृष्ण',
  tithiEndTime = '05:09 PM',
  nakshatraName = 'अश्विनी',
  nextNakshatraName = 'भरणी',
  nakshatraEndTime = '09:03 AM',
  sunrise = '06:13 AM',
  sunset = '06:10 PM',
  rahuStart = '03:00 PM',
  rahuEnd = '04:30 PM',
  abhijitStart = '11:47 AM',
  abhijitEnd = '12:35 PM',
}: Props) {
  const [hoveredInfo, setHoveredInfo] = useState<string | null>(null);

  // Time markers from 6 AM to 7 PM (13 hours)
  const hours = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="rounded-2xl border border-amber-800/30 bg-[#141210] p-4 sm:p-6 shadow-xl space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800/80 pb-3">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-amber-500" />
          <h4 className="text-sm sm:text-base font-bold text-amber-200">
            दैनिक वैदिक समय-सारणी चार्ट (Vedic Day Timeline Chart)
          </h4>
        </div>
        <div className="flex items-center gap-3 text-xs text-neutral-400">
          <span>सूर्योदय: <strong className="text-amber-300">{sunrise}</strong></span>
          <span>•</span>
          <span>सूर्यास्त: <strong className="text-orange-400">{sunset}</strong></span>
        </div>
      </div>

      {/* Interactive Tooltip Info Bar */}
      <div className="h-6 flex items-center text-xs">
        {hoveredInfo ? (
          <span className="text-amber-300 font-medium animate-fadeIn">
            ℹ️ {hoveredInfo}
          </span>
        ) : (
          <span className="text-neutral-500">
            टाइमलाइन पट्टी पर माउस ले जाएं (Hover) समय विवरण देखने के लिए
          </span>
        )}
      </div>

      {/* The Visual Timeline Container */}
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[650px] space-y-3 font-sans">
          {/* Hour Scale Top */}
          <div className="grid grid-cols-13 text-[11px] font-mono text-neutral-400 border-b border-neutral-800 pb-1">
            {hours.map((h, i) => (
              <div key={i} className="text-center">
                {h}:00
              </div>
            ))}
          </div>

          {/* Row 1: Tithi Band */}
          <div className="flex items-center gap-2">
            <span className="w-16 text-xs font-bold text-amber-400/90 whitespace-nowrap">
              तिथि
            </span>
            <div className="flex-1 h-9 rounded-lg overflow-hidden flex text-xs font-semibold shadow-inner border border-neutral-800">
              {/* Tithi 1 */}
              <div
                onMouseEnter={() => setHoveredInfo(`${tithiName} — समाप्ति काल: ${tithiEndTime}`)}
                onMouseLeave={() => setHoveredInfo(null)}
                className="bg-gradient-to-r from-amber-900/60 to-amber-800/60 hover:brightness-125 transition-all text-amber-100 flex items-center justify-between px-3 border-r border-amber-500/30 cursor-pointer"
                style={{ width: '82%' }}
              >
                <span>{tithiName}</span>
                <span className="text-[10px] font-mono text-amber-300">{tithiEndTime} तक</span>
              </div>
              {/* Tithi 2 */}
              <div
                onMouseEnter={() => setHoveredInfo(`${nextTithiName} — प्रारम्भ काल: ${tithiEndTime}`)}
                onMouseLeave={() => setHoveredInfo(null)}
                className="bg-gradient-to-r from-stone-800/80 to-stone-900/80 hover:brightness-125 transition-all text-neutral-300 flex items-center px-3 cursor-pointer"
                style={{ width: '18%' }}
              >
                <span>{nextTithiName}</span>
              </div>
            </div>
          </div>

          {/* Row 2: Nakshatra Band */}
          <div className="flex items-center gap-2">
            <span className="w-16 text-xs font-bold text-amber-400/90 whitespace-nowrap">
              नक्षत्र
            </span>
            <div className="flex-1 h-9 rounded-lg overflow-hidden flex text-xs font-semibold shadow-inner border border-neutral-800">
              {/* Nakshatra 1 */}
              <div
                onMouseEnter={() => setHoveredInfo(`${nakshatraName} — समाप्ति: ${nakshatraEndTime}`)}
                onMouseLeave={() => setHoveredInfo(null)}
                className="bg-gradient-to-r from-orange-950/70 to-orange-900/60 hover:brightness-125 transition-all text-orange-200 flex items-center justify-between px-3 border-r border-orange-500/30 cursor-pointer"
                style={{ width: '25%' }}
              >
                <span>{nakshatraName}</span>
                <span className="text-[10px] font-mono text-orange-300">{nakshatraEndTime} तक</span>
              </div>
              {/* Nakshatra 2 */}
              <div
                onMouseEnter={() => setHoveredInfo(`${nextNakshatraName} — प्रारम्भ: ${nakshatraEndTime}`)}
                onMouseLeave={() => setHoveredInfo(null)}
                className="bg-gradient-to-r from-neutral-800/70 to-neutral-900/70 hover:brightness-125 transition-all text-neutral-200 flex items-center px-3 cursor-pointer"
                style={{ width: '75%' }}
              >
                <span>{nextNakshatraName}</span>
              </div>
            </div>
          </div>

          {/* Row 3: Shubh & Ashubh Muhurat Bands */}
          <div className="flex items-center gap-2">
            <span className="w-16 text-xs font-bold text-neutral-300 whitespace-nowrap">
              मुहूर्त काल
            </span>
            <div className="flex-1 h-8 rounded-lg bg-neutral-900/60 relative overflow-hidden border border-neutral-800 flex items-center">
              {/* Abhijit Muhurta (Green Slot around 11:45 to 12:35) */}
              <div
                onMouseEnter={() => setHoveredInfo(`अभिजित मुहूर्त (परम शुभ): ${abhijitStart} से ${abhijitEnd}`)}
                onMouseLeave={() => setHoveredInfo(null)}
                className="absolute top-0 bottom-0 bg-emerald-600/50 hover:bg-emerald-500/70 border-x border-emerald-400/60 flex items-center justify-center text-[10px] font-bold text-emerald-100 cursor-pointer transition-colors"
                style={{ left: '44%', width: '7%' }}
                title="अभिजित मुहूर्त"
              >
                अभिजित
              </div>

              {/* Rahu Kaal (Red Slot around 3:00 to 4:30 PM) */}
              <div
                onMouseEnter={() => setHoveredInfo(`राहु काल (अशुभ): ${rahuStart} से ${rahuEnd}`)}
                onMouseLeave={() => setHoveredInfo(null)}
                className="absolute top-0 bottom-0 bg-red-600/50 hover:bg-red-500/70 border-x border-red-400/60 flex items-center justify-center text-[10px] font-bold text-red-100 cursor-pointer transition-colors"
                style={{ left: '68%', width: '12%' }}
                title="राहु काल"
              >
                राहु काल
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legend & Note */}
      <div className="flex flex-wrap items-center justify-between text-[11px] text-neutral-400 pt-2 border-t border-neutral-800/80">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded bg-emerald-500/60 border border-emerald-400" />
            अभिजित (शुभ)
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded bg-red-500/60 border border-red-400" />
            राहु काल (वर्जित)
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded bg-amber-800/80 border border-amber-600" />
            वर्तमान तिथि
          </span>
        </div>
        <span className="text-[10px] text-neutral-500">
          द्रिक गणित पद्धति पर आधारित दैनिक गति गणना
        </span>
      </div>
    </div>
  );
}
