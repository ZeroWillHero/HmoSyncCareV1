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
        'secondary': '#26686a',
        'tertiary': '#36997f',
      }
    },
  },
  plugins: [],
}

