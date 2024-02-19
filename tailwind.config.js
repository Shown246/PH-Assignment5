/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        'primaryGreen': '#1DD100',
      },
      fontFamily: {
        raleway: 'Raleway',
        inter: 'Inter',
      }
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
}

