import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#1F1F22",
          // "100": "#1F1F22"
        },
        secondary: {
          DEFAULT: "#333236",
          50: "#f4f4f4",
          100: "#d6d6d7",
          200: "#adadaf",
          300: "#858486",
          400: "#5c5b5e",
          500: "#333236",
          600: "#29282b",
          700: "#1f1e20",
          800: "#141416",
          900: "#0a0a0b",
        },
        accent: {
          DEFAULT: "#00a4cd",
          100: "#ccedf5",
          200: "#99dbeb",
          300: "#66c8e1",
          400: "#33b6d7",
          500: "#00a4cd",
          600: "#0083a4",
          700: "#00627b",
          800: "#004252",
          900: "#002129",
        },
      },
      fontFamily: {
        nunito: "var(--font-nunito)",
        syncopate: "var(--font-syncopate)",
      },
    },
  },
  plugins: [],
} satisfies Config;
