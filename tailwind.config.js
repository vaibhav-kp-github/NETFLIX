/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ['group-focus']
    }
  },
  plugins: [],
}

