const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
  entry: {
    main: './example/src/main',
    vendor: './example/src/vendor',
    polyfills: './example/src/polyfills'
  },
  devtool: 'source-map',
  output: {
    path: 'example/dist/',
    filename: 'bundle.js'
    //,publicPath: 'example/dist/'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: /\.d\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.(html|css)$/,
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false
    }),
    new CommonsChunkPlugin({
      names: ['vendor', 'polyfills'],
      filename: '[name].js'
    })
  ]
};