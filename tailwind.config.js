import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px",
        disabledOpacity: 0.45,
        fontSize: {
          tiny:   "0.75rem",
          small:  "0.875rem",
          medium: "0.9375rem",
          large:  "1.125rem",
        },
        lineHeight: {
          tiny:   "1rem",
          small:  "1.25rem",
          medium: "1.5rem",
          large:  "1.75rem",
        },
        radius: {
          small:  "6px",
          medium: "8px",
          large:  "12px",
        },
        borderWidth: {
          small:  "1px",
          medium: "1px",
          large:  "2px",
        },
      },
      themes: {
        // ─── LIGHT MODE ───────────────────────────────────────────
        light: {
          colors: {
            // Ash/slate base light mode
            background: { DEFAULT: "#F0F0F0" },

            content1: { DEFAULT: "#F0F0F0",  foreground: "#0a0a0a" },
            content2: { DEFAULT: "#E8E8E8",  foreground: "#0a0a0a" },
            content3: { DEFAULT: "#DEDEDE",  foreground: "#0a0a0a" },
            content4: { DEFAULT: "#D2D2D2",  foreground: "#0a0a0a" },

            divider: { DEFAULT: "rgba(0,0,0,0.1)" },
            focus:   { DEFAULT: "#FF3131" },

            foreground: {
              50:      "#E8E8E8",
              100:     "#DEDEDE",
              200:     "#CACACA",
              300:     "#ADADAD",
              400:     "#8A8A8A",
              500:     "#666666",
              600:     "#444444",
              700:     "#2A2A2A",
              800:     "#1A1A1A",
              900:     "#0a0a0a",
              DEFAULT: "#0a0a0a",
            },

            // Primary — #FF3131 brand red
            primary: {
              50:      "#FFF0F0",
              100:     "#FFD6D6",
              200:     "#FFB3B3",
              300:     "#FF8080",
              400:     "#FF5555",
              500:     "#FF3131",
              600:     "#E60000",
              700:     "#D10000",
              800:     "#A80000",
              900:     "#7A0000",
              DEFAULT: "#FF3131",
              foreground: "#FFFFFF",
            },

            // Secondary — #C6C3C3 warm grey
            secondary: {
              50:      "#FAFAFA",
              100:     "#F2F2F2",
              200:     "#E8E8E8",
              300:     "#D8D8D8",
              400:     "#C6C3C3",
              500:     "#A09D9D",
              600:     "#7A7777",
              700:     "#555252",
              800:     "#333131",
              900:     "#1A1818",
              DEFAULT: "#C6C3C3",
              foreground: "#0a0a0a",
            },

            success: {
              DEFAULT: "#16a34a",
              foreground: "#ffffff",
            },
            warning: {
              DEFAULT: "#d97706",
              foreground: "#ffffff",
            },
            danger: {
              DEFAULT: "#D10000",
              foreground: "#ffffff",
            },
          },
        },

        // ─── DARK MODE ────────────────────────────────────────────
        dark: {
          colors: {
            background: { DEFAULT: "#0a0a0a" },

            content1: { DEFAULT: "#141414",  foreground: "#F0EDED" },
            content2: { DEFAULT: "#1E1E1E",  foreground: "#F0EDED" },
            content3: { DEFAULT: "#2A2A2A",  foreground: "#F0EDED" },
            content4: { DEFAULT: "#363636",  foreground: "#F0EDED" },

            divider: { DEFAULT: "rgba(198,195,195,0.15)" },
            focus:   { DEFAULT: "#FF3131" },

            foreground: {
              50:      "#1A1818",
              100:     "#2A2828",
              200:     "#3D3B3B",
              300:     "#555252",
              400:     "#7A7777",
              500:     "#A09D9D",
              600:     "#C6C3C3",
              700:     "#DCDADA",
              800:     "#EFEFEF",
              900:     "#F7F7F7",
              DEFAULT: "#F0EDED",
            },

            // Primary — #FF3131 brand red (same in dark, pops on dark bg)
            primary: {
              50:      "#7A0000",
              100:     "#A80000",
              200:     "#D10000",
              300:     "#E60000",
              400:     "#FF3131",
              500:     "#FF5555",
              600:     "#FF8080",
              700:     "#FFB3B3",
              800:     "#FFD6D6",
              900:     "#FFF0F0",
              DEFAULT: "#FF3131",
              foreground: "#FFFFFF",
            },

            // Secondary — muted grey
            secondary: {
              50:      "#1A1818",
              100:     "#2A2828",
              200:     "#3D3B3B",
              300:     "#555252",
              400:     "#7A7777",
              500:     "#A09D9D",
              600:     "#C6C3C3",
              700:     "#D8D8D8",
              800:     "#EFEFEF",
              900:     "#FAFAFA",
              DEFAULT: "#A09D9D",
              foreground: "#0a0a0a",
            },

            success: {
              DEFAULT: "#22c55e",
              foreground: "#ffffff",
            },
            warning: {
              DEFAULT: "#f59e0b",
              foreground: "#000000",
            },
            danger: {
              DEFAULT: "#FF3131",
              foreground: "#ffffff",
            },
          },
        },
      },
    }),
  ],
};
