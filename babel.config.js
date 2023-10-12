module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'module:react-native-dotenv',
      [
        'module-resolver',
        {
          extensions: [
            '.ios.js',
            '.android.js',
            '.ios.jsx',
            '.android.jsx',
            '.js',
            '.jsx',
            '.json',
            '.ts',
            '.tsx'
          ],
          root: ['.'],
          alias: {
            '@app-screens': './src/screens/',
            '@app-ui': './src/ui/'
          }
        }
      ]
    ]
  };
};
