import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: "#melano-prefab",
  theme: {
    extend: {
      colors: {
        melano: {
          bg: "#070708",
          surface: "#0f0f12",
          elevated: "#16161a",
          border: "rgba(255,255,255,0.07)",
          gold: "#d4b878",
          "gold-muted": "#a89562",
          muted: "#9c9890",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
      },
      boxShadow: {
        lift: "0 24px 80px rgba(0,0,0,0.45)",
        card: "0 18px 60px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        "gold-line":
          "linear-gradient(90deg, transparent, rgba(212,184,120,0.35), transparent)",
      },
    },
  },
  plugins: [],
} satisfies Config;
