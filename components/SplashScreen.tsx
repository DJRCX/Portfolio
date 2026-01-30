"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Doto } from "next/font/google";
import Image from "next/image";
import { SplashContext } from "./SplashContext";
import BackgroundMusic from "./BackgroundMusic";

const doto = Doto({ subsets: ["latin"], weight: ["400"] });

export default function SplashScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [userWantsMusic, setUserWantsMusic] = useState<boolean | null>(null);
  const [promptRevealed, setPromptRevealed] = useState(false);
  const [promptHiding, setPromptHiding] = useState(false);
  const musicPlayRef = useRef<(() => void) | null>(null);
  const registerMusicPlay = useCallback((play: () => void) => {
    musicPlayRef.current = play;
  }, []);

  const [text, setText] = useState("");
  const [showLogo, setShowLogo] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const logoTimeout = setTimeout(() => {
      setShowLogo(true);
    }, 500);

    const typeStartTimeout = setTimeout(() => {
      const fullText = "DJRCX";
      let currentIndex = 0;

      const typeInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setAnimationComplete(true);
        }
      }, 300);
    }, 1500);

    return () => {
      clearTimeout(logoTimeout);
      clearTimeout(typeStartTimeout);
    };
  }, []);

  // Only transition away when user has chosen Yes or No for music
  useEffect(() => {
    if (animationComplete && userWantsMusic !== null && !isFading) {
      setIsFading(true);
      setTimeout(() => {
        setShowSplash(false);
      }, 1500);
    }
  }, [animationComplete, userWantsMusic, isFading]);

  // Reveal prompt with delay when typing finishes
  useEffect(() => {
    if (!animationComplete || userWantsMusic !== null) return;
    const t = setTimeout(() => setPromptRevealed(true), 80);
    return () => clearTimeout(t);
  }, [animationComplete, userWantsMusic]);

  const PROMPT_TRANSITION_MS = 400;

  const handleYes = () => {
    setPromptHiding(true);
    setTimeout(() => {
      setUserWantsMusic(true);
      musicPlayRef.current?.();
    }, PROMPT_TRANSITION_MS);
  };

  const handleNo = () => {
    setPromptHiding(true);
    setTimeout(() => setUserWantsMusic(false), PROMPT_TRANSITION_MS);
  };

  return (
    <SplashContext.Provider
      value={{
        isSplashComplete: isFading || !showSplash,
        userWantsMusic,
        setUserWantsMusic,
        registerMusicPlay,
      }}
    >
      {children}
      <BackgroundMusic />

      {showSplash && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-[#2e3440] transition-opacity duration-1000 ${
            isFading ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="flex flex-row items-center justify-center">
            <div
              className={`transition-opacity duration-1000 ${
                showLogo ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative w-12 h-12 mr-8">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div
              className={`${doto.className} text-[#eceff4] text-4xl tracking-widest h-12 flex items-center`}
            >
              {text}
            </div>
          </div>

          {animationComplete && userWantsMusic === null && (
            <div
              className="flex flex-col items-center gap-4"
              style={{
                opacity: promptRevealed && !promptHiding ? 1 : 0,
                transform:
                  promptRevealed && !promptHiding
                    ? "translateY(0)"
                    : "translateY(0.75rem)",
                transition: `opacity ${PROMPT_TRANSITION_MS}ms ease-out, transform ${PROMPT_TRANSITION_MS}ms ease-out`,
                pointerEvents: promptHiding ? "none" : "auto",
              }}
            >
              <p
                className={`${doto.className} text-[#d8dee9] text-lg tracking-wide`}
              >
                Do you want background music?
              </p>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handleYes}
                  className={`${doto.className} rounded-lg bg-[#5e81ac] px-6 py-3 text-[#eceff4] transition-colors hover:bg-[#81a1c1]`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={handleNo}
                  className={`${doto.className} rounded-lg border border-[#4c566a] bg-transparent px-6 py-3 text-[#d8dee9] transition-colors hover:bg-[#3b4252]`}
                >
                  No
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </SplashContext.Provider>
  );
}
