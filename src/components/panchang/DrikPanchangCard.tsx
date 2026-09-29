'use client';

import { useState } from 'react';
import { MapPin, Share2, Moon, Sun, Sliders, ChevronDown } from 'lucide-react';
import VedicTimelineChart from './VedicTimelineChart';

interface CityOption {
  name: string;
  state: string;
  sunrise: string;
  sunset: string;
}

const CITIES: CityOption[] = [
  { name: 'नई दिल्ली', state: 'भारत', sunrise: '06:13 AM', sunset: '06:10 PM' },
  { name: 'वाराणसी (काशी)', state: 'उत्तर प्रदेश', sunrise: '05:54 AM', sunset: '05:52 PM' },
  { name: 'उज्जैन', state: 'मध्य प्रदेश', sunrise: '06:19 AM', sunset: '06:18 PM' },
  { name: 'हरिद्वार', state: 'उत्तराखंड', sunrise: '06:10 AM', sunset: '06:08 PM' },
  { name: 'मुम्बई', state: 'महाराष्ट्र', sunrise: '06:28 AM', sunset: '06:29 PM' },
  { name: 'जयपुर', state: 'राजस्थान', sunrise: '06:20 AM', sunset: '06:16 PM' },
  { name: 'कोलकाता', state: 'पश्चिम बंगाल', sunrise: '05:27 AM', sunset: '05:28 PM' },
  { name: 'बेंगलुरु', state: 'कर्नाटक', sunrise: '06:09 AM', sunset: '06:12 PM' },
];

export default function DrikPanchangCard() {
  const [selectedCity, setSelectedCity] = useState<CityOption>(CITIES[0]);
  const [showTimeline, setShowTimeline] = useState<boolean>(true);
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);

  return (
    <div className="w-full space-y-4 font-sans">
      {/* 1. Diya Header Ribbon (Exact Drik Panchang Title Header) */}
      <div className="flex items-center justify-between py-2 border-b border-amber-900/30">
        <div className="flex items-center gap-1.5 text-2xl" title="शुभ दीया">
          🪔
        </div>

        <div className="text-center">
          <span className="inline-block bg-[#8B1E1E] text-amber-200 text-xs sm:text-sm font-extrabold px-4 sm:px-6 py-1.5 rounded shadow-md border border-[#A72B2B]">
            पञ्चाङ्ग और हिन्दू कैलेण्डर दुनियाभर के लिए
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="text-2xl" title="शुभ दीया">
            🪔
          </div>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'आज का वैदिक पञ्चाङ्ग',
                  text: 'आज का पञ्चाङ्ग, तिथि, नक्षत्र, चौघड़िया व शुभ मुहूर्त देखें - RudrSadhana',
                  url: window.location.href,
                });
              }
            }}
            className="hidden sm:flex items-center gap-1 px-2.5 py-1 bg-emerald-700/80 hover:bg-emerald-600 text-white rounded text-xs font-bold transition-colors shadow"
          >
            <Share2 className="w-3 h-3" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* 2. Location & Tool Selector Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#1c1815] border border-amber-900/30 p-2.5 sm:p-3 rounded-2xl text-xs">
        {/* City Location Dropdown */}
        <div className="relative">
          <button
            onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
            className="flex items-center gap-2 bg-[#2a2420] border border-amber-800/40 text-amber-200 px-3 py-1.5 rounded-xl font-bold hover:border-amber-500 transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-orange-400" />
            <span>{selectedCity.name}, {selectedCity.state}</span>
            <ChevronDown className="w-3 h-3 text-neutral-400 ml-1" />
          </button>

          {cityDropdownOpen && (
            <div className="absolute top-full left-0 mt-1.5 w-56 bg-[#1f1a17] border border-amber-900/60 rounded-xl shadow-2xl py-1 z-30">
              <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-neutral-400 border-b border-neutral-800">
                प्रमुख नगर चुनें (Select City)
              </div>
              {CITIES.map((c) => (
                <button
                  key={c.name}
                  onClick={() => {
                    setSelectedCity(c);
                    setCityDropdownOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 text-xs transition-colors flex items-center justify-between ${
                    c.name === selectedCity.name
                      ? 'bg-amber-600/30 text-amber-300 font-bold'
                      : 'text-neutral-300 hover:bg-neutral-800'
                  }`}
                >
                  <span>{c.name}</span>
                  <span className="text-[10px] text-neutral-500">{c.state}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Action Toggles (Like Drik Panchang) */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <button
            onClick={() => setShowTimeline(!showTimeline)}
            className={`px-3 py-1.5 rounded-xl font-bold border transition-colors flex items-center gap-1.5 ${
              showTimeline
                ? 'bg-amber-600/20 text-amber-300 border-amber-500/50'
                : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
            }`}
          >
            📊 {showTimeline ? 'चार्ट हटायें' : 'चार्ट देखें'}
          </button>
          <span className="px-2.5 py-1.5 bg-neutral-900 border border-neutral-800 rounded-xl text-neutral-300 font-medium hidden sm:inline-block">
            🌑 पूर्णिमांत पद्धति
          </span>
          <span className="px-2.5 py-1.5 bg-neutral-900 border border-neutral-800 rounded-xl text-neutral-300 font-medium hidden md:inline-block">
            🕉️ देवनागरी अंक
          </span>
        </div>
      </div>

      {/* 3. The Iconic Olive Green / Sacred Saffron Panchang Header Box */}
      <div className="overflow-hidden rounded-2xl border border-[#526330]/60 bg-[#343D23] shadow-2xl text-amber-50">
        <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Left: Moon Phase & Vedic Calendar Coordinates */}
          <div className="md:col-span-8 flex items-center gap-4 sm:gap-6">
            {/* Realistic Moon Phase Graphic (Waning Gibbous for Tritiya Krishna) */}
            <div className="relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-neutral-900/80 border-2 border-amber-300/40 shadow-inner flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Dark side */}
                <circle cx="50" cy="50" r="46" fill="#181818" />
                {/* Illuminated Waning Moon */}
                <path
                  d="M 50 4 A 46 46 0 0 1 50 96 A 25 46 0 0 0 50 4"
                  fill="#FFF7D6"
                  filter="drop-shadow(0px 0px 4px rgba(255, 247, 214, 0.8))"
                />
              </svg>
            </div>

            {/* Coordinates Text */}
            <div className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-xl sm:text-2xl font-black text-amber-200">
                  03, आश्विन
                </span>
                <span className="text-xs sm:text-sm font-bold text-amber-100">
                  कृष्ण पक्ष, तृतीया
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-200 font-medium">
                2083 सिद्धार्थी (कालयुक्त), विक्रम संवत्
              </p>
              <p className="text-xs text-amber-200/90 font-medium">
                📍 {selectedCity.name}, {selectedCity.state}
              </p>
            </div>
          </div>

          {/* Right: Gregorian Date & Weekday */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end justify-center border-t md:border-t-0 md:border-l border-amber-200/20 pt-3 md:pt-0 md:pl-6">
            <span className="text-4xl sm:text-5xl font-black text-amber-200 font-serif leading-none">
              29
            </span>
            <span className="text-sm sm:text-base font-bold text-white mt-1">
              सितम्बर 2026
            </span>
            <span className="text-xs sm:text-sm font-semibold text-amber-300">
              मंगलवार (Tuesday)
            </span>
          </div>
        </div>

        {/* Sub-bar: Festivals & Special Parva of the day (Exact Drik Panchang feature) */}
        <div className="bg-[#28301B] px-4 sm:px-6 py-2 border-t border-[#46532B] flex flex-wrap items-center gap-2 text-xs sm:text-sm text-amber-200/90 font-medium">
          <span className="font-bold text-amber-300">विशेष पर्व व श्राद्ध:</span>
          <span>तृतीय चातुर्मास का 76वाँ दिन</span>
          <span>•</span>
          <span className="text-white font-semibold">तृतीया श्राद्ध</span>
          <span>•</span>
          <span className="text-white font-semibold">महा भरणी</span>
          <span>•</span>
          <span className="text-orange-300 font-semibold">विघ्नराज संकष्टी चतुर्थी</span>
        </div>
      </div>

      {/* 4. Visual Vedic Timeline Chart (Signature Feature) */}
      {showTimeline && (
        <VedicTimelineChart
          tithiName="तृतीया, कृष्ण"
          nextTithiName="चतुर्थी, कृष्ण"
          tithiEndTime="05:09 PM"
          nakshatraName="अश्विनी"
          nextNakshatraName="भरणी"
          nakshatraEndTime="09:03 AM"
          sunrise={selectedCity.sunrise}
          sunset={selectedCity.sunset}
          rahuStart="03:00 PM"
          rahuEnd="04:30 PM"
          abhijitStart="11:47 AM"
          abhijitEnd="12:35 PM"
        />
      )}
    </div>
  );
}
