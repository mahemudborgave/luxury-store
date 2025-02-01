/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        times: ['Times New Roman', 'serif'],
      },
    },
  },
  safelist: [],
  plugins: [require('tailwind-scrollbar')],
}

