"use client";

import { useRef, useEffect } from "react";
import styles from "../app/TextGlitch.module.css";

const DEFAULT_TEXT = "DJRCX";
const DEFAULT_ALT = ["djrcx", "DJR(X", "D!RCX", "0JRCX", "#JRCX"];

type TextGlitchProps = {
  text?: string;
  textAlt?: string[];
  /** Delay in ms before glitch effect starts after mount. Default 2000. */
  delayMs?: number;
  className?: string;
};

export default function TextGlitch({
  text = DEFAULT_TEXT,
  textAlt = DEFAULT_ALT,
  delayMs = 2000,
  className = "",
}: TextGlitchProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const frameIdRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const unglitchIdRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const clips = root.querySelectorAll<HTMLElement>(".TextGlitch-clip");
    const words = root.querySelectorAll<HTMLElement>(".TextGlitch-word");
    if (clips.length !== 3 || words.length !== 9) return;

    const randDouble = (d: number) => Math.random() * d - d / 2;
    const randInt = (n: number) => (Math.random() * n) | 0;

    const setWordContent = (txt: string) => {
      words.forEach((el) => (el.textContent = txt));
    };

    const randText = () => {
      const txt = Array.from(text);
      for (let i = 0; i < 12; ++i) {
        const ind = randInt(text.length);
        const alt = textAlt[randInt(textAlt.length)];
        if (alt[ind] !== undefined) txt[ind] = alt[ind];
      }
      return txt.join("");
    };

    const addClipCSS = () => {
      const clip1 = randDouble(0.1);
      const clip2 = randDouble(0.1);
      (clips[0] as HTMLElement).style.transform =
        `translate(${randDouble(0.3)}em, .02em)`;
      (clips[2] as HTMLElement).style.transform =
        `translate(${randDouble(0.3)}em, -.02em)`;
      (clips[0] as HTMLElement).style.clipPath =
        `inset( 0 0 ${0.6 + clip1}em 0 )`;
      (clips[1] as HTMLElement).style.clipPath =
        `inset( ${0.4 - clip1}em 0 ${0.3 - clip2}em 0 )`;
      (clips[2] as HTMLElement).style.clipPath =
        `inset( ${0.7 + clip2}em 0 0 0 )`;
    };

    const removeClipCSS = () => {
      clips.forEach((el) => {
        el.style.clipPath = "";
        el.style.transform = "";
      });
    };

    const unglitch = () => {
      removeClipCSS();
      setWordContent(text);
      root.classList.remove(styles.blended);
    };

    const glitch = () => {
      addClipCSS();
      setWordContent(randText());
      root.classList.add(styles.blended);
    };

    const frame = () => {
      glitch();
      unglitchIdRef.current = setTimeout(unglitch, 50 + Math.random() * 200);
      frameIdRef.current = setTimeout(frame, 250 + Math.random() * 500);
    };

    const delayId = setTimeout(frame, delayMs);

    return () => {
      clearTimeout(delayId);
      if (unglitchIdRef.current) clearTimeout(unglitchIdRef.current);
      if (frameIdRef.current) clearTimeout(frameIdRef.current);
      unglitch();
    };
  }, [text, textAlt, delayMs]);

  return (
    <div
      ref={rootRef}
      className={`${styles.root} ${className}`}
      aria-label={text}
    >
      <div className="TextGlitch-clip">
        <div className="TextGlitch-word">{text}</div>
        <div className={`TextGlitch-word ${styles.blend} ${styles.blendA}`}>
          {text}
        </div>
        <div className={`TextGlitch-word ${styles.blend} ${styles.blendB}`}>
          {text}
        </div>
      </div>
      <div className="TextGlitch-clip">
        <div className="TextGlitch-word">{text}</div>
        <div className={`TextGlitch-word ${styles.blend} ${styles.blendA}`}>
          {text}
        </div>
        <div className={`TextGlitch-word ${styles.blend} ${styles.blendB}`}>
          {text}
        </div>
      </div>
      <div className="TextGlitch-clip">
        <div className="TextGlitch-word">{text}</div>
        <div className={`TextGlitch-word ${styles.blend} ${styles.blendA}`}>
          {text}
        </div>
        <div className={`TextGlitch-word ${styles.blend} ${styles.blendB}`}>
          {text}
        </div>
      </div>
    </div>
  );
}
