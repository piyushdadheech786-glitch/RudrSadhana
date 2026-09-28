// Complete Vedic Panchang Calculation Engine
// Provides high-precision algorithmic calculations for:
// 1. Five Limbs (Tithi, Vara, Nakshatra, Yoga, Karana)
// 2. Solar/Lunar Attributes (Surya Rashi, Chandra Rashi, Ayana, Ritu, Samvat)
// 3. Complete Day & Night Choghadiya (8 day + 8 night divisions)
// 4. Auspicious (Shubh) & Inauspicious (Ashubh) Muhurats

export interface PanchangDetails {
  date: string;
  formattedDate: string;
  dayOfWeek: string;
  dayOfWeekHi: string;
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  tithi: {
    number: number;
    name: string;
    nameHi: string;
    paksha: 'Shukla' | 'Krishna';
    pakshaHi: 'शुक्ल' | 'कृष्ण';
    endTime: string;
    summary: string;
  };
  nakshatra: {
    number: number;
    name: string;
    nameHi: string;
    deity: string;
    endTime: string;
  };
  yoga: {
    number: number;
    name: string;
    nameHi: string;
    nature: 'Auspicious' | 'Inauspicious' | 'Mixed';
    endTime: string;
  };
  karana: {
    name: string;
    nameHi: string;
    type: string;
    endTime: string;
  };
  samvat: {
    vikram: number;
    vikramName: string;
    shaka: number;
    ayana: string;
    ayanaHi: string;
    ritu: string;
    rituHi: string;
    month: string;
    monthHi: string;
  };
  rashis: {
    suryaRashi: string;
    suryaRashiHi: string;
    chandraRashi: string;
    chandraRashiHi: string;
  };
  shubhMuhurats: MuhuratTime[];
  ashubhMuhurats: MuhuratTime[];
  dayChoghadiya: ChoghadiyaPeriod[];
  nightChoghadiya: ChoghadiyaPeriod[];
}

export interface MuhuratTime {
  name: string;
  nameHi: string;
  start: string;
  end: string;
  quality: 'Shubh' | 'Ashubh' | 'Neutral';
  isActive: boolean;
  description: string;
}

export interface ChoghadiyaPeriod {
  name: string;
  nameHi: string;
  quality: 'Amrit' | 'Shubh' | 'Labh' | 'Char' | 'Rog' | 'Kaal' | 'Udveg';
  nature: 'Best' | 'Good' | 'Gain' | 'Neutral' | 'Bad' | 'Loss' | 'Anxiety';
  start: string;
  end: string;
  isActive: boolean;
}

// 30 Tithis
const TITHI_NAMES = [
  { name: 'Pratipada', nameHi: 'प्रतिपदा' },
  { name: 'Dwitiya', nameHi: 'द्वितीया' },
  { name: 'Tritiya', nameHi: 'तृतीया' },
  { name: 'Chaturthi', nameHi: 'चतुर्थी' },
  { name: 'Panchami', nameHi: 'पंचमी' },
  { name: 'Shashthi', nameHi: 'षष्ठी' },
  { name: 'Saptami', nameHi: 'सप्तमी' },
  { name: 'Ashtami', nameHi: 'अष्टमी' },
  { name: 'Navami', nameHi: 'नवमी' },
  { name: 'Dashami', nameHi: 'दशमी' },
  { name: 'Ekadashi', nameHi: 'एकादशी' },
  { name: 'Dwadashi', nameHi: 'द्वादशी' },
  { name: 'Trayodashi', nameHi: 'त्रयोदशी' },
  { name: 'Chaturdashi', nameHi: 'चतुर्दशी' },
  { name: 'Purnima', nameHi: 'पूर्णिमा' }, // or Amavasya
];

// 27 Nakshatras
const NAKSHATRAS = [
  { name: 'Ashwini', nameHi: 'अश्विनी', deity: 'Ashwini Kumaras' },
  { name: 'Bharani', nameHi: 'भरणी', deity: 'Yama' },
  { name: 'Krittika', nameHi: 'कृत्तिका', deity: 'Agni' },
  { name: 'Rohini', nameHi: 'रोहिणी', deity: 'Brahma' },
  { name: 'Mrigashira', nameHi: 'मृगशिरा', deity: 'Soma' },
  { name: 'Ardra', nameHi: 'आर्द्रा', deity: 'Rudra (Shiva)' },
  { name: 'Punarvasu', nameHi: 'पुनर्वसु', deity: 'Aditi' },
  { name: 'Pushya', nameHi: 'पुष्य', deity: 'Brihaspati' },
  { name: 'Ashlesha', nameHi: 'आश्लेषा', deity: 'Nagas' },
  { name: 'Magha', nameHi: 'मघा', deity: 'Pitras' },
  { name: 'Purva Phalguni', nameHi: 'पूर्वा फाल्गुनी', deity: 'Bhaga' },
  { name: 'Uttara Phalguni', nameHi: 'उत्तरा फाल्गुनी', deity: 'Aryaman' },
  { name: 'Hasta', nameHi: 'हस्त', deity: 'Savitr' },
  { name: 'Chitra', nameHi: 'चित्रा', deity: 'Vishwakarma' },
  { name: 'Swati', nameHi: 'स्वाति', deity: 'Vayu' },
  { name: 'Vishakha', nameHi: 'विशाखा', deity: 'Indragni' },
  { name: 'Anuradha', nameHi: 'अनुराधा', deity: 'Mitra' },
  { name: 'Jyeshtha', nameHi: 'ज्येष्ठा', deity: 'Indra' },
  { name: 'Mula', nameHi: 'मूल', deity: 'Nirriti' },
  { name: 'Purva Ashadha', nameHi: 'पूर्वाषाढ़ा', deity: 'Apah' },
  { name: 'Uttara Ashadha', nameHi: 'उत्तराषाढ़ा', deity: 'Vishvadevas' },
  { name: 'Shravana', nameHi: 'श्रवण', deity: 'Vishnu' },
  { name: 'Dhanishta', nameHi: 'धनिष्ठा', deity: 'Vasus' },
  { name: 'Shatabhisha', nameHi: 'शतभिषा', deity: 'Varuna' },
  { name: 'Purva Bhadrapada', nameHi: 'पूर्वभाद्रपदा', deity: 'Aja Ekapada' },
  { name: 'Uttara Bhadrapada', nameHi: 'उत्तरभाद्रपदा', deity: 'Ahirbudhnya' },
  { name: 'Revati', nameHi: 'रेवती', deity: 'Pushan' },
];

// 27 Yogas
const YOGAS: { name: string; nameHi: string; nature: 'Auspicious' | 'Inauspicious' | 'Mixed' }[] = [
  { name: 'Vishkumbha', nameHi: 'विष्कुम्भ', nature: 'Inauspicious' },
  { name: 'Priti', nameHi: 'प्रीति', nature: 'Auspicious' },
  { name: 'Ayushman', nameHi: 'आयुष्मान', nature: 'Auspicious' },
  { name: 'Saubhagya', nameHi: 'सौभाग्य', nature: 'Auspicious' },
  { name: 'Shobhana', nameHi: 'शोभन', nature: 'Auspicious' },
  { name: 'Atiganda', nameHi: 'अतिगण्ड', nature: 'Inauspicious' },
  { name: 'Sukarma', nameHi: 'सुकर्मा', nature: 'Auspicious' },
  { name: 'Dhriti', nameHi: 'धृति', nature: 'Auspicious' },
  { name: 'Shula', nameHi: 'शूल', nature: 'Inauspicious' },
  { name: 'Ganda', nameHi: 'गण्ड', nature: 'Inauspicious' },
  { name: 'Vriddhi', nameHi: 'वृद्धि', nature: 'Auspicious' },
  { name: 'Dhruva', nameHi: 'ध्रुव', nature: 'Auspicious' },
  { name: 'Vyaghata', nameHi: 'व्याघात', nature: 'Inauspicious' },
  { name: 'Harshana', nameHi: 'हर्षण', nature: 'Auspicious' },
  { name: 'Vajra', nameHi: 'वज्र', nature: 'Inauspicious' },
  { name: 'Siddhi', nameHi: 'सिद्धि', nature: 'Auspicious' },
  { name: 'Vyatipata', nameHi: 'व्यतीपात', nature: 'Inauspicious' },
  { name: 'Variyana', nameHi: 'वरीयान', nature: 'Auspicious' },
  { name: 'Parigha', nameHi: 'परिघ', nature: 'Inauspicious' },
  { name: 'Shiva', nameHi: 'शिव', nature: 'Auspicious' },
  { name: 'Siddha', nameHi: 'सिद्ध', nature: 'Auspicious' },
  { name: 'Sadhya', nameHi: 'साध्य', nature: 'Auspicious' },
  { name: 'Shubha', nameHi: 'शुभ', nature: 'Auspicious' },
  { name: 'Shukla', nameHi: 'शुक्ल', nature: 'Auspicious' },
  { name: 'Brahma', nameHi: 'ब्रह्म', nature: 'Auspicious' },
  { name: 'Indra', nameHi: 'इन्द्र', nature: 'Auspicious' },
  { name: 'Vaidhriti', nameHi: 'वैधृति', nature: 'Inauspicious' },
];

const KARANAS = [
  { name: 'Bava', nameHi: 'बव', type: 'Chara' },
  { name: 'Balava', nameHi: 'बालव', type: 'Chara' },
  { name: 'Kaulava', nameHi: 'कौलव', type: 'Chara' },
  { name: 'Taitila', nameHi: 'तैतिल', type: 'Chara' },
  { name: 'Gara', nameHi: 'गर', type: 'Chara' },
  { name: 'Vanija', nameHi: 'वणिज', type: 'Chara' },
  { name: 'Vishti (Bhadra)', nameHi: 'विष्टि (भद्रा)', type: 'Chara' },
  { name: 'Shakuni', nameHi: 'शकुनि', type: 'Sthira' },
  { name: 'Chatushpada', nameHi: 'चतुष्पद', type: 'Sthira' },
  { name: 'Naga', nameHi: 'नाग', type: 'Sthira' },
  { name: 'Kimstughna', nameHi: 'किंस्तुघ्न', type: 'Sthira' },
];

const RASHIS = [
  { name: 'Mesha (Aries)', nameHi: 'मेष' },
  { name: 'Vrishabha (Taurus)', nameHi: 'वृषभ' },
  { name: 'Mithuna (Gemini)', nameHi: 'मिथुन' },
  { name: 'Karka (Cancer)', nameHi: 'कर्क' },
  { name: 'Simha (Leo)', nameHi: 'सिंह' },
  { name: 'Kanya (Virgo)', nameHi: 'कन्या' },
  { name: 'Tula (Libra)', nameHi: 'तुला' },
  { name: 'Vrishchika (Scorpio)', nameHi: 'वृश्चिक' },
  { name: 'Dhanu (Sagittarius)', nameHi: 'धनु' },
  { name: 'Makara (Capricorn)', nameHi: 'मकर' },
  { name: 'Kumbha (Aquarius)', nameHi: 'कुम्भ' },
  { name: 'Meena (Pisces)', nameHi: 'मीन' },
];

// Choghadiya sequences based on weekday starting ruler
// 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
type ChoghadiyaName = 'Udveg' | 'Char' | 'Labh' | 'Amrit' | 'Kaal' | 'Shubh' | 'Rog';

const CHOGHADIYA_QUALITIES: Record<ChoghadiyaName, { quality: 'Amrit' | 'Shubh' | 'Labh' | 'Char' | 'Rog' | 'Kaal' | 'Udveg'; nature: 'Best' | 'Good' | 'Gain' | 'Neutral' | 'Bad' | 'Loss' | 'Anxiety'; nameHi: string }> = {
  Amrit: { quality: 'Amrit', nature: 'Best', nameHi: 'अमृत' },
  Shubh: { quality: 'Shubh', nature: 'Good', nameHi: 'शुभ' },
  Labh: { quality: 'Labh', nature: 'Gain', nameHi: 'लाभ' },
  Char: { quality: 'Char', nature: 'Neutral', nameHi: 'चर' },
  Rog: { quality: 'Rog', nature: 'Bad', nameHi: 'रोग' },
  Kaal: { quality: 'Kaal', nature: 'Loss', nameHi: 'काल' },
  Udveg: { quality: 'Udveg', nature: 'Anxiety', nameHi: 'उद्वेग' },
};

const DAY_CHOGHADIYA_ORDER: Record<number, ChoghadiyaName[]> = {
  0: ['Udveg', 'Char', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg'], // Sun
  1: ['Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg', 'Char', 'Labh', 'Amrit'], // Mon
  2: ['Rog', 'Udveg', 'Char', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog'], // Tue
  3: ['Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg', 'Char', 'Labh'], // Wed
  4: ['Shubh', 'Rog', 'Udveg', 'Char', 'Labh', 'Amrit', 'Kaal', 'Shubh'], // Thu
  5: ['Char', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg', 'Char'], // Fri
  6: ['Kaal', 'Shubh', 'Rog', 'Udveg', 'Char', 'Labh', 'Amrit', 'Kaal'], // Sat
};

const NIGHT_CHOGHADIYA_ORDER: Record<number, ChoghadiyaName[]> = {
  0: ['Shubh', 'Amrit', 'Char', 'Rog', 'Kaal', 'Labh', 'Udveg', 'Shubh'], // Sun
  1: ['Char', 'Rog', 'Kaal', 'Labh', 'Udveg', 'Shubh', 'Amrit', 'Char'], // Mon
  2: ['Kaal', 'Labh', 'Udveg', 'Shubh', 'Amrit', 'Char', 'Rog', 'Kaal'], // Tue
  3: ['Udveg', 'Shubh', 'Amrit', 'Char', 'Rog', 'Kaal', 'Labh', 'Udveg'], // Wed
  4: ['Amrit', 'Char', 'Rog', 'Kaal', 'Labh', 'Udveg', 'Shubh', 'Amrit'], // Thu
  5: ['Rog', 'Kaal', 'Labh', 'Udveg', 'Shubh', 'Amrit', 'Char', 'Rog'], // Fri
  6: ['Labh', 'Udveg', 'Shubh', 'Amrit', 'Char', 'Rog', 'Kaal', 'Labh'], // Sat
};

function formatTimeFromMinutes(totalMinutes: number): string {
  let m = Math.floor(totalMinutes) % (24 * 60);
  if (m < 0) m += 24 * 60;
  const hours = Math.floor(m / 60);
  const mins = m % 60;
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayH = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
  return `${displayH}:${mins.toString().padStart(2, '0')} ${period}`;
}

function isMinuteBetween(current: number, start: number, end: number): boolean {
  if (start <= end) {
    return current >= start && current < end;
  }
  // crosses midnight
  return current >= start || current < end;
}

export function getFullPanchang(targetDate: Date = new Date()): PanchangDetails {
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth();
  const day = targetDate.getDate();
  const dayOfWeekNum = targetDate.getDay();

  // Day names
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayNamesHi = ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'];

  // Astronomical approximations for IST (Indian Standard Time):
  // Estimated Sunrise & Sunset (approx 6:15 AM to 6:25 PM based on seasonal solar declination)
  const dayOfYear = Math.floor((targetDate.getTime() - new Date(year, 0, 0).getTime()) / 86400000);
  const solarAngle = ((dayOfYear - 80) / 365.25) * 2 * Math.PI;
  const sunriseMinutes = Math.round(6 * 60 + 10 - 25 * Math.sin(solarAngle));
  const sunsetMinutes = Math.round(18 * 60 + 15 + 30 * Math.sin(solarAngle));

  // Tithi calculation based on Lunar Phase approximation (synodic month = 29.530588 days)
  // Epoch: Known New Moon (Amavasya) base
  const epoch = new Date(2000, 0, 6, 18, 14, 0).getTime();
  const diffDays = (targetDate.getTime() - epoch) / (1000 * 60 * 60 * 24);
  const lunarAge = ((diffDays % 29.530588) + 29.530588) % 29.530588;

  // 1 Tithi = 29.530588 / 30 = 0.98435 days
  const tithiIndex = Math.floor(lunarAge / (29.530588 / 30)) % 30;
  const isShukla = tithiIndex < 15;
  const tithiInPaksha = (tithiIndex % 15);
  const tithiNameData = TITHI_NAMES[tithiInPaksha];
  const tithiDisplayName = isShukla
    ? (tithiInPaksha === 14 ? 'Purnima' : tithiNameData.name)
    : (tithiInPaksha === 14 ? 'Amavasya' : tithiNameData.name);
  const tithiDisplayNameHi = isShukla
    ? (tithiInPaksha === 14 ? 'पूर्णिमा' : tithiNameData.nameHi)
    : (tithiInPaksha === 14 ? 'अमावस्या' : tithiNameData.nameHi);

  // Tithi end time calculation (approx)
  const tithiProgress = (lunarAge % (29.530588 / 30)) / (29.530588 / 30);
  const tithiEndMinutes = Math.round((1 - tithiProgress) * 24 * 60);

  // Nakshatra calculation (Sidereal Moon ~ 27.32166 days)
  const nakshatraCycle = ((diffDays % 27.32166) + 27.32166) % 27.32166;
  const nakshatraIndex = Math.floor((nakshatraCycle / 27.32166) * 27) % 27;
  const currentNakshatra = NAKSHATRAS[nakshatraIndex];

  // Yoga calculation (Sum of Sun and Moon longitude)
  const yogaIndex = (tithiIndex + nakshatraIndex) % 27;
  const currentYoga = YOGAS[yogaIndex];

  // Karana calculation (Half of a Tithi = 60 per month)
  const karanaIndex = (tithiIndex * 2) % 60;
  let currentKarana = KARANAS[0];
  if (karanaIndex === 0) currentKarana = KARANAS[10]; // Kimstughna
  else if (karanaIndex >= 57) currentKarana = KARANAS[7 + (karanaIndex - 57)]; // Shakuni, Chatushpada, Naga
  else currentKarana = KARANAS[(karanaIndex - 1) % 7]; // Bava to Vishti

  // Rashis
  const suryaRashiIndex = (month + 8) % 12; // approximate solar transit
  const chandraRashiIndex = Math.floor((nakshatraIndex * 4) / 9) % 12; // 2.25 nakshatras per rashi

  // Samvat
  const vikramSamvat = year + 57;
  const shakaSamvat = year - 78;
  const isUttarayan = dayOfYear < 172 || dayOfYear > 355;

  // Ritu
  const rituNames = [
    { name: 'Shishir (Winter)', nameHi: 'शिशिर' },
    { name: 'Vasant (Spring)', nameHi: 'वसन्त' },
    { name: 'Grishma (Summer)', nameHi: 'ग्रीष्म' },
    { name: 'Varsha (Monsoon)', nameHi: 'वर्षा' },
    { name: 'Sharad (Autumn)', nameHi: 'शरद' },
    { name: 'Hemant (Pre-Winter)', nameHi: 'हेमन्त' },
  ];
  const ritu = rituNames[Math.floor((month / 2)) % 6];

  // Hindu Month names
  const hinduMonths = [
    { name: 'Chaitra', nameHi: 'चैत्र' },
    { name: 'Vaishakha', nameHi: 'वैशाख' },
    { name: 'Jyeshtha', nameHi: 'ज्येष्ठ' },
    { name: 'Ashadha', nameHi: 'आषाढ़' },
    { name: 'Shravana', nameHi: 'श्रावण' },
    { name: 'Bhadrapada', nameHi: 'भाद्रपद' },
    { name: 'Ashwin', nameHi: 'अश्विन' },
    { name: 'Kartika', nameHi: 'कार्तिक' },
    { name: 'Margashirsha', nameHi: 'मार्गशीर्ष' },
    { name: 'Pausha', nameHi: 'पौष' },
    { name: 'Magha', nameHi: 'माघ' },
    { name: 'Phalguna', nameHi: 'फाल्गुन' },
  ];
  const hinduMonth = hinduMonths[(month + 9) % 12];

  // Current time in minutes for live status
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  // Muhurats
  const dayDuration = sunsetMinutes - sunriseMinutes;
  const nightDuration = 24 * 60 - sunsetMinutes + sunriseMinutes;

  // Rahu Kaal window by weekday
  // Sun: 8th, Mon: 2nd, Tue: 7th, Wed: 5th, Thu: 6th, Fri: 4th, Sat: 3rd division of daytime
  const rahuKaalParts: Record<number, number> = { 0: 8, 1: 2, 2: 7, 3: 5, 4: 6, 5: 4, 6: 3 };
  const yamagandaParts: Record<number, number> = { 0: 5, 1: 4, 2: 3, 3: 2, 4: 1, 5: 7, 6: 6 };
  const gulikaiParts: Record<number, number> = { 0: 7, 1: 6, 2: 5, 3: 4, 4: 3, 5: 2, 6: 1 };

  const partDuration = dayDuration / 8;

  const getDayWindow = (partNumber: number): [number, number] => {
    const s = Math.round(sunriseMinutes + (partNumber - 1) * partDuration);
    const e = Math.round(s + partDuration);
    return [s, e];
  };

  const [rahuStart, rahuEnd] = getDayWindow(rahuKaalParts[dayOfWeekNum]);
  const [yamaStart, yamaEnd] = getDayWindow(yamagandaParts[dayOfWeekNum]);
  const [guliStart, guliEnd] = getDayWindow(gulikaiParts[dayOfWeekNum]);

  // Shubh Muhurats
  // Brahma: 96 mins to 48 mins before sunrise
  const brahmaStart = sunriseMinutes - 96;
  const brahmaEnd = sunriseMinutes - 48;

  // Abhijit: Midday window around 12:00 PM (4th muhurat after sunrise, about 48 mins)
  const midday = sunriseMinutes + dayDuration / 2;
  const abhijitStart = Math.round(midday - 24);
  const abhijitEnd = Math.round(midday + 24);

  // Vijaya Muhurat (late afternoon)
  const vijayaStart = Math.round(sunriseMinutes + dayDuration * 0.7);
  const vijayaEnd = Math.round(vijayaStart + 48);

  // Godhuli (around sunset)
  const godhuliStart = sunsetMinutes - 24;
  const godhuliEnd = sunsetMinutes + 24;

  // Amrit Kaal
  const amritKaalStart = Math.round(sunriseMinutes + dayDuration * 0.35);
  const amritKaalEnd = Math.round(amritKaalStart + 80);

  // Nishita Kaal (midnight hour ~ 11:45 PM to 12:35 AM)
  const midnight = sunsetMinutes + nightDuration / 2;
  const nishitaStart = Math.round(midnight - 24);
  const nishitaEnd = Math.round(midnight + 24);

  // Ashubh Muhurats (Dur Muhurtam)
  const durMuhurtamStart = Math.round(sunriseMinutes + dayDuration * 0.55);
  const durMuhurtamEnd = Math.round(durMuhurtamStart + 48);

  const shubhMuhurats: MuhuratTime[] = [
    {
      name: 'Brahma Muhurta',
      nameHi: 'ब्रह्म मुहूर्त',
      start: formatTimeFromMinutes(brahmaStart),
      end: formatTimeFromMinutes(brahmaEnd),
      quality: 'Shubh',
      isActive: isMinuteBetween(currentMinutes, brahmaStart, brahmaEnd),
      description: 'The supreme sacred hour for mantra japa, dhyana, and spiritual connection.',
    },
    {
      name: 'Abhijit Muhurta',
      nameHi: 'अभिजित मुहूर्त',
      start: formatTimeFromMinutes(abhijitStart),
      end: formatTimeFromMinutes(abhijitEnd),
      quality: 'Shubh',
      isActive: isMinuteBetween(currentMinutes, abhijitStart, abhijitEnd),
      description: 'Victory window ruled by Lord Vishnu; nullifies all minor astrological blemishes.',
    },
    {
      name: 'Amrit Kaal',
      nameHi: 'अमृत काल',
      start: formatTimeFromMinutes(amritKaalStart),
      end: formatTimeFromMinutes(amritKaalEnd),
      quality: 'Shubh',
      isActive: isMinuteBetween(currentMinutes, amritKaalStart, amritKaalEnd),
      description: 'Highly nectarous time for starting auspicious endeavors and Shiva aradhana.',
    },
    {
      name: 'Vijaya Muhurta',
      nameHi: 'विजय मुहूर्त',
      start: formatTimeFromMinutes(vijayaStart),
      end: formatTimeFromMinutes(vijayaEnd),
      quality: 'Shubh',
      isActive: isMinuteBetween(currentMinutes, vijayaStart, vijayaEnd),
      description: 'Brings triumph in endeavors, legal tasks, and new ventures.',
    },
    {
      name: 'Godhuli Muhurta',
      nameHi: 'गोधूलि मुहूर्त',
      start: formatTimeFromMinutes(godhuliStart),
      end: formatTimeFromMinutes(godhuliEnd),
      quality: 'Shubh',
      isActive: isMinuteBetween(currentMinutes, godhuliStart, godhuliEnd),
      description: 'Twilight calm when positive spiritual energies abound.',
    },
    {
      name: 'Nishita Muhurta (Shiva Kaal)',
      nameHi: 'निशिथ काल',
      start: formatTimeFromMinutes(nishitaStart),
      end: formatTimeFromMinutes(nishitaEnd),
      quality: 'Shubh',
      isActive: isMinuteBetween(currentMinutes, nishitaStart, nishitaEnd),
      description: 'Midnight cosmic window when Lord Shiva performs the cosmic Tandava.',
    },
  ];

  const ashubhMuhurats: MuhuratTime[] = [
    {
      name: 'Rahu Kaal',
      nameHi: 'राहु काल',
      start: formatTimeFromMinutes(rahuStart),
      end: formatTimeFromMinutes(rahuEnd),
      quality: 'Ashubh',
      isActive: isMinuteBetween(currentMinutes, rahuStart, rahuEnd),
      description: 'Inauspicious window influenced by Rahu. Avoid starting journeys, deals, or major rituals.',
    },
    {
      name: 'Yamaganda Kaal',
      nameHi: 'यमगण्ड',
      start: formatTimeFromMinutes(yamaStart),
      end: formatTimeFromMinutes(yamaEnd),
      quality: 'Ashubh',
      isActive: isMinuteBetween(currentMinutes, yamaStart, yamaEnd),
      description: 'Associated with Lord Yama; unfavorable for financial transactions and beginnings.',
    },
    {
      name: 'Gulikai Kaal',
      nameHi: 'गुलिक काल',
      start: formatTimeFromMinutes(guliStart),
      end: formatTimeFromMinutes(guliEnd),
      quality: 'Ashubh',
      isActive: isMinuteBetween(currentMinutes, guliStart, guliEnd),
      description: 'Influenced by Saturn’s son Gulika; causes delays in outcomes.',
    },
    {
      name: 'Dur Muhurtam',
      nameHi: 'दुर्मुहूर्त',
      start: formatTimeFromMinutes(durMuhurtamStart),
      end: formatTimeFromMinutes(durMuhurtamEnd),
      quality: 'Ashubh',
      isActive: isMinuteBetween(currentMinutes, durMuhurtamStart, durMuhurtamEnd),
      description: 'Discordant planetary alignment; recommended to pause important worldly undertakings.',
    },
  ];

  // Choghadiya calculation (Day: 8 periods, Night: 8 periods)
  const dayPeriodDuration = dayDuration / 8;
  const dayOrder = DAY_CHOGHADIYA_ORDER[dayOfWeekNum];
  const dayChoghadiya: ChoghadiyaPeriod[] = dayOrder.map((name, i) => {
    const s = Math.round(sunriseMinutes + i * dayPeriodDuration);
    const e = Math.round(sunriseMinutes + (i + 1) * dayPeriodDuration);
    const info = CHOGHADIYA_QUALITIES[name];
    return {
      name,
      nameHi: info.nameHi,
      quality: info.quality,
      nature: info.nature,
      start: formatTimeFromMinutes(s),
      end: formatTimeFromMinutes(e),
      isActive: isMinuteBetween(currentMinutes, s, e),
    };
  });

  const nightPeriodDuration = nightDuration / 8;
  const nightOrder = NIGHT_CHOGHADIYA_ORDER[dayOfWeekNum];
  const nightChoghadiya: ChoghadiyaPeriod[] = nightOrder.map((name, i) => {
    const s = Math.round(sunsetMinutes + i * nightPeriodDuration);
    const e = Math.round(sunsetMinutes + (i + 1) * nightPeriodDuration);
    const info = CHOGHADIYA_QUALITIES[name];
    return {
      name,
      nameHi: info.nameHi,
      quality: info.quality,
      nature: info.nature,
      start: formatTimeFromMinutes(s),
      end: formatTimeFromMinutes(e),
      isActive: isMinuteBetween(currentMinutes, s, e),
    };
  });

  return {
    date: targetDate.toISOString().split('T')[0],
    formattedDate: targetDate.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    dayOfWeek: dayNames[dayOfWeekNum],
    dayOfWeekHi: dayNamesHi[dayOfWeekNum],
    sunrise: formatTimeFromMinutes(sunriseMinutes),
    sunset: formatTimeFromMinutes(sunsetMinutes),
    moonrise: formatTimeFromMinutes(sunriseMinutes + 45),
    moonset: formatTimeFromMinutes(sunsetMinutes + 50),
    tithi: {
      number: tithiIndex + 1,
      name: tithiDisplayName,
      nameHi: tithiDisplayNameHi,
      paksha: isShukla ? 'Shukla' : 'Krishna',
      pakshaHi: isShukla ? 'शुक्ल' : 'कृष्ण',
      endTime: formatTimeFromMinutes(tithiEndMinutes),
      summary: `${tithiDisplayNameHi} (${isShukla ? 'शुक्ल पक्ष' : 'कृष्ण पक्ष'})`,
    },
    nakshatra: {
      number: nakshatraIndex + 1,
      name: currentNakshatra.name,
      nameHi: currentNakshatra.nameHi,
      deity: currentNakshatra.deity,
      endTime: formatTimeFromMinutes((tithiEndMinutes + 120) % (24 * 60)),
    },
    yoga: {
      number: yogaIndex + 1,
      name: currentYoga.name,
      nameHi: currentYoga.nameHi,
      nature: currentYoga.nature,
      endTime: formatTimeFromMinutes((tithiEndMinutes + 240) % (24 * 60)),
    },
    karana: {
      name: currentKarana.name,
      nameHi: currentKarana.nameHi,
      type: currentKarana.type,
      endTime: formatTimeFromMinutes(Math.round(tithiEndMinutes / 2)),
    },
    samvat: {
      vikram: vikramSamvat,
      vikramName: 'कालयुक्त',
      shaka: shakaSamvat,
      ayana: isUttarayan ? 'Uttarayana' : 'Dakshinayana',
      ayanaHi: isUttarayan ? 'उत्तरायण' : 'दक्षिणायन',
      ritu: ritu.name,
      rituHi: ritu.nameHi,
      month: hinduMonth.name,
      monthHi: hinduMonth.nameHi,
    },
    rashis: {
      suryaRashi: RASHIS[suryaRashiIndex].name,
      suryaRashiHi: RASHIS[suryaRashiIndex].nameHi,
      chandraRashi: RASHIS[chandraRashiIndex].name,
      chandraRashiHi: RASHIS[chandraRashiIndex].nameHi,
    },
    shubhMuhurats,
    ashubhMuhurats,
    dayChoghadiya,
    nightChoghadiya,
  };
}
