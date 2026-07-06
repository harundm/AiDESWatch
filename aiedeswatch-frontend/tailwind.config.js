/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "t800": "#115E59",
        "primary": "#00685f",
        "risk-low": "#16A34A",
        "risk-critical": "#DC2626",
        "risk-high": "#EA580C",
        "risk-elevated": "#D97706",
        "risk-moderate": "#65A30D",
        "surface": "#F8FAFC",
        "surface-100": "#F1F5F9",
        "on-surface": "#131b2e",
        "on-surface-variant": "#3d4947",
        "outline": "#6d7a77",
        "outline-variant": "#bcc9c6",
        "error-container": "#ffdad6",
        "error": "#ba1a1a",
        "t950": "#042F2E",
        "t700": "#0F766E",
        "t50": "#F0FDFA",
        "t100": "#CCFBF1",
        "border": "#E2E8F0"
      },
      spacing: {
        "sp-16": "64px", "sp-12": "48px", "sp-10": "40px",
        "sp-8": "32px", "sp-6": "24px", "sp-5": "20px",
        "sp-4": "16px", "sp-3": "12px", "sp-2": "8px",
        "margin": "24px", "max-width": "1280px", "gutter": "24px"
      },
      fontFamily: {
        "headline-1": ["Sora"],
        "headline-2": ["Sora"],
        "body-md": ["DM Sans"],
        "data-mono": ["JetBrains Mono"]
      }
    },
  },
  plugins: [],
}