import type { Config } from "tailwindcss";

// Nord light theme: Snow Storm bg, Polar Night text, Frost accents
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nord Polar Night (text / dark elements in light theme)
        nord: {
          0: "#2e3440",
          1: "#3b4252",
          2: "#434c5e",
          3: "#4c566a",
          // Snow Storm (backgrounds in light theme)
          4: "#d8dee9",
          5: "#e5e9f0",
          6: "#eceff4",
          // Frost (accents)
          7: "#8fbcbb",
          8: "#88c0d0",
          9: "#81a1c1",
          10: "#5e81ac",
          // Aurora
          11: "#bf616a",
          12: "#d08770",
          13: "#ebcb8b",
          14: "#a3be8c",
          15: "#b48ead",
        },
      },
      fontFamily: {
        heading: ["var(--font-jersey-10)", "sans-serif"],
        body: ["var(--font-comfortaa)", "sans-serif"],
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
    },
  },
  plugins: [],
};

export default config;
