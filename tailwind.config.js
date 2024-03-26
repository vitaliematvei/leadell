/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        NicoMoji: ["NicoMoji", "sans-serif"],
        Matter: ["Matter", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        GalleryModern: ["GalleryModern", "sans-serif"],
        UltraSolar: ["UltraSolar", "sans-serif"],
      },
    },
  },
  plugins: [],
};
