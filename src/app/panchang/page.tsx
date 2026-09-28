'use client';

import { useState, useMemo } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Clock, Compass, ShieldCheck, AlertTriangle } from 'lucide-react';
import { getFullPanchang } from '@/lib/panchang-engine';
import PanchangHeroCard from '@/components/panchang/PanchangHeroCard';
import DetailedPanchangTable from '@/components/panchang/DetailedPanchangTable';
import ChoghadiyaTable from '@/components/panchang/ChoghadiyaTable';
import MuhuratGrid from '@/components/panchang/MuhuratGrid';

export default function PanchangPage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const panchang = useMemo(() => getFullPanchang(selectedDate), [selectedDate]);

  const handlePrevDay = () => {
    const prev = new Date(selectedDate);
    prev.setDate(prev.getDate() - 1);
    setSelectedDate(prev);
  };

  const handleNextDay = () => {
    const next = new Date(selectedDate);
    next.setDate(next.getDate() + 1);
    setSelectedDate(next);
  };

  const handleToday = () => {
    setSelectedDate(new Date());
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header & Date Picker Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-900/20 pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              वैदिक पञ्चाङ्ग दर्पण
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              दैनिक हिन्दू पंचांग व काल गणना
            </h1>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              तिथि, नक्षत्र, वार, योग, करण, सूर्योदय-सूर्यास्त, चौघड़िया एवं शुभ-अशुभ मुहूर्त
            </p>
          </div>

          {/* Date Navigator */}
          <div className="flex items-center gap-2 bg-neutral-900/80 border border-neutral-800 p-1.5 rounded-2xl">
            <button
              onClick={handlePrevDay}
              className="p-2 rounded-xl bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors"
              title="पिछला दिन (Previous Day)"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleToday}
              className="px-3 py-1.5 rounded-xl bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 text-xs font-bold transition-colors"
            >
              आज (Today)
            </button>
            <button
              onClick={handleNextDay}
              className="p-2 rounded-xl bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors"
              title="अगला दिन (Next Day)"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 1. Panchang Hero Card */}
        <PanchangHeroCard />

        {/* 2. Detailed 5 Limbs Table */}
        <DetailedPanchangTable panchang={panchang} />

        {/* 3. Choghadiya Section */}
        <ChoghadiyaTable
          dayChoghadiya={panchang.dayChoghadiya}
          nightChoghadiya={panchang.nightChoghadiya}
        />

        {/* 4. Shubh & Ashubh Muhurat Grid */}
        <MuhuratGrid
          shubhMuhurats={panchang.shubhMuhurats}
          ashubhMuhurats={panchang.ashubhMuhurats}
        />
      </div>
    </div>
  );
}
