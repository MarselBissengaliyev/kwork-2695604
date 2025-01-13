/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  prefix: "tw-",
  theme: {
    twcontainer: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1540px",
      },
    },
    extend: {
      aspectRatio: {
        "4/3": "4/3",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
