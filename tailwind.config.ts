import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],

  theme: {
    extend: {
      colors: {
        navy: "#071536",
        brand: "#071536",
        gold: "#B28B36",
        white: "#FFFFFF",
        soft: "#F3F6FA",
        light: "#F3F6FA",
        ink: "#374151",
        muted: "#374151",
        border: "#DDE3EC"
      },

      fontFamily: {
        sans: ["var(--font-dm)", "sans-serif"],
        display: ["var(--font-manrope)", "sans-serif"]
      },

      transitionDuration: {
        400: "400ms"
      }
    }
  },

  plugins: []
};

export default config;