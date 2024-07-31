// tailwind.config.js
module.exports = {
  content: [
    "./public/*.html",
    "./src/**/*.js",      // Adjusted to capture JS files in src if any
    "./src/**/*.css",     // Ensure it captures CSS files in src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
