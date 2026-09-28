'use client';

import { useState } from 'react';
import { Share2, Copy, Check, X } from 'lucide-react';
import { getSankalpData, getJapaData } from '@/lib/storage';
import { cn } from '@/lib/utils';

export default function ShareCardModal({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const japaData = getJapaData();
  const sankalpData = getSankalpData();

  const sankalpText = sankalpData && sankalpData.isActive
    ? `Day ${sankalpData.completedDays.length} of ${sankalpData.type === '21-day' ? 21 : 40} ${sankalpData.label}`
    : sankalpData && !sankalpData.isActive
    ? `Completed ${sankalpData.label}`
    : '';

  const shareText = `🔱 ${sankalpText || `${japaData.totalRounds} Malas`} Completed | Chanted with RudrSadhana 🙏\n\nStreak: ${japaData.streak} days 🔥\nTotal Rounds: ${japaData.totalRounds}\n\n#Rudrshivansh #RudrSadhana #Shiva #Mahadev`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'RudrSadhana — My Japa Progress',
          text: shareText,
        });
      } catch {}
    } else {
      handleCopy();
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 transition-colors text-sm font-medium w-full",
          className
        )}
      >
        <Share2 className="w-4 h-4" /> Share Progress
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-sm bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-800">
              <h3 className="text-base font-semibold text-amber-400">Share Your Sadhana</h3>
              <button onClick={() => setIsOpen(false)} className="text-neutral-500 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Card Preview */}
            <div className="p-4">
              <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-amber-900/30 rounded-xl p-5">
                <div className="text-center">
                  <p className="text-3xl mb-2">🔱</p>
                  <h4 className="text-lg font-bold text-amber-400 mb-1">RudrSadhana</h4>
                  {sankalpText && <p className="text-sm text-orange-300 mb-2">{sankalpText}</p>}
                  <div className="flex justify-center gap-6 mt-3">
                    <div>
                      <p className="text-xl font-bold text-white">{japaData.totalRounds}</p>
                      <p className="text-xs text-neutral-500">Malas</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-white">{japaData.streak}🔥</p>
                      <p className="text-xs text-neutral-500">Streak</p>
                    </div>
                  </div>
                  <p className="text-[10px] text-neutral-600 mt-3">#Rudrshivansh</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-4 pt-0 flex gap-2">
              <button
                onClick={handleShare}
                className="flex-1 py-2.5 rounded-xl bg-amber-500/20 text-amber-400 text-sm font-medium hover:bg-amber-500/30 transition-colors flex items-center justify-center gap-2"
              >
                <Share2 className="w-4 h-4" /> Share
              </button>
              <button
                onClick={handleCopy}
                className="flex-1 py-2.5 rounded-xl bg-neutral-800 text-neutral-300 text-sm font-medium hover:bg-neutral-700 transition-colors flex items-center justify-center gap-2"
              >
                {copied ? <><Check className="w-4 h-4 text-green-400" /> Copied!</> : <><Copy className="w-4 h-4" /> Copy for WhatsApp</>}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
