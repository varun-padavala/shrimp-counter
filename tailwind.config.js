/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Manrope', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        ink: '#090b18',
        violet: '#9565ff',
        lilac: '#b99cff',
        sky: '#668cff',
      },
      boxShadow: {
        glow: '0 0 55px rgba(149, 101, 255, .22)',
      },
    },
  },
  plugins: [],
}
