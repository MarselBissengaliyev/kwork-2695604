/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  prefix: "tw-",
  theme: {
    container: {
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
