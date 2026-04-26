import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"]
      },
      colors: {
        primary: "#052d6d",
        accent: "#fcb005",
        light: "#ffffff"
      },
      boxShadow: {
        premium: "0 20px 60px rgba(5, 45, 109, 0.15)"
      }
    }
  },
  plugins: []
};

export default config;
