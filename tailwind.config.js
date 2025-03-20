/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-bg': '#F5F7FA',
        'teal-accent': '#2E86AB',
        'coral': '#FF6F61',
        'navy': '#2A2E43',
        'mustard': '#FFD166',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};