/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./stories/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          DEFAULT: '#44a7e0'
        }
      }
    },
  },
  plugins: [],
}
