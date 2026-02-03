"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useSplash } from "./SplashContext";

export default function SplashScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const shouldSkip = searchParams?.get("skip") === "true";
  const { userWantsMusic, setUserWantsMusic } = useSplash();

  const [showSplash, setShowSplash] = useState(!shouldSkip);
  const [isFading, setIsFading] = useState(false);
  const [promptRevealed, setPromptRevealed] = useState(false);
  const [promptHiding, setPromptHiding] = useState(false);

  const [text, setText] = useState("");
  const [showLogo, setShowLogo] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [selectedOption, setSelectedOption] = useState<"yes" | "no">("yes");

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
    setTimeout(() => setUserWantsMusic(true), PROMPT_TRANSITION_MS);
  };

  const handleNo = () => {
    setPromptHiding(true);
    setTimeout(() => setUserWantsMusic(false), PROMPT_TRANSITION_MS);
  };

  return (
    <>
      {children}

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
            <div className="font-heading text-[#eceff4] text-4xl tracking-widest h-12 flex items-center">
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
              <p className="font-heading text-[#d8dee9] text-lg tracking-wide">
                Do you want background music?
              </p>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handleYes}
                  onMouseEnter={() => setSelectedOption("yes")}
                  className={`font-heading rounded-lg px-6 py-3 transition-colors ${
                    selectedOption === "yes"
                      ? "bg-[#5e81ac] text-[#eceff4] hover:bg-[#81a1c1]"
                      : "border border-[#4c566a] bg-transparent text-[#d8dee9] hover:bg-[#3b4252]"
                  }`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={handleNo}
                  onMouseEnter={() => setSelectedOption("no")}
                  className={`font-heading rounded-lg px-6 py-3 transition-colors ${
                    selectedOption === "no"
                      ? "bg-[#5e81ac] text-[#eceff4] hover:bg-[#81a1c1]"
                      : "border border-[#4c566a] bg-transparent text-[#d8dee9] hover:bg-[#3b4252]"
                  }`}
                >
                  No
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
