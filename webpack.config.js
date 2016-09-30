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
          exclude: /node_modules/, // exclude any and all files in the node_modules folder
          exclude: /plugins/,
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
        }
      ]
    },
    jshint: {
      esversion: 6,
      // Display JSHint messages as webpack errors
      emitErrors: true,

      // fail the build on JSHInt errors
      failOnHint: false,
    }
}
