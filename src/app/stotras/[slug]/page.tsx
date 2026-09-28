import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Clock, Sparkles, Share2, Copy } from 'lucide-react';
import { STOTRAS_DATA } from '@/lib/stotras-data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return STOTRAS_DATA.map((stotra) => ({
    slug: stotra.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const stotra = STOTRAS_DATA.find((s) => s.slug === slug);
  if (!stotra) return {};

  return {
    title: `${stotra.titleHi} (${stotra.title}) — सार्थ व भावार्थ`,
    description: `${stotra.summary} शुद्ध संस्कृत पाठ, देवनागरी श्लोक, उच्चारण, और हिन्दी अर्थ।`,
    keywords: [stotra.title, stotra.titleHi, ...stotra.tags, 'Shiva Stotra Lyrics Hindi'],
  };
}

export default async function StotraDetailPage({ params }: Props) {
  const { slug } = await params;
  const stotra = STOTRAS_DATA.find((s) => s.slug === slug);

  if (!stotra) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0a0a0c] py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/stotras"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-400 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>स्तोत्र संग्रह पर वापस जाएं</span>
          </Link>
        </div>

        {/* Header Hero */}
        <div className="rounded-3xl bg-gradient-to-br from-[#121218] via-[#161622] to-[#0d0d12] border border-amber-900/30 p-6 sm:p-10 shadow-2xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-semibold">
              {stotra.tags[0]}
            </span>
            <span className="text-xs text-neutral-400">
              रचनाकार: <strong className="text-white">{stotra.author}</strong>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {stotra.titleHi}
          </h1>
          <p className="text-sm sm:text-base font-medium text-amber-400/90">
            {stotra.title}
          </p>

          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-2 border-t border-neutral-800">
            {stotra.summary}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-800/80">
            <div className="bg-neutral-900/60 p-3 rounded-2xl border border-neutral-800">
              <p className="text-[11px] font-semibold text-amber-400 mb-1">सर्वश्रेष्ठ जप काल:</p>
              <p className="text-xs text-neutral-300">{stotra.bestTimeToChant}</p>
            </div>
            <div className="bg-neutral-900/60 p-3 rounded-2xl border border-neutral-800">
              <p className="text-[11px] font-semibold text-amber-400 mb-1">आध्यात्मिक फल:</p>
              <p className="text-xs text-neutral-300">{stotra.benefits[0]}</p>
            </div>
          </div>
        </div>

        {/* Verses Container */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-400" />
              <span>सार्थ पाठ (श्लोक व भावार्थ)</span>
            </h2>
            <span className="text-xs text-neutral-400">कुल {stotra.verses.length} श्लोक</span>
          </div>

          {stotra.verses.map((v) => (
            <div
              key={v.verseNumber}
              className="rounded-3xl bg-[#0f0f15] border border-neutral-800/90 p-6 sm:p-8 space-y-4 shadow-xl"
            >
              {/* Verse Number Badge */}
              <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3">
                <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  श्लोक {v.verseNumber}
                </span>
                <span className="text-[11px] text-neutral-500 font-mono">
                  Verse {v.verseNumber}
                </span>
              </div>

              {/* Sanskrit Text */}
              <div className="py-2">
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-amber-200 leading-loose whitespace-pre-line font-serif">
                  {v.sanskrit}
                </p>
              </div>

              {/* English Transliteration */}
              <div className="bg-neutral-950/60 p-4 rounded-2xl border border-neutral-800/60">
                <p className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 mb-1">उच्चारण (Transliteration):</p>
                <p className="text-xs sm:text-sm text-neutral-300 font-mono leading-relaxed whitespace-pre-line">
                  {v.transliteration}
                </p>
              </div>

              {/* Hindi Meaning */}
              <div className="bg-amber-950/20 p-4 rounded-2xl border border-amber-900/30">
                <p className="text-[11px] uppercase tracking-wider font-semibold text-amber-400 mb-1">हिन्दी भावार्थ:</p>
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-sans">
                  {v.hindi}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to Sadhana App */}
        <div className="rounded-3xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-transparent border border-amber-500/30 p-6 sm:p-8 text-center space-y-4">
          <h3 className="text-xl font-bold text-white">
            इस मन्त्र का 108 बार डिजिटल जप करना चाहते हैं?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto">
            हमारी समर्पित साधना ऐप पर स्पर्श कम्पन्न (Haptic Feedback) और मन्त्र ऑडियो के साथ 108 जप की माला पूर्ण करें।
          </p>
          <div>
            <Link
              href="/sadhana"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-extrabold text-sm shadow-lg hover:brightness-110 transition-all"
            >
              <span>साधना ऐप खोलें</span>
              <Sparkles className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
