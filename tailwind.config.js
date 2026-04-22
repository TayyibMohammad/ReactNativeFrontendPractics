/** @type {import('tailwindcss').Config} */
module.exports = {
  // Path to your components and any other files using tailwind classes
  content: [
    "./App.tsx", 
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}