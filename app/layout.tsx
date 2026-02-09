import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import "@fontsource/jersey-10";
import "@fontsource/comfortaa";
import "./globals.css";

const LayoutWrapper = dynamic(() => import("../components/LayoutWrapper"), {
  ssr: true,
});

export const metadata: Metadata = {
  title: "Mahtabul Al Nahian | COO & Frontend Developer",
  description:
    "Frontend developer specializing in responsive web design and development. COO at UNLEFT. Minimalist portfolio emphasizing clarity and technical skill.",
  keywords: [
    "Minimalist Portfolio",
    "Frontend Developer",
    "Mobile Application Developer",
    "COO",
    "UNLEFT",
    "React",
    "TypeScript",
    "Tailwind",
  ],
  openGraph: {
    title: "Mahtabul Al Nahian | COO & Frontend Developer",
    description:
      "Frontend developer specializing in responsive web design and development.",
  },
  icons: {
    icon: "/favicon/web-app-manifest-192x192.png",
    apple: "/favicon/web-app-manifest-192x192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen relative">
        <div className="fixed inset-0 z-[-1] opacity-10">
          <Image
            src="/images/sk-background.png"
            alt="Background"
            fill
            className="object-cover object-right"
            quality={75}
            loading="lazy"
            fetchPriority="low"
          />
        </div>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
