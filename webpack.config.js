var path = require('path')
var precss = require('precss');
var webpack = require('webpack')
var autoprefixer = require('autoprefixer');
var WebpackNotifierPlugin = require('webpack-notifier');

const NODE_ENV = process.env.NODE_ENV || 'development'
const SERVER_HOST = process.env.SERVER_HOST || 'http://localhost:3001'

const ENTRY = (NODE_ENV == 'development')
  ? [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/dev-server',
    'babel-polyfill',
    './src/frontend/app/index',
  ]
  : [
    'babel-polyfill',
    './src/frontend/app/index',
  ]

module.exports = {
  // devtool: NODE_ENV == 'development' ? 'cheap-module-eval-source-map' : null,
  devtool: NODE_ENV == 'development' ? '#cheap-module-eval-source-map' : null,
  entry: ENTRY,
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    // publicPath: '/public/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'NODE_ENV' : JSON.stringify(NODE_ENV),
      'SERVER_HOST' : JSON.stringify(SERVER_HOST),
    }),
    new WebpackNotifierPlugin({title: 'Webpack!', alwaysNotify: true}),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint'],
        include: [path.resolve(__dirname, 'src')],
      },
    ],
    loaders: [
      {
        loaders: ['react-hot', 'babel-loader'],
        include: [path.resolve(__dirname, 'src')],
        test: /\.js$/,
        plugins: ['transform-runtime'],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader',
      },
    ],
  },
  postcss: function () {
    return [autoprefixer, precss];
  },

  devServer: {
    hot: true,
    port: 8080,
    host: 'localhost',
    contentBase: `${__dirname}/public`,
    // proxy: { '**': 'http://localhost:3001' },
  },
}
