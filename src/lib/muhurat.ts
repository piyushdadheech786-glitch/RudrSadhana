export interface MuhuratWindow {
  name: string;
  nameHi: string;
  start: string;
  end: string;
  isActive: boolean;
  description: string;
}

function formatTime(hours: number, minutes: number): string {
  const h = Math.floor(hours);
  const m = Math.floor(minutes);
  const period = h >= 12 ? 'PM' : 'AM';
  const displayH = h > 12 ? h - 12 : h === 0 ? 12 : h;
  return `${displayH}:${m.toString().padStart(2, '0')} ${period}`;
}

function isInWindow(now: Date, startH: number, startM: number, endH: number, endM: number): boolean {
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const startMinutes = startH * 60 + startM;
  const endMinutes = endH * 60 + endM;
  return currentMinutes >= startMinutes && currentMinutes < endMinutes;
}

export function getBrahmaMuhurta(now: Date): MuhuratWindow {
  // 96 minutes before 6:00 AM sunrise = 4:24 AM, duration 48 min = ends 5:12 AM
  const startH = 4, startM = 24;
  const endH = 5, endM = 12;
  return {
    name: 'Brahma Muhurta',
    nameHi: 'ब्रह्म मुहूर्त',
    start: formatTime(startH, startM),
    end: formatTime(endH, endM),
    isActive: isInWindow(now, startH, startM, endH, endM),
    description: 'The most auspicious time for meditation and japa',
  };
}

export function getAbhijitMuhurta(now: Date): MuhuratWindow {
  const startH = 11, startM = 45;
  const endH = 12, endM = 35;
  return {
    name: 'Abhijit Muhurta',
    nameHi: 'अभिजित मुहूर्त',
    start: formatTime(startH, startM),
    end: formatTime(endH, endM),
    isActive: isInWindow(now, startH, startM, endH, endM),
    description: 'Victory muhurta — ideal for new beginnings',
  };
}

export function getRahuKaal(now: Date): MuhuratWindow {
  const day = now.getDay();
  // Rahu Kaal by day: Sun=16:30-18, Mon=7:30-9, Tue=15-16:30, Wed=12-13:30
  // Thu=13:30-15, Fri=10:30-12, Sat=9-10:30
  const rahuKaalMap: Record<number, [number, number, number, number]> = {
    0: [16, 30, 18, 0],   // Sunday
    1: [7, 30, 9, 0],     // Monday
    2: [15, 0, 16, 30],   // Tuesday
    3: [12, 0, 13, 30],   // Wednesday
    4: [13, 30, 15, 0],   // Thursday
    5: [10, 30, 12, 0],   // Friday
    6: [9, 0, 10, 30],    // Saturday
  };
  const [sH, sM, eH, eM] = rahuKaalMap[day];
  return {
    name: 'Rahu Kaal',
    nameHi: 'राहु काल',
    start: formatTime(sH, sM),
    end: formatTime(eH, eM),
    isActive: isInWindow(now, sH, sM, eH, eM),
    description: 'Inauspicious period — avoid starting new tasks',
  };
}

export function getPradoshKaal(now: Date): MuhuratWindow {
  // Evening Shiva worship window: ~6:00 PM to 8:30 PM
  const startH = 18, startM = 0;
  const endH = 20, endM = 30;
  return {
    name: 'Pradosh Kaal',
    nameHi: 'प्रदोष काल',
    start: formatTime(startH, startM),
    end: formatTime(endH, endM),
    isActive: isInWindow(now, startH, startM, endH, endM),
    description: 'Sacred evening window for Shiva worship',
  };
}

export function getNishitaKaal(now: Date): MuhuratWindow {
  // Midnight Shiva worship: ~11:30 PM to 12:30 AM
  const startH = 23, startM = 30;
  const endH = 24, endM = 30;
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const isActive = currentMinutes >= startH * 60 + startM || currentMinutes < 30;
  return {
    name: 'Nishita Kaal',
    nameHi: 'निशिथ काल',
    start: formatTime(startH, startM),
    end: '12:30 AM',
    isActive,
    description: 'Midnight hour — when Shiva performs Tandava',
  };
}

export function getAllMuhurat(): MuhuratWindow[] {
  const now = new Date();
  return [
    getBrahmaMuhurta(now),
    getAbhijitMuhurta(now),
    getRahuKaal(now),
    getPradoshKaal(now),
    getNishitaKaal(now),
  ];
}
