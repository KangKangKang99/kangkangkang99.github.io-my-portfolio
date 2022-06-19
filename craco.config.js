/* craco.config.js */
// eslint-disable-next-line quotes
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '#': path.resolve(__dirname, 'src/'),
      '#Components': path.resolve(__dirname, 'src/components'),
      '#Pages': path.resolve(__dirname, 'src/pages'),
      '#Stores': path.resolve(__dirname, 'src/stores'),
      '#Configs': path.resolve(__dirname, 'src/configs'),
      '#Layouts': path.resolve(__dirname, 'src/layouts'),
    }
  },
};