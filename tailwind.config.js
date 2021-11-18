module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
      fontFamily: {
       'sans': ['ui-sans-serif','system-ui'],
       'serif': ['ui-serif','Georgia'],
       'mono': ['ui-monospace', 'SFMono-Regular'],
       'ab': ['Abel','sans-serif'],
      },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
