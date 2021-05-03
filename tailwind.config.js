module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    scale: { 105: "2.05", 600: "5" },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
