/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-black": "#000000",
        "custom-pink": "#ff69b4",
      },
    },
  },
  plugins: [],
};
