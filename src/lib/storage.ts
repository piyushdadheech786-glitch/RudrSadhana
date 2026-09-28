'use client';

export interface JapaData {
  dailyCount: number;
  totalRounds: number;
  lastDate: string;
  streak: number;
  completionDates: string[];
}

export interface SankalpData {
  type: '21-day' | '40-day';
  label: string;
  startDate: string;
  completedDays: string[];
  isActive: boolean;
}

const JAPA_KEY = 'rudrsadhana_japa';
const SANKALP_KEY = 'rudrsadhana_sankalp';

function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

function getTodayStr(): string {
  return new Date().toISOString().split('T')[0];
}

export function getJapaData(): JapaData {
  if (!isBrowser()) {
    return { dailyCount: 0, totalRounds: 0, lastDate: '', streak: 0, completionDates: [] };
  }
  try {
    const raw = localStorage.getItem(JAPA_KEY);
    if (raw) {
      const data = JSON.parse(raw) as JapaData;
      const today = getTodayStr();
      if (data.lastDate !== today) {
        // Check if yesterday was completed for streak
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];
        if (data.lastDate !== yesterdayStr) {
          data.streak = 0;
        }
        data.dailyCount = 0;
        data.lastDate = today;
        saveJapaData(data);
      }
      return data;
    }
  } catch {}
  return { dailyCount: 0, totalRounds: 0, lastDate: getTodayStr(), streak: 0, completionDates: [] };
}

export function saveJapaData(data: JapaData): void {
  if (!isBrowser()) return;
  localStorage.setItem(JAPA_KEY, JSON.stringify(data));
}

export function incrementRound(currentCount: number): JapaData {
  const data = getJapaData();
  const today = getTodayStr();
  data.totalRounds += 1;
  data.dailyCount = currentCount;
  data.lastDate = today;
  if (!data.completionDates.includes(today)) {
    data.completionDates.push(today);
    data.streak += 1;
  }
  saveJapaData(data);
  return data;
}

export function getSankalpData(): SankalpData | null {
  if (!isBrowser()) return null;
  try {
    const raw = localStorage.getItem(SANKALP_KEY);
    if (raw) return JSON.parse(raw) as SankalpData;
  } catch {}
  return null;
}

export function saveSankalpData(data: SankalpData): void {
  if (!isBrowser()) return;
  localStorage.setItem(SANKALP_KEY, JSON.stringify(data));
}

export function startSankalp(type: '21-day' | '40-day'): SankalpData {
  const labels: Record<string, string> = {
    '21-day': '21-Day Mahamrityunjaya Anushthan',
    '40-day': '40-Day Shiva Sadhana',
  };
  const data: SankalpData = {
    type,
    label: labels[type],
    startDate: getTodayStr(),
    completedDays: [],
    isActive: true,
  };
  saveSankalpData(data);
  return data;
}

export function markSankalpDay(): SankalpData | null {
  const data = getSankalpData();
  if (!data || !data.isActive) return null;
  const today = getTodayStr();
  if (!data.completedDays.includes(today)) {
    data.completedDays.push(today);
  }
  const totalDays = data.type === '21-day' ? 21 : 40;
  if (data.completedDays.length >= totalDays) {
    data.isActive = false;
  }
  saveSankalpData(data);
  return data;
}

export function resetSankalp(): void {
  if (!isBrowser()) return;
  localStorage.removeItem(SANKALP_KEY);
}
