const production = !process.env.ROLLUP_WATCH;

module.exports = {
  plugins: [
    require("@tailwindcss/jit"),
    require("postcss-import"),
    ...(production
      ? [require("autoprefixer"), require("cssnano")({ preset: "default" })]
      : []),
  ],
};