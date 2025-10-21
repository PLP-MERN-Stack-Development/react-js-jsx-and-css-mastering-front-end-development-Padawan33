// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',  
  content: [
    "./index.html",
    // Must include the wildcard path for JSX files in the src folder:
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}