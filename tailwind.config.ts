import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      colors: {
        bg: {
          base: "#05070d",
          elev: "#0b0f18",
          card: "#0f1421"
        },
        accent: {
          blue: "#4c8bff",
          glow: "#2a5cff"
        },
        border: {
          subtle: "rgba(255,255,255,0.08)",
          strong: "rgba(255,255,255,0.14)"
        }
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(76,139,255,0.22), transparent 70%)",
        "hero-vignette":
          "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(76,139,255,0.15), transparent 75%)",
        "noise":
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.035 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")"
      },
      boxShadow: {
        "pill": "inset 0 1px 0 rgba(255,255,255,0.08), 0 1px 2px rgba(0,0,0,0.4)",
        "cta": "0 10px 40px -10px rgba(76,139,255,0.45), inset 0 1px 0 rgba(255,255,255,0.1)",
        "card": "0 20px 60px -20px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.04)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "float": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" }
        },
        "pulse-glow": {
          "0%,100%": { opacity: "0.7" },
          "50%": { opacity: "1" }
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
