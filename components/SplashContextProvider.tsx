"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SplashContext } from "./SplashContext";

const STORAGE_KEY = "portfolio-music";

function readStored(): boolean | null {
  if (typeof window === "undefined") return null;
  const s = localStorage.getItem(STORAGE_KEY);
  if (s === "true") return true;
  if (s === "false") return false;
  return null;
}

export function SplashContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userWantsMusic, setUserWantsMusicState] = useState<boolean | null>(
    null
  );
  const playRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    setUserWantsMusicState(readStored());
  }, []);

  const setUserWantsMusic = useCallback((value: boolean) => {
    setUserWantsMusicState(value);
    try {
      localStorage.setItem(STORAGE_KEY, String(value));
    } catch {
      // ignore
    }
    if (value) {
      playRef.current?.();
    }
  }, []);

  const registerMusicPlay = useCallback((play: () => void) => {
    playRef.current = play;
  }, []);

  const value = {
    isSplashComplete: true,
    userWantsMusic,
    setUserWantsMusic,
    registerMusicPlay,
  };

  return (
    <SplashContext.Provider value={value}>{children}</SplashContext.Provider>
  );
}
