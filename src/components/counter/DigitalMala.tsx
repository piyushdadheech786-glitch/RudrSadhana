'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { RotateCcw, Target, Volume2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { incrementRound, getJapaData } from '@/lib/storage';

const TARGETS = [
  { label: '1 Mala', count: 108 },
  { label: '3 Malas', count: 324 },
  { label: '11 Malas', count: 1188 },
];

export default function DigitalMala() {
  const [count, setCount] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [targetIdx, setTargetIdx] = useState(0);
  const [totalBeads, setTotalBeads] = useState(0);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const target = TARGETS[targetIdx];

  useEffect(() => {
    const data = getJapaData();
    setRounds(data.totalRounds);
  }, []);

  const playClick = useCallback(() => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.type = 'sine';
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.08);
    } catch {}
  }, []);

  const triggerHaptic = useCallback((pattern: number | number[]) => {
    try {
      if (navigator.vibrate) navigator.vibrate(pattern);
    } catch {}
  }, []);

  const handleTap = useCallback(() => {
    playClick();
    triggerHaptic(35);

    setCount((prev) => {
      const next = prev + 1;
      setTotalBeads((tb) => tb + 1);
      if (next >= 108) {
        // Mala complete
        triggerHaptic([100, 50, 100, 50, 200]);
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#d4af37', '#e07a1e', '#ff9933'],
        });
        const data = incrementRound(0);
        setRounds(data.totalRounds);
        return 0;
      }
      return next;
    });
  }, [playClick, triggerHaptic]);

  const handleReset = () => {
    setCount(0);
    setTotalBeads(0);
  };

  const progress = totalBeads / target.count;
  const malaProgress = count / 108;

  // SVG circle params
  const radius = 110;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - malaProgress * circumference;

  return (
    <div className="flex flex-col items-center gap-6 py-4">
      {/* Target Selector */}
      <div className="flex items-center gap-2">
        <Target className="w-4 h-4 text-amber-500" />
        <div className="flex gap-1">
          {TARGETS.map((t, i) => (
            <button
              key={t.label}
              onClick={() => { setTargetIdx(i); setTotalBeads(0); }}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                i === targetIdx
                  ? 'bg-amber-500/20 text-amber-400 ring-1 ring-amber-500/50'
                  : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Circular Mala Counter */}
      <button
        onClick={handleTap}
        className="relative flex items-center justify-center w-64 h-64 rounded-full active:scale-[0.97] transition-transform touch-manipulation select-none"
        aria-label={`Japa counter: ${count} of 108. Tap to increment.`}
      >
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 256 256">
          <circle
            cx="128" cy="128" r={radius}
            fill="none" stroke="#1a1a2e" strokeWidth="8"
          />
          <circle
            cx="128" cy="128" r={radius}
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-200"
          />
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4af37" />
              <stop offset="50%" stopColor="#e07a1e" />
              <stop offset="100%" stopColor="#ff9933" />
            </linearGradient>
          </defs>
        </svg>
        <div className="flex flex-col items-center z-10">
          <span className="text-6xl font-bold text-amber-400 tabular-nums">{count}</span>
          <span className="text-sm text-neutral-500 mt-1">of 108</span>
        </div>
      </button>

      {/* Stats Row */}
      <div className="flex gap-6 text-center">
        <div>
          <p className="text-2xl font-semibold text-amber-400 tabular-nums">{rounds}</p>
          <p className="text-xs text-neutral-500">Total Rounds</p>
        </div>
        <div className="w-px bg-neutral-800" />
        <div>
          <p className="text-2xl font-semibold text-orange-400 tabular-nums">{totalBeads}</p>
          <p className="text-xs text-neutral-500">/ {target.count} beads</p>
        </div>
      </div>

      {/* Target Progress Bar */}
      <div className="w-full max-w-xs">
        <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 transition-all duration-300"
            style={{ width: `${Math.min(progress * 100, 100)}%` }}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-4">
        <button
          onClick={handleReset}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-800/60 text-neutral-400 hover:text-white transition-colors text-sm"
        >
          <RotateCcw className="w-4 h-4" /> Reset
        </button>
        <button
          onClick={() => playClick()}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-800/60 text-neutral-400 hover:text-white transition-colors text-sm"
        >
          <Volume2 className="w-4 h-4" /> Test Sound
        </button>
      </div>
    </div>
  );
}
