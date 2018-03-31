const path = require('path')
const webpack = require('webpack')
const WebpackNotifierPlugin = require('webpack-notifier')
// const ExtractTextPlugin = require("extract-text-webpack-plugin")

const HOST = process.env.HOST || 'localhost'
const NODE_ENV = process.env.NODE_ENV || 'development'
const SERVER_HOST = process.env.SERVER_HOST || 'http://localhost:3001'

const ENTRY = (NODE_ENV == 'development')
  ? [
    `webpack-dev-server/client?http://${HOST}:8080/`,
    'webpack/hot/dev-server',
    'babel-polyfill',
    './src/frontend/index',
  ]
  : [
    'babel-polyfill',
    './src/frontend/index',
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
    // new ExtractTextPlugin('./main.css', { allChunks: true }),
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: [path.resolve(__dirname, 'src')],
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        plugins: ['transform-runtime'],
        loaders: ['react-hot', 'babel-loader'],
        include: [path.resolve(__dirname, 'src')],
      },
      {
        test: /\.(scss|css)$/,
        loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
        options: {
          limit: 15000,
          name: '[name].[ext]',
        },
      },
    ],
  },

  resolve: {
    root: [
      path.resolve(__dirname, 'src/shared'),
      path.resolve(__dirname, 'src/frontend'),      
    ],
    extensions: ['', '.js', '.jsx'],
  },

  devServer: {
    hot: true,
    port: 8080,
    host: HOST,
    contentBase: `${__dirname}/public`,
    historyApiFallback: true,
    // proxy: { '**': 'http://localhost:3001' },
  },
}
