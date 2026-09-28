'use client';

import { PanchangDetails } from '@/lib/panchang-engine';
import { Calendar, Compass, Sun, Moon } from 'lucide-react';

interface Props {
  panchang: PanchangDetails;
}

export default function DetailedPanchangTable({ panchang }: Props) {
  return (
    <div className="rounded-3xl bg-[#0f0f15] border border-amber-900/20 p-6 sm:p-8 shadow-xl">
      <div className="flex items-center gap-2 mb-6">
        <Compass className="w-5 h-5 text-amber-400" />
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          विस्तृत पंचांग पटल (Comprehensive Vedic Elements)
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Panchang 5 Limbs Table */}
        <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/60">
          <div className="bg-neutral-900/80 px-4 py-3 border-b border-neutral-800 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-amber-400" />
            <h4 className="text-sm font-bold text-amber-300">पञ्चांग के पाँच अंग</h4>
          </div>
          <table className="w-full text-xs sm:text-sm">
            <tbody className="divide-y divide-neutral-800/80">
              <tr className="hover:bg-neutral-900/40">
                <td className="px-4 py-3 text-neutral-400 font-medium">तिथि (Tithi)</td>
                <td className="px-4 py-3 text-white font-semibold">
                  {panchang.tithi.nameHi} ({panchang.tithi.name}) — {panchang.tithi.pakshaHi} पक्ष
                  <span className="block text-xs text-neutral-400 font-mono mt-0.5">समाप्ति: {panchang.tithi.endTime}</span>
                </td>
              </tr>
              <tr className="hover:bg-neutral-900/40">
                <td className="px-4 py-3 text-neutral-400 font-medium">वार (Day)</td>
                <td className="px-4 py-3 text-white font-semibold">
                  {panchang.dayOfWeekHi} ({panchang.dayOfWeek})
                </td>
              </tr>
              <tr className="hover:bg-neutral-900/40">
                <td className="px-4 py-3 text-neutral-400 font-medium">नक्षत्र (Nakshatra)</td>
                <td className="px-4 py-3 text-white font-semibold">
                  {panchang.nakshatra.nameHi} ({panchang.nakshatra.name})
                  <span className="block text-xs text-neutral-400 font-mono mt-0.5">देवता: {panchang.nakshatra.deity}</span>
                </td>
              </tr>
              <tr className="hover:bg-neutral-900/40">
                <td className="px-4 py-3 text-neutral-400 font-medium">योग (Yoga)</td>
                <td className="px-4 py-3 text-white font-semibold">
                  {panchang.yoga.nameHi} ({panchang.yoga.name}) — {panchang.yoga.nature}
                  <span className="block text-xs text-neutral-400 font-mono mt-0.5">तक: {panchang.yoga.endTime}</span>
                </td>
              </tr>
              <tr className="hover:bg-neutral-900/40">
                <td className="px-4 py-3 text-neutral-400 font-medium">करण (Karana)</td>
                <td className="px-4 py-3 text-white font-semibold">
                  {panchang.karana.nameHi} ({panchang.karana.name}) — {panchang.karana.type}
                  <span className="block text-xs text-neutral-400 font-mono mt-0.5">तक: {panchang.karana.endTime}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Astronomical & Calendric Coordinates */}
        <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/60">
          <div className="bg-neutral-900/80 px-4 py-3 border-b border-neutral-800 flex items-center gap-2">
            <Sun className="w-4 h-4 text-orange-400" />
            <h4 className="text-sm font-bold text-orange-300">खगोलीय व संवत्सर विवरण</h4>
          </div>
          <table className="w-full text-xs sm:text-sm">
            <tbody className="divide-y divide-neutral-800/80">
              <tr className="hover:bg-neutral-900/40">
                <td className="px-4 py-3 text-neutral-400 font-medium">विक्रम संवत्</td>
                <td className="px-4 py-3 text-white font-semibold">
                  {panchang.samvat.vikram} ({panchang.samvat.vikramName})
                </td>
              </tr>
              <tr className="hover:bg-neutral-900/40">
                <td className="px-4 py-3 text-neutral-400 font-medium">शक संवत्</td>
                <td className="px-4 py-3 text-white font-semibold">
                  {panchang.samvat.shaka}
                </td>
              </tr>
              <tr className="hover:bg-neutral-900/40">
                <td className="px-4 py-3 text-neutral-400 font-medium">अयन व ऋतु</td>
                <td className="px-4 py-3 text-white font-semibold">
                  {panchang.samvat.ayanaHi} ({panchang.samvat.ayana}) • {panchang.samvat.rituHi} ऋतु
                </td>
              </tr>
              <tr className="hover:bg-neutral-900/40">
                <td className="px-4 py-3 text-neutral-400 font-medium">मास (Month)</td>
                <td className="px-4 py-3 text-white font-semibold">
                  {panchang.samvat.monthHi} ({panchang.samvat.month})
                </td>
              </tr>
              <tr className="hover:bg-neutral-900/40">
                <td className="px-4 py-3 text-neutral-400 font-medium">सूर्य व चन्द्र राशि</td>
                <td className="px-4 py-3 text-white font-semibold">
                  सूर्य: {panchang.rashis.suryaRashiHi} • चन्द्र: {panchang.rashis.chandraRashiHi}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
