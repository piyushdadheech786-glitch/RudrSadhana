'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, Repeat, ChevronDown, Volume2, VolumeX } from 'lucide-react';

const TRACKS = [
  {
    id: 'om-namah-shivaya',
    title: 'Om Namah Shivaya (108 Loop)',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: 'shivoham',
    title: 'Shivoham Shivoham',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    id: 'mahamrityunjaya',
    title: 'Mahamrityunjaya Mantra',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
];

export default function AmbientPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(true);
  const [trackIdx, setTrackIdx] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const track = TRACKS[trackIdx];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = isMuted ? 0 : volume;
    audio.loop = isLooping;
  }, [volume, isMuted, isLooping]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = track.url;
    if (isPlaying) {
      audio.play().catch(() => {});
    }
  }, [trackIdx]);

  const togglePlay = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      await audio.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    setProgress(audio.currentTime / audio.duration);
  };

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md z-50">
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        preload="none"
      />
      <div className="bg-neutral-950/95 backdrop-blur-lg border-t border-neutral-800 px-4 py-3">
        {/* Progress Bar */}
        <div className="h-0.5 bg-neutral-800 rounded-full mb-2 -mt-1">
          <div
            className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        <div className="flex items-center gap-3">
          {/* Play/Pause */}
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 hover:bg-amber-500/30 transition-colors"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>

          {/* Track Info & Selector */}
          <div className="flex-1 min-w-0 relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-1 text-left w-full"
            >
              <span className="text-sm text-neutral-200 truncate">{track.title}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-neutral-500 flex-shrink-0 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
            </button>
            {showDropdown && (
              <div className="absolute bottom-full left-0 w-full mb-2 bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-xl">
                {TRACKS.map((t, i) => (
                  <button
                    key={t.id}
                    onClick={() => { setTrackIdx(i); setShowDropdown(false); }}
                    className={`w-full px-3 py-2.5 text-left text-sm transition-colors ${
                      i === trackIdx
                        ? 'bg-amber-500/10 text-amber-400'
                        : 'text-neutral-400 hover:bg-neutral-800'
                    }`}
                  >
                    {t.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Loop Toggle */}
          <button
            onClick={() => setIsLooping(!isLooping)}
            className={`p-2 rounded-lg transition-colors ${
              isLooping ? 'text-amber-400 bg-amber-500/10' : 'text-neutral-600 hover:text-neutral-400'
            }`}
          >
            <Repeat className="w-4 h-4" />
          </button>

          {/* Volume */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 rounded-lg text-neutral-400 hover:text-white transition-colors"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          <input
            type="range"
            min="0" max="1" step="0.05"
            value={isMuted ? 0 : volume}
            onChange={(e) => { setVolume(parseFloat(e.target.value)); setIsMuted(false); }}
            className="w-16 h-1 accent-amber-500 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
