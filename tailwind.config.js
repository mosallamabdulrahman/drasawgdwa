/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js", "./*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          900: "#287B3F",
          800: "#1f6533",
          600: "#77AA42",
          400: "#61CE70",
          50: "#F2F8F3",
          100: "#E3F0E6",
        },
        orange: {
          DEFAULT: "#f5821f",
          hover: "#e07316",
        },
        ink: "#1a1a1a",
      },
      fontFamily: {
        heading: ["Cairo", "sans-serif"],
        body: ["Cairo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
