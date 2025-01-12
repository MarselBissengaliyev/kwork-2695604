module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-reporter': {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
}
