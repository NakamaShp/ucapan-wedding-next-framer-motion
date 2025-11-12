"use client";

import React, { createContext, useState, useContext, useRef, useEffect } from "react";

interface MusicContextType {
  isPlaying: boolean;
  play: () => void;
  pause: () => void;
}

export const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // inisialisasi audio hanya sekali
  useEffect(() => {
    if (audioRef.current == null) {
      const audio = new Audio("/music/wedding.mp3");
      audio.loop = true;
      audio.volume = 0.6;
      audioRef.current = audio;
    }
  }, []);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {}); // ignore autoplay error
      setIsPlaying(true);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <MusicContext.Provider value={{ isPlaying, play, pause }}>
      {children}
    </MusicContext.Provider>
  );
};

// Hook supaya gampang dipakai di komponen lain
export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) throw new Error("useMusic must be used within a MusicProvider");
  return context;
};
