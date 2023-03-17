/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "sans-serif": "Roboto",
      },
      backgroundImage: {
        "hover-gradient":
          "linear-gradient(90deg, #003A5A 0%, #005382 42.71%, #00934C 55.73%, #00522B 100%)",
      },
    },
  },
  plugins: [],
};
