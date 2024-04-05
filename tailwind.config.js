/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'accent': '#d6ed17'
      },
      screens: {
        'xs': '240px'
      }
    },
    fontFamily: {
      'poppins': ['Poppins']
    },
  },
  plugins: [],
}

