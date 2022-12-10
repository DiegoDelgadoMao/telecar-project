/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'FifthLight': '1px 1px 4px #8B918F',
        'second': '1px 1px 10px #52C0F8',
      },
      gridTemplateColumns: {
        'outstading': 'repeat(5, minmax(170px, 180px))',
        'allproducts': 'repeat(auto-fit, minmax(180px,200px))'
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