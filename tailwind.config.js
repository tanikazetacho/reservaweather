/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cold-blue': '#25AFFF',
        'hot-red': '#bd1816'
      },
    },
  },
  plugins: [],
};