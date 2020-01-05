const postcssPresetEnv = require(`postcss-preset-env`);
const postcssNested = require(`postcss-nested`);

module.exports = () => ({
  syntax: 'postcss-scss',
  plugins: [
    postcssPresetEnv({
      stage: 0
    }),
    postcssNested
  ]
});
