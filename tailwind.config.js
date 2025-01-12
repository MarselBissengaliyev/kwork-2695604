/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  prefix: 'tw-',
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4/3',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
