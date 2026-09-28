'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Smartphone, Volume2, Shield } from 'lucide-react';
import DigitalMala from '@/components/counter/DigitalMala';
import MuhuratWidget from '@/components/panchang/MuhuratWidget';
import SankalpTracker from '@/components/streak/SankalpTracker';
import AmbientPlayer from '@/components/audio/AmbientPlayer';
import ShareCardModal from '@/components/share/ShareCardModal';
import SevaModal from '@/components/monetization/SevaModal';
import { getJapaData } from '@/lib/storage';

export default function SadhanaAppPage() {
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
    <div className="min-h-screen bg-[#07070a] py-6 pb-32">
      {/* App Container: On desktop centered with nice border, on mobile 100% fluid */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 space-y-6">
        {/* Navigation back to main portal */}
        <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-400 hover:text-amber-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>मुख्य पोर्टल (Main Portal)</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-amber-500 font-medium">रुद्रसाधना ऐप 🔱</span>
          </div>
        </div>

        {/* Sadhana Header Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-amber-950/30 via-neutral-900 to-orange-950/30 border border-amber-900/40 p-5 sm:p-6 shadow-xl flex items-center justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              🔱 नित्य जप व शिव साधना
            </h1>
            <p className="text-xs text-neutral-400 mt-1">{greeting} • शुद्ध एकाग्रता व जप कक्ष</p>
          </div>
          {streak > 0 && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>{streak} दिन का नियम 🔥</span>
            </div>
          )}
        </div>

        {/* Main 108 Japa Mala Counter Card */}
        <div className="rounded-3xl bg-[#0e0e14] border border-amber-900/30 p-6 sm:p-8 shadow-2xl">
          <div className="text-center mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400/90 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              108 मनकों की स्पर्श जप माला
            </span>
            <p className="text-xs text-neutral-500 mt-2">
              स्क्रीन पर कहीं भी स्पर्श करें • कम्पन (Haptic) व मन्त्र ध्वनि के साथ जप करें
            </p>
          </div>
          <DigitalMala />
        </div>

        {/* Sankalp Tracker (21 / 40 Days) */}
        <div>
          <SankalpTracker />
        </div>

        {/* Today's Muhurat Widget */}
        <div>
          <MuhuratWidget />
        </div>

        {/* Social Share & Dharmik Seva */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <ShareCardModal />
          </div>
          <div className="flex-1">
            <SevaModal />
          </div>
        </div>

        {/* Instructions / Mobile tip */}
        <div className="p-4 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 text-center space-y-1">
          <p className="text-xs text-neutral-400">
            💡 <strong>सुझाव:</strong> इस पृष्ठ को अपने फोन में <em>&quot;Add to Home Screen&quot;</em> करके बिल्कुल एक मूल ऐप की तरह चलाएं।
          </p>
          <p className="text-[11px] text-neutral-600">
            Powered by Rudrshivansh Devotional Audio
          </p>
        </div>
      </div>

      {/* Global Ambient Audio Player (Sticky bottom) */}
      <AmbientPlayer />
    </div>
  );
}
