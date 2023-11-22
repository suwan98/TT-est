/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        dote: ["Dote"],
        alice: ["Elice DX Neolli"],
      },
      screens: {
        mobile: {max: "727px"},
        tablet: {min: "728px", max: "1280px"},
        desktop: {min: "1281px"},
      },
    },
  },
  plugins: [],
};
