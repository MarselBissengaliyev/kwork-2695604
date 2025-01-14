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
        },
      },
      screens: {
        phone: "360px",
        tablet: "480px",
        laptop: "769px",
        mindesk: "1024px",
        desktop: "1366px",
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
