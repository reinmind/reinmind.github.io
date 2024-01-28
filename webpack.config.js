const path = require('path');
module.exports = {
  mode: 'development',
  entry: "./dist/index.html",
  watch: true,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  devtool: 'source-map',
  devServer: {
    compress: true,
    host: 'localhost',
    port: 3000,
    hot: true,
    open: true
  }
};