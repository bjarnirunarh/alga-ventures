import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1C5A7D",     // Ocean Teal
          light: "#3C7CA1",
          dark: "#143D5A",
        },
        secondary: {
          DEFAULT: "#FF6F61",     // Coral
          light: "#FFA08F",
          dark: "#CC584E",
        },
        neutral: {
          100: "#F9FAFB",
          900: "#111111",
        },
      },
      fontFamily: {
        sans: ["'DM Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
