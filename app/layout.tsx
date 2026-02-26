import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Comfortaa, Jersey_10 } from "next/font/google";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";
import "./globals.css";

import { Suspense } from "react";

const LayoutWrapper = dynamic(() => import("../components/LayoutWrapper"), {
  ssr: true,
});

const headingFont = Jersey_10({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const bodyFont = Comfortaa({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.unleft.space"),
  title: {
    default:
      "Mahtabul Al Nahian Portfolio | Frontend Developer & COO at UNLEFT",
    template: "%s | Mahtabul Al Nahian Portfolio",
  },
  description:
    "Frontend Developer portfolio of Mahtabul Al Nahian, COO at UNLEFT, featuring React, Next.js, TypeScript projects, responsive design work, and contact details.",
  keywords: [
    "Minimalist Portfolio",
    "Frontend Developer",
    "React Developer",
    "COO UNLEFT",
    "UNLEFT",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mahtabul Al Nahian Portfolio | Frontend Developer & COO at UNLEFT",
    description:
      "Explore projects, skills, and experience of Mahtabul Al Nahian, Frontend Developer and COO at UNLEFT.",
    url: "https://portfolio.unleft.space",
    siteName: "Mahtabul Al Nahian Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/mahtab.webp",
        width: 1200,
        height: 630,
        alt: "Mahtabul Al Nahian - Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahtabul Al Nahian Portfolio | Frontend Developer & COO at UNLEFT",
    description:
      "Frontend Developer portfolio with React and Next.js projects by Mahtabul Al Nahian.",
    images: ["/images/mahtab.webp"],
  },
  icons: {
    icon: "/favicon/web-app-manifest-192x192.png",
    apple: "/favicon/web-app-manifest-192x192.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} min-h-screen relative`}
      >
        <div className="fixed inset-0 z-[-1] opacity-10">
          <Image
            src="/images/sk-background.webp"
            alt="Background"
            fill
            className="object-cover object-right"
            sizes="100vw"
            quality={75}
            loading="lazy"
            fetchPriority="low"
          />
        </div>
        <ServiceWorkerRegistration />
        <Suspense fallback={<div className="min-h-screen bg-[#2e3440]" />}>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Suspense>
      </body>
    </html>
  );
}
