/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        customGray: '#1c3c4c',
        yellow: '#ebc98c',
        purple: '#102533',
    },
  },
  },
  plugins: [],
}
