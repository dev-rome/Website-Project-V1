/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        zwodrei: ["zwodrei Bold", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "page-background":
          "linear-gradient(360deg, rgba(170, 210, 233, 0.73) 0%, rgba(174, 207, 226, 0.83) 18.23%, rgba(188, 231, 255, 0.62) 37.8%, rgba(193, 228, 234, 0.948554) 56.45%, #C9ECF1 67.17%, rgba(203, 237, 237, 0.78) 78.74%, rgba(204, 227, 227, 0.61) 89.45%, #E1E8E8 100%);",
        "hero-background":
          "linear-gradient(0deg, rgba(63, 106, 96, 0.8), rgba(63, 106, 96, 0.2)), url('/images/forest-front.png'), url('/images/forest-front.png')",
        "hover-gradient":
          "linear-gradient(90deg, #003A5A 0%, #005382 42.71%, #00934C 55.73%, #00522B 100%)",
      },
    },
  },
  plugins: [],
};
