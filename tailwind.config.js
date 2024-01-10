/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
    colors: {
      primary: "#343434",
      secondary: "#FF971D",
      gray: "#B6B6B6",
      white: "#fff",
    },
    extend: {},
  },
  plugins: [],
};
