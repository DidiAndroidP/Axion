/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        axion: {
          blue: 'rgb(0, 112, 243)',
          purple: '#7928ca',
          orange: '#ff4d4d',
          dark: '#0f172a',
        },
      },
    },
  },
  plugins: [],
}