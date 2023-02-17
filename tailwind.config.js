/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gpt-light-gray": "#444654",
        "gpt-gray": "#343541",
        "gpt-dark-gray": "#202123 ",
        "gpt-green": "#10a37f "
      }
    }
  },
  plugins: []
}
