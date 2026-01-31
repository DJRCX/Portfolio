import type { Metadata } from "next";
import Image from "next/image";
import { Jersey_10, Comfortaa } from "next/font/google";
import "./globals.css";
import SplashScreen from "../components/SplashScreen";

const jersey10 = Jersey_10({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jersey-10",
  display: "swap",
});

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
  display: "swap",
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
    <html lang="en" className={`${jersey10.variable} ${comfortaa.variable}`}>
      <body className="min-h-screen relative">
        <div className="fixed inset-0 z-[-1] opacity-10">
          <Image
            src="/images/sk-background.png"
            alt="Background"
            fill
            className="object-cover object-right"
            priority
            quality={100}
          />
        </div>
        <SplashScreen>{children}</SplashScreen>
      </body>
    </html>
  );
}
