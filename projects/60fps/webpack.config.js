module.exports = {
    entry: "./js/myscripts/main.js",
    output: {
        path: "./js/dist",
        filename: "bundle.js"
    },
    module: {
      postLoaders: [
        {
          test: /\.js$/, // include .js files
          exclude: /node_modules/, // exclude any and all files in the node_modules folder    
          loader: "jshint-loader"
         }
      ],
      jshint: {
        // Display JSHint messages as webpack errors
        emitErrors: true,

        // fail the build on JSHInt errors
        failOnHint: false,
      }
    }
};
