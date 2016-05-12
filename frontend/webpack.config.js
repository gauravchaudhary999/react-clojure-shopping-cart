
//var webpack = require('webpack');

var BUILD_DIR = './dist';
var APP_DIR = './app';

var config = {
  entry: APP_DIR + '/app.jsx',
  output: {
    path: BUILD_DIR,
    publicPath: '/js/',
    filename: './js/bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;