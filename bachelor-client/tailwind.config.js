/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        28: "10rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
