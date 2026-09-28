'use client';

import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import DigitalMala from '@/components/counter/DigitalMala';
import MuhuratWidget from '@/components/panchang/MuhuratWidget';
import SankalpTracker from '@/components/streak/SankalpTracker';
import AmbientPlayer from '@/components/audio/AmbientPlayer';
import ShareCardModal from '@/components/share/ShareCardModal';
import SevaModal from '@/components/monetization/SevaModal';
import { getJapaData } from '@/lib/storage';

export default function Home() {
  const [streak, setStreak] = useState(0);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const data = getJapaData();
    setStreak(data.streak);

    const hour = new Date().getHours();
    if (hour < 5) setGreeting('ॐ शुभ रात्रि');
    else if (hour < 12) setGreeting('ॐ शुभ प्रभात');
    else if (hour < 17) setGreeting('ॐ शुभ दोपहर');
    else if (hour < 21) setGreeting('ॐ शुभ संध्या');
    else setGreeting('ॐ शुभ रात्रि');
  }, []);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0a0a0c]/90 backdrop-blur-lg border-b border-neutral-800/50">
        <div className="px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              🔱 RudrSadhana
            </h1>
            <p className="text-xs text-neutral-500">{greeting}</p>
          </div>
          <div className="flex items-center gap-2">
            {streak > 0 && (
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-800/30">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-xs font-medium text-orange-400">{streak}🔥</span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-6 space-y-6">
        {/* Section: Digital Mala Counter */}
        <section>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-amber-500/70 uppercase tracking-wider">जप माला</span>
            <div className="flex-1 h-px bg-neutral-800" />
          </div>
          <div className="rounded-2xl bg-neutral-900/80 border border-neutral-800 p-4">
            <DigitalMala />
          </div>
        </section>

        {/* Section: Muhurat */}
        <section>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-amber-500/70 uppercase tracking-wider">मुहूर्त</span>
            <div className="flex-1 h-px bg-neutral-800" />
          </div>
          <MuhuratWidget />
        </section>

        {/* Section: Sankalp Tracker */}
        <section>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-amber-500/70 uppercase tracking-wider">संकल्प</span>
            <div className="flex-1 h-px bg-neutral-800" />
          </div>
          <SankalpTracker />
        </section>

        {/* Section: Share & Seva */}
        <section>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-amber-500/70 uppercase tracking-wider">सेवा</span>
            <div className="flex-1 h-px bg-neutral-800" />
          </div>
          <div className="flex gap-3">
            <ShareCardModal />
            <SevaModal />
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-4 border-t border-neutral-800/50">
          <p className="text-xs text-neutral-600">
            ॐ नमः शिवाय 🙏
          </p>
          <p className="text-[10px] text-neutral-700 mt-1">
            Made with devotion by{' '}
            <span className="text-amber-600">Rudrshivansh</span>
          </p>
        </footer>
      </main>

      {/* Ambient Audio Player (fixed bottom) */}
      <AmbientPlayer />
    </div>
  );
}
