module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkorange: '#FF4500',
        black: '#000000',
        white: '#FFFFFF',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}