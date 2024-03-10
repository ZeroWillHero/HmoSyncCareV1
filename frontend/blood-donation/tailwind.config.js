/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#215144',
        'secondary': '#0a3a2a',
        'tertiary': '#92ddc8',
        'btn' : '#137a63'
      }
    },
  },
  plugins: [],
}

