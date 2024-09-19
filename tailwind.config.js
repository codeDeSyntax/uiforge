/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#181818',
        secondary:'#272727',
        accent:'#d3f4f8',
      }
    },
  },
  plugins: [],
}