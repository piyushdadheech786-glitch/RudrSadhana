'use client';

import { useState, useEffect } from 'react';
import { Flame, Check, Trophy, RotateCcw } from 'lucide-react';
import { getSankalpData, startSankalp, markSankalpDay, resetSankalp, type SankalpData } from '@/lib/storage';

export default function SankalpTracker() {
  const [sankalp, setSankalp] = useState<SankalpData | null>(null);
  const [justMarked, setJustMarked] = useState(false);

  useEffect(() => {
    setSankalp(getSankalpData());
  }, []);

  const handleStart = (type: '21-day' | '40-day') => {
    const data = startSankalp(type);
    setSankalp(data);
  };

  const handleMark = () => {
    const data = markSankalpDay();
    if (data) {
      setSankalp({ ...data });
      setJustMarked(true);
      setTimeout(() => setJustMarked(false), 2000);
    }
  };

  const handleReset = () => {
    resetSankalp();
    setSankalp(null);
  };

  const today = new Date().toISOString().split('T')[0];
  const isCompletedToday = sankalp?.completedDays.includes(today) ?? false;

  // No active sankalp — show selection
  if (!sankalp || !sankalp.isActive) {
    return (
      <div className="rounded-2xl bg-neutral-900/80 border border-neutral-800 p-4">
        <div className="flex items-center gap-2 mb-3">
          <Flame className="w-4 h-4 text-orange-500" />
          <h3 className="text-sm font-semibold text-orange-400">
            {sankalp && !sankalp.isActive ? '🏆 Sankalp Complete! Start New?' : 'Take a Sankalp'}
          </h3>
        </div>
        {sankalp && !sankalp.isActive && (
          <div className="mb-3 p-3 rounded-xl bg-amber-950/30 border border-amber-800/40">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400" />
              <p className="text-sm text-amber-300">You completed {sankalp.label}!</p>
            </div>
          </div>
        )}
        <div className="space-y-2">
          <button
            onClick={() => handleStart('21-day')}
            className="w-full p-3 rounded-xl bg-orange-950/30 border border-orange-800/40 text-left hover:bg-orange-950/50 transition-colors"
          >
            <p className="text-sm font-medium text-orange-300">21-Day Mahamrityunjaya Anushthan</p>
            <p className="text-xs text-neutral-500 mt-0.5">Daily Mahamrityunjaya Mantra Japa for 21 days</p>
          </button>
          <button
            onClick={() => handleStart('40-day')}
            className="w-full p-3 rounded-xl bg-amber-950/30 border border-amber-800/40 text-left hover:bg-amber-950/50 transition-colors"
          >
            <p className="text-sm font-medium text-amber-300">40-Day Shiva Sadhana</p>
            <p className="text-xs text-neutral-500 mt-0.5">Continuous 40-day Shiva devotional practice</p>
          </button>
        </div>
      </div>
    );
  }

  // Active sankalp
  const totalDays = sankalp.type === '21-day' ? 21 : 40;
  const completedCount = sankalp.completedDays.length;
  const progress = completedCount / totalDays;

  return (
    <div className="rounded-2xl bg-neutral-900/80 border border-neutral-800 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Flame className="w-4 h-4 text-orange-500" />
          <h3 className="text-sm font-semibold text-orange-400">Active Sankalp</h3>
        </div>
        <button onClick={handleReset} className="text-neutral-600 hover:text-red-400 transition-colors">
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      <p className="text-base font-medium text-neutral-200 mb-1">{sankalp.label}</p>

      {/* Progress */}
      <div className="flex items-center gap-3 mb-3">
        <div className="flex-1 h-2 bg-neutral-800 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-500"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <span className="text-xs text-neutral-400 tabular-nums whitespace-nowrap">
          {completedCount}/{totalDays}
        </span>
      </div>

      {/* Day Grid */}
      <div className="flex flex-wrap gap-1 mb-3">
        {Array.from({ length: totalDays }).map((_, i) => {
          const isCompleted = i < completedCount;
          const isCurrent = i === completedCount;
          return (
            <div
              key={i}
              className={`w-5 h-5 rounded text-[10px] flex items-center justify-center font-medium ${
                isCompleted
                  ? 'bg-amber-500/30 text-amber-400'
                  : isCurrent
                  ? 'bg-orange-500/20 text-orange-400 ring-1 ring-orange-500/50'
                  : 'bg-neutral-800/60 text-neutral-600'
              }`}
            >
              {isCompleted ? '✓' : i + 1}
            </div>
          );
        })}
      </div>

      {/* Mark Button */}
      <button
        onClick={handleMark}
        disabled={isCompletedToday}
        className={`w-full py-2.5 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2 ${
          isCompletedToday
            ? 'bg-green-950/30 text-green-400 border border-green-800/40 cursor-default'
            : justMarked
            ? 'bg-green-950/30 text-green-400 border border-green-800/40'
            : 'bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 border border-orange-800/40'
        }`}
      >
        <Check className="w-4 h-4" />
        {isCompletedToday ? "Today's Japa Completed ✓" : "Mark Today's Japa Completed"}
      </button>
    </div>
  );
}
