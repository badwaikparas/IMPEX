/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'volaroid': ['Volaroid san', 'sans-serif'],
      'sancoale': ['Sancoale', 'sans-serif'],
      'cholla': ['ChollaSlabThin', 'sans-serif']
    }
  },
  plugins: [],
}