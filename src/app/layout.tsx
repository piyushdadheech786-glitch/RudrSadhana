import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RudrSadhana | Digital Japa & Shiva Sadhana",
  description:
    "Your sacred digital companion for daily Japa, Shiva worship, Muhurat tracking, and spiritual progress. By Rudrshivansh.",
  keywords: [
    "Japa Counter",
    "Shiva Sadhana",
    "Om Namah Shivaya",
    "Mahamrityunjaya",
    "Digital Mala",
    "Hindu Devotional",
    "Rudrshivansh",
  ],
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "RudrSadhana \u2014 Sacred Digital Japa",
    description: "Track your daily Japa, maintain Sankalp streaks, and worship with devotion.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0a0a0c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="hi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0c]">
        {/* Mobile-first container */}
        <div className="max-w-md mx-auto min-h-screen w-full border-x border-neutral-800/50 shadow-2xl relative pb-28 text-neutral-100 font-sans">
          {children}
        </div>
      </body>
    </html>
  );
}
