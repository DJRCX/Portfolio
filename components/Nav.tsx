"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import TextGlitch from "./TextGlitch";

const navLinks = [
  { href: "#skills", label: "Skills" },
  { href: "#bio", label: "About & Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-nord-4 bg-nord-5/95 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link
            href="#"
            className="font-heading text-2xl font-bold text-nord-0 transition-colors hover:text-nord-9 flex items-center gap-3"
          >
            <Image
              src="/images/logo.png"
              alt="DJRCX Logo"
              width={25}
              height={25}
              className="rounded-full"
            />
            <TextGlitch delayMs={10000} className="text-nord-0 font-heading" />
          </Link>
          <div className="hidden md:flex md:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-heading text-xl text-nord-1 transition-colors hover:text-nord-9"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <button
            type="button"
            className="md:hidden text-nord-0"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t border-nord-4 bg-nord-5 px-4 py-3 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-heading text-xl text-nord-1 transition-colors hover:text-nord-9"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
      {/* Spacer to prevent content overlap */}
      <div className="h-[53px]" aria-hidden="true" />
    </>
  );
}
