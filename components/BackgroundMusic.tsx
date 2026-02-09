"use client";

import { useRef, useState, useEffect } from "react";
import { useSplash } from "./SplashContext";

const AUDIO_SRC = "/audio/End_of_Wandering_Shorekeeper%27s_Piano_Theme.mp3";
const TRACK_NAME = "End of Wandering Shorekeeper's Piano Theme";
const TITLE_POPOUT_DURATION_MS = 12000;
const TITLE_TRANSITION_MS = 600;

const WAVE_HEIGHTS = [0.4, 0.7, 1, 0.6, 0.5, 0.8, 0.4];

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const {
    registerMusicPlay,
    userWantsMusic,
    setUserWantsMusic,
    isSplashComplete,
  } = useSplash();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTitle, setShowTitle] = useState(true);
  const [titleRevealed, setTitleRevealed] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const revealTimer = setTimeout(() => setTitleRevealed(true), 80);
    return () => clearTimeout(revealTimer);
  }, []);

  // Register play so splash can start music on Yes click (same user gesture)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    registerMusicPlay(() => {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    });
  }, [registerMusicPlay]);

  // Sync audio state with userWantsMusic context (handles changes from other components like CLI)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (userWantsMusic === true) {
      if (audio.paused) {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setTimeout(() => setIsPlaying(true), 0);
            })
            .catch(() => {});
        }
      } else {
        setTimeout(() => setIsPlaying(true), 0);
      }
    } else if (userWantsMusic === false) {
      if (!audio.paused) {
        audio.pause();
      }
      setTimeout(() => setIsPlaying(false), 0);
    }
  }, [userWantsMusic]);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setShowTitle(false);
    }, TITLE_POPOUT_DURATION_MS);
    return () => clearTimeout(hideTimer);
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      setUserWantsMusic(false);
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setUserWantsMusic(true);
        })
        .catch(() => {});
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        loop
        preload="auto"
        aria-label="Background music"
      />
      {isSplashComplete && (
        <div className="fixed bottom-6 right-6 z-40 flex items-end gap-2">
          <div
            className="music-title-popout mb-2 rounded-lg border border-nord-4 bg-nord-5/90 px-4 py-2 shadow-lg backdrop-blur-sm"
            role="tooltip"
            aria-hidden={!showTitle && !isHovering}
            style={{
              opacity: (showTitle || isHovering) && titleRevealed ? 1 : 0,
              transform:
                (showTitle || isHovering) && titleRevealed
                  ? "translateX(0)"
                  : "translateX(0.5rem)",
              transition: `opacity ${TITLE_TRANSITION_MS}ms ease-out, transform ${TITLE_TRANSITION_MS}ms ease-out`,
              pointerEvents: showTitle || isHovering ? "auto" : "none",
            }}
          >
            <p className="font-body text-sm font-medium text-nord-0">
              {TRACK_NAME}
            </p>
          </div>
          <button
            type="button"
            onClick={toggle}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-nord-4 bg-nord-5/95 shadow-lg backdrop-blur-sm transition-colors hover:border-nord-9 hover:bg-nord-5 disabled:opacity-70"
            aria-label={
              isPlaying ? "Pause background music" : "Play background music"
            }
          >
            <div className="flex h-6 items-end justify-center gap-0.5">
              {WAVE_HEIGHTS.map((_, i) => (
                <span
                  key={i}
                  className={`music-wave-bar w-1 rounded-full bg-nord-9 ${
                    isPlaying ? "playing" : ""
                  }`}
                  style={{
                    height: "20px",
                    animationDelay: isPlaying ? `${i * 0.08}s` : undefined,
                    transform: isPlaying ? undefined : "scaleY(0.3)",
                  }}
                />
              ))}
            </div>
          </button>
        </div>
      )}
    </>
  );
}
