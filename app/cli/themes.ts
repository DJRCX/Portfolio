// Nord palette: same as project tailwind (nord0–nord15)
export const THEMES = ["nord-dark", "nord-light"] as const;

export type ThemeId = (typeof THEMES)[number];

export type ThemePalette = {
  bg: string;
  text: string;
  promptUser: string;
  promptHost: string;
  command: string;
  desc: string;
  usage: string;
};

export const THEME_PALETTES: Record<ThemeId, ThemePalette> = {
  "nord-dark": {
    bg: "#2e3440", // nord0 - Polar Night
    text: "#d8dee9", // nord4 - Snow Storm
    promptUser: "#b48ead", // nord15 - Aurora (magenta)
    promptHost: "#88c0d0", // nord8 - Frost
    command: "#a3be8c", // nord14 - Aurora green
    desc: "#88c0d0", // nord8 - Frost (descriptions)
    usage: "#ebcb8b", // nord13 - Aurora (usage hint)
  },
  "nord-light": {
    bg: "#eceff4", // nord6 - Snow Storm
    text: "#2e3440", // nord0 - Polar Night
    promptUser: "#b48ead", // nord15
    promptHost: "#5e81ac", // nord10
    command: "#a3be8c", // nord14
    desc: "#5e81ac", // nord10
    usage: "#b48ead", // nord15 for usage
  },
};
