"use client";

import { useState, useEffect } from "react";
import About from "./About";
import Experience from "./Experience";

export default function BioTabs() {
  const [activeTab, setActiveTab] = useState<"about" | "experience">("about");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#about") {
        setActiveTab("about");
      } else if (hash === "#experience") {
        setActiveTab("experience");
      }
    };

    // Initial check
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Scroll to section when tab changes if hash matches
  useEffect(() => {
    const hash = window.location.hash;
    // Only scroll if the hash matches the active tab (prevents scrolling on initial load if no hash)
    if (hash === `#${activeTab}`) {
      // Small timeout to ensure DOM is updated
      setTimeout(() => {
        const element = document.getElementById(activeTab);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [activeTab]);

  return (
    <section id="bio" className="container mx-auto px-4 py-12">
      <div className="mb-8 flex justify-center gap-4">
        <button
          onClick={() => {
            setActiveTab("about");
            window.history.pushState(null, "", "#about");
          }}
          className={`rounded-lg px-6 py-2 font-heading text-lg font-bold transition-colors ${
            activeTab === "about"
              ? "bg-nord-9 text-nord-6"
              : "bg-nord-5 text-nord-2 hover:bg-nord-4"
          }`}
        >
          About Me
        </button>
        <button
          onClick={() => {
            setActiveTab("experience");
            window.history.pushState(null, "", "#experience");
          }}
          className={`rounded-lg px-6 py-2 font-heading text-lg font-bold transition-colors ${
            activeTab === "experience"
              ? "bg-nord-9 text-nord-6"
              : "bg-nord-5 text-nord-2 hover:bg-nord-4"
          }`}
        >
          Experience
        </button>
      </div>

      <div className="transition-all duration-300">
        <div
          id="about"
          role="region"
          aria-label="About Me"
          style={{ display: activeTab === "about" ? "block" : "none" }}
        >
          <About />
        </div>
        <div
          id="experience"
          role="region"
          aria-label="Experience"
          style={{ display: activeTab === "experience" ? "block" : "none" }}
        >
          <Experience />
        </div>
      </div>
    </section>
  );
}
