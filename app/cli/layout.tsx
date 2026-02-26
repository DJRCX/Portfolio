import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "CLI Portfolio Experience",
  description:
    "Interactive terminal version of Mahtabul Al Nahian's portfolio with projects, skills, and contact information.",
  alternates: {
    canonical: "/cli",
  },
  openGraph: {
    title: "CLI Portfolio Experience | Mahtabul Al Nahian Portfolio",
    description:
      "Terminal-inspired portfolio interface for exploring projects and experience.",
    url: "https://portfolio.unleft.space/cli",
    type: "website",
    images: ["/images/logo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CLI Portfolio Experience | Mahtabul Al Nahian Portfolio",
    description: "Explore the CLI mode of Mahtab's portfolio.",
    images: ["/images/logo.webp"],
  },
};

export default function CliLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#2e3440]" />}>
      {children}
    </Suspense>
  );
}
