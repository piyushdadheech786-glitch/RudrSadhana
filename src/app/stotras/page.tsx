'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Search, Sparkles, ArrowRight } from 'lucide-react';
import { STOTRAS_DATA } from '@/lib/stotras-data';

export default function StotrasPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const allTags = ['All', 'Shiva Stotra', 'Mantra', 'Healing', 'Adi Shankara', 'Chalisa'];

  const filteredStotras = STOTRAS_DATA.filter((stotra) => {
    const matchesSearch =
      stotra.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stotra.titleHi.includes(searchTerm) ||
      stotra.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag =
      selectedTag === 'All' || stotra.tags.some((t) => t.toLowerCase() === selectedTag.toLowerCase());
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0c] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            स्तोत्र व मन्त्र सागर
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            श्री शिव स्तोत्र एवं मन्त्र संग्रह
          </h1>
          <p className="text-sm sm:text-base text-neutral-400">
            शुद्ध संस्कृत पाठ, देवनागरी लिपि, उच्चारण, सार्थ भावार्थ एवं नित्य जप विधि
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-neutral-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="स्तोत्र या मन्त्र खोजें (उदा. ताण्डव, मृत्युंजय, चालीसा)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500/50"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedTag === tag
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                    : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Stotra Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {filteredStotras.map((stotra) => (
            <Link
              key={stotra.id}
              href={`/stotras/${stotra.slug}`}
              className="group flex flex-col justify-between p-6 rounded-3xl bg-[#0f0f15] border border-amber-900/20 hover:border-amber-500/40 hover:bg-[#12121c] transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-semibold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                    {stotra.tags[0]}
                  </span>
                  <span className="text-xs text-neutral-500 font-mono">
                    {stotra.verses.length} श्लोक
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {stotra.titleHi}
                </h3>
                <p className="text-xs text-amber-500/80 font-medium mb-1">
                  {stotra.title}
                </p>
                <p className="text-[11px] text-neutral-500 mb-3">
                  रचनाकार: {stotra.author}
                </p>

                <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3 mb-4">
                  {stotra.summary}
                </p>

                <div className="space-y-1.5 mb-4">
                  <p className="text-[11px] font-semibold text-neutral-300">आध्यात्मिक लाभ:</p>
                  <ul className="text-[11px] text-neutral-500 list-disc list-inside space-y-0.5">
                    {stotra.benefits.slice(0, 2).map((b, i) => (
                      <li key={i} className="line-clamp-1">{b}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
                <span>सम्पूर्ण सार्थ पाठ पढ़ें</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
