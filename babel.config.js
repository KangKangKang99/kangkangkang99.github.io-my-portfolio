module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          cwd: 'babelrc',
          extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
          alias: {
            '#Pages' : './src/pages',
            '#Components': './src/components',
            '#Stores': './scr/stores',
            '#Configs': './src/configs',
            '#Layouts': './src/layouts',
            '#Locales': './src/locales',
            '#Utils': './src/utils',
          }
        }
      ],
      'jest-hoist'
    ]
  };