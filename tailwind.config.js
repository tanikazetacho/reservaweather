/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cold-blue': '#25AFFF',
        'hot-red': '#bd1816',
        'selected-green': '#7cb244'
      },
      spacing: {
        '5px': '5px',
      }
    },
  },
  plugins: [],
};