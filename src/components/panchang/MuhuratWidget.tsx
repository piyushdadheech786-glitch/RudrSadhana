'use client';

import { useState, useEffect } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';
import { getAllMuhurat, type MuhuratWindow } from '@/lib/muhurat';

export default function MuhuratWidget() {
  const [muhurat, setMuhurat] = useState<MuhuratWindow[]>([]);

  useEffect(() => {
    setMuhurat(getAllMuhurat());
    const interval = setInterval(() => setMuhurat(getAllMuhurat()), 60000);
    return () => clearInterval(interval);
  }, []);

  if (muhurat.length === 0) return null;

  return (
    <div className="rounded-2xl bg-neutral-900/80 border border-neutral-800 p-4">
      <div className="flex items-center gap-2 mb-3">
        <Clock className="w-4 h-4 text-amber-500" />
        <h3 className="text-sm font-semibold text-amber-400">Today&apos;s Muhurat</h3>
      </div>
      <div className="space-y-2">
        {muhurat.map((m) => (
          <div
            key={m.name}
            className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
              m.name === 'Rahu Kaal'
                ? 'bg-red-950/30 border border-red-900/40'
                : m.isActive
                ? 'bg-amber-950/30 border border-amber-800/40'
                : 'bg-neutral-800/40'
            }`}
          >
            <div className="flex-1">
              <div className="flex items-center gap-2">
                {m.name === 'Rahu Kaal' && (
                  <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                )}
                <span className="text-sm font-medium text-neutral-200">{m.name}</span>
                <span className="text-xs text-neutral-500">{m.nameHi}</span>
              </div>
              <p className="text-xs text-neutral-500 mt-0.5">{m.start} — {m.end}</p>
            </div>
            <div>
              {m.isActive ? (
                <span className="flex items-center gap-1.5 text-xs font-medium text-green-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Active
                </span>
              ) : (
                <span className="text-xs text-neutral-600">Upcoming</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
