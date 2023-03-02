/** @type {import('tailwindcss').Config} */
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
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
