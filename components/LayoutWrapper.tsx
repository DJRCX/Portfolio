"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import BackgroundMusic from "./BackgroundMusic";
import { SplashProvider } from "./SplashContext";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [SplashScreen, setSplashScreen] = useState<React.ComponentType<{
    children: React.ReactNode;
  }> | null>(null);
  const shouldSkipSplash =
    searchParams?.get("skip") === "true" ||
    (typeof window !== "undefined" &&
      new URLSearchParams(window.location.search).get("skip") === "true");

  // Only load SplashScreen bundle when on home route so /cli and /cv load fast
  useEffect(() => {
    if (pathname === "/" && !shouldSkipSplash) {
      import("./SplashScreen").then((mod) =>
        setSplashScreen(() => mod.default),
      );
    } else {
      setSplashScreen(null);
    }
  }, [pathname, shouldSkipSplash]);

  return (
    <Suspense fallback={<div className="min-h-screen bg-[#2e3440]" />}>
      <SplashProvider>
        {pathname === "/" ? (
          shouldSkipSplash ? (
            children
          ) : SplashScreen ? (
            <SplashScreen>{children}</SplashScreen>
          ) : (
            <div className="min-h-screen bg-[#2e3440]" />
          )
        ) : (
          children
        )}
        <BackgroundMusic />
      </SplashProvider>
    </Suspense>
  );
}
