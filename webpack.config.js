var path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'xwing-data-module.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|xwing-data)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }, {
      test: /xwing\-data\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'file-loader'
      }
    }]
  }
}