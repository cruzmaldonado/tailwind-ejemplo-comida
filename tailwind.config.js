/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary': '#f3c615',
        'secondary':'#353535',

      },
      height:{
        '80':'20rem',
        '100':'25rem'

      }
    },
  },
  variant:{
    opacity:['responsive','hover','focus','disble','shadow']
  },
  plugins: [],
}