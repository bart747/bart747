const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./js/main.js",
    output: {
        path: "./js/dist",
        filename: "bundle.js"
    },
    module: {
      preLoaders: [
        {
          test: /\.js$/, // include .js files
          exclude: [/node_modules/, /plugins/],// exclude any and all files in the node_modules folder
          loader: "jshint-loader",
        }
      ],
      postLoaders: [
        {
          test: /\.js$/, // include .js files
          exclude: /node_modules/, // exclude any and all files in the node_modules folder

          loader: 'babel', // 'babel-loader' is also a legal name to reference
          query: {
            presets: ['es2015']
          }
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style-loader', ['css-loader?minimize', 'postcss-loader', 'sass-loader'])
        }
      ]
    },
    jshint: {
      esversion: 6,
      // Display JSHint messages as webpack errors
      emitErrors: true,

      // fail the build on JSHInt errors
      failOnHint: false,
    },
    postcss: function () {
      return [
        require('autoprefixer')({ browsers: ['last 2 versions'] })
      ];
    },
    plugins: [
      new ExtractTextPlugin("../../css/bundle.css"),
      new webpack.optimize.UglifyJsPlugin({ minimize: true })
    ]
}
