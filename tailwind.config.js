/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        mobile: {max: "727px"},
        tablet: {min: "728px", max: "1280px"},
        desktop: {min: "1281px"},
      },
    },
  },
  plugins: [],
};
