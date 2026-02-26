import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mahtabul Al Nahian Portfolio",
    short_name: "Mahtab Portfolio",
    description:
      "Portfolio of Mahtabul Al Nahian, Frontend Developer and COO at UNLEFT.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#2E3440",
    theme_color: "#2E3440",
    icons: [
      {
        src: "/favicon/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
