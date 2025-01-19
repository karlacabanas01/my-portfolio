/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-black": "#000000",
        "custom-pink": "#ff69b4",
        custom: {
          black: "#000000",
          white: "#ffffff",
          pink: "#ff69b4",
          gray: "#e0e0e0",
          textDark: "#333333",
        },
      },
    },
  },
  plugins: [],
};
