/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      'xs' : { 'min' : '0px'},
      'sm': {'min': '330px'},
      'md': { 'min' : '768px'},
      'lg': { 'min' : '1024px'},
      'xl': { 'min' : '1280px'},
      '2xl': { 'min' : '1536px'},
      '3xl': { 'min' : '1960px'},
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}