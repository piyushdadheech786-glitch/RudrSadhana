'use client';

import { useState } from 'react';
import { Heart, X, ExternalLink } from 'lucide-react';

const AMOUNTS = [
  { label: '₹51', value: 51 },
  { label: '₹101', value: 101 },
  { label: '₹251', value: 251 },
  { label: '₹501', value: 501 },
  { label: '₹1100', value: 1100 },
];

const UPI_ID = 'rudrshivansh@upi';

export default function SevaModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(101);

  const upiLink = `upi://pay?pa=${UPI_ID}&pn=RudrSadhana&am=${selected}&cu=INR&tn=Dharmik%20Seva%20-%20RudrSadhana`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiLink)}`;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition-colors text-sm font-medium border border-rose-900/30"
      >
        <Heart className="w-4 h-4" /> Dharmik Seva
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-sm bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-800">
              <div>
                <h3 className="text-base font-semibold text-rose-400">🙏 Dharmik Seva</h3>
                <p className="text-xs text-neutral-500 mt-0.5">Support the mission of spiritual upliftment</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-neutral-500 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Amount Selection */}
            <div className="p-4">
              <p className="text-xs text-neutral-400 mb-2">Select Seva Amount</p>
              <div className="flex flex-wrap gap-2">
                {AMOUNTS.map((a) => (
                  <button
                    key={a.value}
                    onClick={() => setSelected(a.value)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      selected === a.value
                        ? 'bg-rose-500/20 text-rose-400 ring-1 ring-rose-500/50'
                        : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
                    }`}
                  >
                    {a.label}
                  </button>
                ))}
              </div>
            </div>

            {/* QR Code */}
            <div className="px-4 pb-2 flex flex-col items-center">
              <div className="bg-white p-3 rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={qrUrl}
                  alt={`UPI QR Code for ₹${selected}`}
                  width={160}
                  height={160}
                  className="w-40 h-40"
                />
              </div>
              <p className="text-xs text-neutral-500 mt-2">Scan with any UPI app</p>
            </div>

            {/* UPI Button */}
            <div className="p-4 pt-2">
              <a
                href={upiLink}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-rose-500/20 text-rose-400 text-sm font-medium hover:bg-rose-500/30 transition-colors"
              >
                <ExternalLink className="w-4 h-4" /> Pay ₹{selected} via UPI
              </a>
              <p className="text-[10px] text-neutral-600 text-center mt-2">
                UPI ID: {UPI_ID}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
