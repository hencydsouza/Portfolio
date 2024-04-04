/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'accent': '#adff2f'
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

