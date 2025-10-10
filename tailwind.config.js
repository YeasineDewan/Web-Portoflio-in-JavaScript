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
          tiny: "0.75rem",   // 12px
          small: "0.875rem", // 14px
          medium: "0.9375rem", // 15px
          large: "1.125rem", // 18px
        },
        lineHeight: {
          tiny: "1rem", 
          small: "1.25rem", 
          medium: "1.5rem", 
          large: "1.75rem", 
        },
        radius: {
          small: "6px", 
          medium: "8px", 
          large: "12px", 
        },
        borderWidth: {
          small: "1px", 
          medium: "1px", 
          large: "2px", 
        },
      },
      themes: {
        light: {
          colors: {
            background: {
              DEFAULT: "#FFFFFF"
            },
            content1: {
              DEFAULT: "#FFFFFF",
              foreground: "#0F172A"
            },
            content2: {
              DEFAULT: "#f8fafc",
              foreground: "#0F172A"
            },
            content3: {
              DEFAULT: "#f1f5f9",
              foreground: "#0F172A"
            },
            content4: {
              DEFAULT: "#e2e8f0",
              foreground: "#0F172A"
            },
            divider: {
              DEFAULT: "rgba(15, 23, 42, 0.15)"
            },
            focus: {
              DEFAULT: "#2563EB"
            },
            foreground: {
              50: "#f8fafc",
              100: "#f1f5f9",
              200: "#e2e8f0",
              300: "#cbd5e1",
              400: "#94a3b8",
              500: "#64748b",
              600: "#475569",
              700: "#334155",
              800: "#1e293b",
              900: "#0f172a",
              DEFAULT: "#0F172A"
            },
            primary: {
              50: "#eff6ff",
              100: "#dbeafe",
              200: "#bfdbfe",
              300: "#93c5fd",
              400: "#60a5fa",
              500: "#3b82f6",
              600: "#2563eb",
              700: "#1d4ed8",
              800: "#1e40af",
              900: "#1e3a8a",
              DEFAULT: "#2563EB",
              foreground: "#ffffff"
            },
            secondary: {
              50: "#f0fdfa",
              100: "#ccfbf1",
              200: "#99f6e4",
              300: "#5eead4",
              400: "#2dd4bf",
              500: "#14b8a6",
              600: "#0d9488",
              700: "#0f766e",
              800: "#115e59",
              900: "#134e4a",
              DEFAULT: "#14b8a6",
              foreground: "#ffffff"
            },
            success: {
              50: "#f0fdf4",
              100: "#dcfce7",
              200: "#bbf7d0",
              300: "#86efac",
              400: "#4ade80",
              500: "#22c55e",
              600: "#16a34a",
              700: "#15803d",
              800: "#166534",
              900: "#14532d",
              DEFAULT: "#22c55e",
              foreground: "#ffffff"
            },
            warning: {
              50: "#fefce8",
              100: "#fef9c3",
              200: "#fef08a",
              300: "#fde047",
              400: "#facc15",
              500: "#eab308",
              600: "#ca8a04",
              700: "#a16207",
              800: "#854d0e",
              900: "#713f12",
              DEFAULT: "#eab308",
              foreground: "#000000"
            },
            danger: {
              50: "#fef2f2",
              100: "#fee2e2",
              200: "#fecaca",
              300: "#fca5a5",
              400: "#f87171",
              500: "#ef4444",
              600: "#dc2626",
              700: "#b91c1c",
              800: "#991b1b",
              900: "#7f1d1d",
              DEFAULT: "#dc2626",
              foreground: "#ffffff"
            }
          }
        },
        dark: {
          colors: {
            background: {
              DEFAULT: "#0F172A"
            },
            content1: {
              DEFAULT: "#1e293b",
              foreground: "#f8fafc"
            },
            content2: {
              DEFAULT: "#334155",
              foreground: "#f8fafc"
            },
            content3: {
              DEFAULT: "#475569",
              foreground: "#f8fafc"
            },
            content4: {
              DEFAULT: "#64748b",
              foreground: "#f8fafc"
            },
            divider: {
              DEFAULT: "rgba(248, 250, 252, 0.15)"
            },
            focus: {
              DEFAULT: "#3b82f6"
            },
            foreground: {
              50: "#0f172a",
              100: "#1e293b",
              200: "#334155",
              300: "#475569",
              400: "#64748b",
              500: "#94a3b8",
              600: "#cbd5e1",
              700: "#e2e8f0",
              800: "#f1f5f9",
              900: "#f8fafc",
              DEFAULT: "#f8fafc"
            },
            primary: {
              50: "#1e3a8a",
              100: "#1e40af",
              200: "#1d4ed8",
              300: "#2563eb",
              400: "#3b82f6",
              500: "#60a5fa",
              600: "#93c5fd",
              700: "#bfdbfe",
              800: "#dbeafe",
              900: "#eff6ff",
              DEFAULT: "#3b82f6",
              foreground: "#ffffff"
            },
            secondary: {
              50: "#134e4a",
              100: "#115e59",
              200: "#0f766e",
              300: "#0d9488",
              400: "#14b8a6",
              500: "#2dd4bf",
              600: "#5eead4",
              700: "#99f6e4",
              800: "#ccfbf1",
              900: "#f0fdfa",
              DEFAULT: "#14b8a6",
              foreground: "#ffffff"
            },
            success: {
              50: "#14532d",
              100: "#166534",
              200: "#15803d",
              300: "#16a34a",
              400: "#22c55e",
              500: "#4ade80",
              600: "#86efac",
              700: "#bbf7d0",
              800: "#dcfce7",
              900: "#f0fdf4",
              DEFAULT: "#22c55e",
              foreground: "#ffffff"
            },
            warning: {
              50: "#713f12",
              100: "#854d0e",
              200: "#a16207",
              300: "#ca8a04",
              400: "#eab308",
              500: "#facc15",
              600: "#fde047",
              700: "#fef08a",
              800: "#fef9c3",
              900: "#fefce8",
              DEFAULT: "#eab308",
              foreground: "#000000"
            },
            danger: {
              50: "#7f1d1d",
              100: "#991b1b",
              200: "#b91c1c",
              300: "#dc2626",
              400: "#ef4444",
              500: "#f87171",
              600: "#fca5a5",
              700: "#fecaca",
              800: "#fee2e2",
              900: "#fef2f2",
              DEFAULT: "#dc2626",
              foreground: "#ffffff"
            }
          }
        }
      }
    })
  ]
}
