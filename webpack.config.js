module.exports = {
    entry: "./js/main.js",
    output: {
        path: "./js/dist",
        filename: "bundle.js"
    },
    module: {
      postLoaders: [
        {
          test: /\.js$/, // include .js files
          exclude: /node_modules/, // exclude any and all files in the node_modules folder
          loader: "jshint-loader",
          loader: 'babel', // 'babel-loader' is also a legal name to reference
          query: {
            presets: ['es2015']
          }
        }
      ]
    },
    jshint: {
      // Display JSHint messages as webpack errors
      emitErrors: true,

      // fail the build on JSHInt errors
      failOnHint: false,
    }
}
