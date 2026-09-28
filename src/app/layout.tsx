import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'RudrSadhana — वैदिक पंचांग, चौघड़िया, शिव स्तोत्र व डिजिटल साधना',
    template: '%s | RudrSadhana',
  },
  description:
    'दैनिक पंचांग, आज का चौघड़िया, ब्रह्म व अभिजित मुहूर्त, राहु काल, शिव तांडव स्तोत्र, महामृत्युंजय मंत्र, और 108 डिजिटल जप माला साधना। Devotionally powered by Rudrshivansh.',
  keywords: [
    'दैनिक पंचांग',
    'आज का चौघड़िया',
    'राहु काल आज',
    'शिव तांडव स्तोत्र',
    'महामृत्युंजय मंत्र',
    'रुद्राष्टकम्',
    'डिजिटल जप माला',
    'Vedic Panchang 2026',
    'Choghadiya Today',
    'Shiva Sadhana',
    'Rudrshivansh',
  ],
  authors: [{ name: 'Rudrshivansh' }],
  creator: 'Rudrshivansh',
  publisher: 'RudrSadhana',
  metadataBase: new URL('https://rudrsadhana.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'RudrSadhana — वैदिक पंचांग व साधना महासागर',
    description:
      'सटीक वैदिक पंचांग, दिन-रात का चौघड़िया, दुर्लभ स्तोत्र संग्रह और डिजिटल 108 जप माला।',
    url: 'https://rudrsadhana.vercel.app',
    siteName: 'RudrSadhana',
    locale: 'hi_IN',
    type: 'website',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0c',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0c] text-neutral-100 selection:bg-amber-500/30 selection:text-amber-200">
        <Navbar />
        <div className="flex-1 w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
