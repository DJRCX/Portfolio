"use client";

import {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
} from "react";
import { useSearchParams } from "next/navigation";

interface SplashContextType {
  isSplashComplete: boolean;
  userWantsMusic: boolean | null;
  setUserWantsMusic: (value: boolean | null) => void;
  /** Register a play callback so splash can start music on Yes click (same user gesture) */
  registerMusicPlay: (play: () => void) => void;
  startMusic: () => void;
  shouldSkip: boolean;
}

export const SplashContext = createContext<SplashContextType>({
  isSplashComplete: false,
  userWantsMusic: null,
  setUserWantsMusic: () => {},
  registerMusicPlay: () => {},
  startMusic: () => {},
  shouldSkip: false,
});

export const useSplash = () => useContext(SplashContext);

export function SplashProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const shouldSkip = searchParams?.get("skip") === "true";

  // If skipping, default music preference to false
  const [userWantsMusic, setUserWantsMusic] = useState<boolean | null>(
    shouldSkip ? false : null,
  );
  const musicPlayRef = useRef<(() => void) | null>(null);

  const registerMusicPlay = useCallback((play: () => void) => {
    musicPlayRef.current = play;
  }, []);

  const startMusic = useCallback(() => {
    musicPlayRef.current?.();
  }, []);

  // Sync music preference with local storage or session if needed?
  // For now just state is fine.

  // If we skipped, we consider splash "complete" immediately.
  // But wait, isSplashComplete is derived from SplashScreen's internal state?
  // Actually, SplashScreen has its own "showSplash" state.
  // But maybe we can just say splash is complete if user has chosen music (or skipped).
  const isSplashComplete = userWantsMusic !== null;

  return (
    <SplashContext.Provider
      value={{
        isSplashComplete,
        userWantsMusic,
        setUserWantsMusic,
        registerMusicPlay,
        startMusic,
        shouldSkip,
      }}
    >
      {children}
    </SplashContext.Provider>
  );
}
