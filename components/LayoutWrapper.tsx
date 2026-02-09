"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import BackgroundMusic from "./BackgroundMusic";
import { SplashProvider } from "./SplashContext";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [SplashScreen, setSplashScreen] = useState<React.ComponentType<{
    children: React.ReactNode;
  }> | null>(null);

  // Only load SplashScreen bundle when on home route so /cli and /cv load fast
  useEffect(() => {
    if (pathname === "/") {
      import("./SplashScreen").then((mod) =>
        setSplashScreen(() => mod.default),
      );
    } else {
      setSplashScreen(null);
    }
  }, [pathname]);

  return (
    <Suspense fallback={<div className="min-h-screen bg-[#2e3440]" />}>
      <SplashProvider>
        {pathname === "/" ? (
          SplashScreen ? (
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
