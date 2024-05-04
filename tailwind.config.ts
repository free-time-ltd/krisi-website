import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: "var(--font-cormorant)",
        text: "var(--font-inter)",
      },
      lineHeight: {
        tighter: "1.167",
      },
      colors: {
        accent: "#00af7b",
        primary: "#6C5CE7",
        secondary: "#00B894",
        success: "#2ECC71",
        danger: "#FF4757",
        info: "#3498DB",
      },
      backgroundColor: {
        primary: "#1a1c1e",
      },
      fill: (theme) => theme("colors"),
    },
  },
  plugins: [],
};
export default config;
