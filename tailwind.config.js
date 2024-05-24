/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        light: 'hsl(148, 38%, 91%)',
        dark: 'hsl(169, 82%, 27%)',
        error: 'hsl(0, 66%, 56%)'

      }
    },
  },
  plugins: [],
}
