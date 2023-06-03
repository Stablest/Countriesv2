/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      "dark-blue": "hsl(209,23%,22%)",
      "dark-mode-background": "hsl(207, 26%, 17%)",
      "light-mode-text": "hsl(200, 15%, 8%)",
      "light-mode-input": "hsl(0, 0%, 52%)",
      "light-mode-background": "hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%)",
      black: "#000000",
    },
    screens: {
      sm: "640px",
      xl: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
