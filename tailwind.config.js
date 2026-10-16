/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#1A1A1A",
        secondary:"#F5F5F5",
        accent:"#D4AF37",
        light:"#FFFFFF",
      },
      fontFamily: {
        sans: ['"Barlow"', 'sans-serif'],
        heading: ['"Jost"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
