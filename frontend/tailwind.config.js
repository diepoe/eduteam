const production = !process.env.ROLLUP_WATCH;

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  plugins: [
    require('@tailwindcss/typography'),
],
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production,
  },
};