const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: require.resolve('babel-loader'),
        query: {
          presets: ['es2015','stage-0','react'],
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: require.resolve('eslint-loader'),
        options: {
          fix: true,
        }
      }
    ]
  },
};
