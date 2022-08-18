/** @type {import('tailwindcss').Config} */
module.exports = {
 
  theme: {
    extend: {
      colors: {
        grubHubOrange: '#FF8000',
        ffBlue: '#0070EB'
      }
    },
  },
  plugins: [require("daisyui")],
}
