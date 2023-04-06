/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "black-grayish":"hsl(0, 0%, 8%)",
        "goldish":"hsl(24, 56%, 63%)",
        "darkish-grey":"hsl(0, 0%, 27%)",
      },
      fontFamily: {
        "big-shoulders": ['Big Shoulders Display', 'cursive'],
        "outfit": ['Outfit'],
      }
    },
  },
  plugins: [],
}