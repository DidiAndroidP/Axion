/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        axion: {
          blue: '#0070f3',
          purple: '#7928ca',
          orange: '#ff4d4d',
          dark: '#0f172a',
        },
      },
    },
  },
  plugins: [],
}