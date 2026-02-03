"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

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

  if (pathname !== "/") {
    return <>{children}</>;
  }

  if (!SplashScreen) {
    return <div className="min-h-screen bg-[#2e3440]" />;
  }

  return (
    <Suspense fallback={<div className="min-h-screen bg-[#2e3440]" />}>
      <SplashScreen>{children}</SplashScreen>
    </Suspense>
  );
}
