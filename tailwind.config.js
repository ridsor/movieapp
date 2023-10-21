/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        one: "#EB507F",
        two: "#FE024E",
      },
    },
  },
  plugins: [],
};
