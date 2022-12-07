/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        'FifthLight': '1px 1px 4px #8B918F',
        'second': '1px 1px 4px #52C0F8',
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      first: '#F5AE2D',
      second: '#52C0F8',
      third: '#6D7EB2',
      fourth: '#FFFFFF',
      fifth: '#191919',
      fifthLight: '#8B918F',
      background: '#F0F9FF'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}