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
          laptop: "1024px",
          tablet: "708px", // Для разрешения 768px
          phone: "280px", // Для разрешения 320px
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
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
