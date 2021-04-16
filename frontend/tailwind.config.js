const production = !process.env.ROLLUP_WATCH;

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
],
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production,
  },
};