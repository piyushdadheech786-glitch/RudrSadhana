export interface FestivalItem {
  id: string;
  name: string;
  nameHi: string;
  date: string;
  tithi: string;
  month: string;
  deity: string;
  importance: 'Major' | 'High' | 'Regular';
  description: string;
  vidhi: string;
  fastingRecommended: boolean;
}

export const FESTIVALS_DATA: FestivalItem[] = [
  {
    id: 'maha-shivratri-2026',
    name: 'Maha Shivratri',
    nameHi: 'महाशिवरात्रि',
    date: 'February 15, 2026',
    tithi: 'Magha / Phalguna Krishna Chaturdashi',
    month: 'Phalguna',
    deity: 'Lord Shiva & Mata Parvati',
    importance: 'Major',
    description: 'The supreme night of Lord Shiva celebrating the marriage of Shiva and Parvati, and the cosmic emergence of the Jyotirlinga. Fasting and 4-Prahar puja on this night grants liberation (Moksha).',
    vidhi: 'Nirjala / Phalahar fast, all-night vigil (Jagran), 4 prahar Rudrabhishek with milk, curd, honey, ghee, and Ganga water, chanting Om Namah Shivaya 1008 times.',
    fastingRecommended: true,
  },
  {
    id: 'pradosh-vrat-shukla',
    name: 'Shukla Trayodashi Pradosh Vrat',
    nameHi: 'शुक्ल प्रदोष व्रत',
    date: 'October 24, 2026',
    tithi: 'Shukla Paksha Trayodashi',
    month: 'Ashwin',
    deity: 'Lord Shiva',
    importance: 'High',
    description: 'Sacred twilight vow for dissolving karma, curing diseases, and achieving spiritual focus. Lord Shiva dances in ecstatic bliss on Kailash during Pradosh Kaal.',
    vidhi: 'Bathe before sunset, perform Shiva Puja with Bilva leaves, light pure cow ghee lamps during twilight, recite Shiva Chalisa or Lingashtakam.',
    fastingRecommended: true,
  },
  {
    id: 'masik-shivratri',
    name: 'Masik Shivratri',
    nameHi: 'मासिक शिवरात्रि',
    date: 'November 8, 2026',
    tithi: 'Krishna Paksha Chaturdashi',
    month: 'Kartika',
    deity: 'Lord Shiva',
    importance: 'High',
    description: 'Every lunar month on the 14th waning night, Masik Shivratri is observed to tame the flickering mind and conquer negative tendencies.',
    vidhi: 'Night meditation, Japa of Mahamrityunjaya Mantra, light a deepak facing North or East.',
    fastingRecommended: true,
  },
  {
    id: 'shravan-somwar-1',
    name: 'Shravan Somwar Vrat',
    nameHi: 'श्रावण सोमवार व्रत',
    date: 'July 27, 2026',
    tithi: 'Shravan Krishna',
    month: 'Shravana',
    deity: 'Lord Someshwara (Shiva)',
    importance: 'Major',
    description: 'The holy month of Shravana is dear to Lord Shiva. Observing Shravan Somwar brings marital harmony, righteous life partner, and peace.',
    vidhi: 'Panchamrit Abhishek on Shivling, offer white flowers, Dhatura, and Belpatra, read Solah Somwar Vrat Katha.',
    fastingRecommended: true,
  },
  {
    id: 'kartik-purnima',
    name: 'Kartik Purnima (Dev Deepawali)',
    nameHi: 'कार्तिक पूर्णिमा (देव दीपावली)',
    date: 'November 24, 2026',
    tithi: 'Kartika Shukla Purnima',
    month: 'Kartika',
    deity: 'Lord Shiva (Tripurari)',
    importance: 'Major',
    description: 'Lord Shiva slew the demon Tripurasura on this auspicious full moon. Millions of earthen lamps are lit on the ghats of Kashi (Varanasi).',
    vidhi: 'Holy river dip (Snana), Deep Daan (lighting lamps at temples and water bodies), Vishnu & Shiva puja.',
    fastingRecommended: false,
  },
  {
    id: 'shravan-shivratri',
    name: 'Sawan Shivratri (Kanwar Yatra)',
    nameHi: 'सावन शिवरात्रि',
    date: 'August 11, 2026',
    tithi: 'Shravana Krishna Chaturdashi',
    month: 'Shravana',
    deity: 'Lord Shiva',
    importance: 'Major',
    description: 'Millions of Kanwariyas offer holy Ganga water to Lord Shiva on Sawan Shivratri with pure surrender and love.',
    vidhi: 'Offering Gangajal to Shiva Lingam, fasting throughout the day, chanting Bam Bam Bhole.',
    fastingRecommended: true,
  },
];
