/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'smoky-black': '#111',
        'green-450': '#46d369',
      },
      fontFamily: {
        roboto: 'Roboto, sans-serif;',
      },
    },
  },
  plugins: [],
};
