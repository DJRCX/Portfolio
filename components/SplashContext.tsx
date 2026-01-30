"use client";

import { createContext, useContext } from "react";

interface SplashContextType {
  isSplashComplete: boolean;
  userWantsMusic: boolean | null;
  setUserWantsMusic: (value: boolean) => void;
  /** Register a play callback so splash can start music on Yes click (same user gesture) */
  registerMusicPlay: (play: () => void) => void;
}

export const SplashContext = createContext<SplashContextType>({
  isSplashComplete: false,
  userWantsMusic: null,
  setUserWantsMusic: () => {},
  registerMusicPlay: () => {},
});

export const useSplash = () => useContext(SplashContext);
