
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#2563eb', // Primary
          red: '#dc2626',  // Accent
          dark: '#1e293b', // Text
          gray: '#f3f4f6', // Backgrounds
        }
      },
    },
  },
  plugins: [],
}
