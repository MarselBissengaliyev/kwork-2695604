/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  prefix: "tw-",
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          "2xl": "1540px",
          mindesk: "1340px",
          // laptop: "1024px",
          // tablet: "708px", // Для разрешения 768px
          // minitablet: "460px",
          // phone: "280px", // Для разрешения 320px
        },
      },
      screens: {
        phone: "360px",
        tablet: "480px",
        minilaptop: "666px",
        laptop: "769px",
        mindesk: "1024px",
        desktop: "1366px",
        xl: "1500px",
        xxl: "1920px",
      },
      aspectRatio: {
        "4/3": "4/3",
      },
      colors: {
        blue: {
          500: '#3E73CF',
          light: '#6C99D8',
        },
        green: {
          500: '#3ECF5C',
          light: '#6BD68F',
        },
        red: {
          500: '#E3433A',
          light: '#E3433A',
        },
        gray: {
          500:'#DBDBDB',
        }
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
