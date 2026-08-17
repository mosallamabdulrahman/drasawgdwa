/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js", "./*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          900: "#287b3f",
          800: "#1f6332",
          600: "#77aa42",
          400: "#61ce70",
          200: "#c2e5ca",
          100: "#e3f0e6",
          50: "#f2f8f3",
          pale: "#eaf7ee",
          dark: "#1b5e2f",
        },
        'drasa-green': '#287b3f',
        'drasa-greenDark': '#1f6332',
        'drasa-greenPale': '#eaf7ee',
        orange: {
          DEFAULT: "#f5821f",
          hover: "#e07316",
        },
        ink: "#1a1a1a",
      },
      boxShadow: {
        soft: "0 10px 35px -5px rgba(0, 0, 0, 0.07), 0 4px 14px -3px rgba(0, 0, 0, 0.04)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)",
      },
      fontFamily: {
        heading: ["Cairo", "sans-serif"],
        body: ["Cairo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
