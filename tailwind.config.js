/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      width: '50px',
    },
    colors: {
      black: `#000000`,
      orange: '#E69A28',
      tan: `#FDF1DC`,
    },
    fontFamily: {
      serif: ['var(--font-ebgaramond)', ...fontFamily.serif],
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
