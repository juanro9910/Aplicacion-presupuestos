module.exports = {
    entry: './public/js/app.js',
    output: {
      filename: 'bundle.js',
      path: __dirname + '/dist'
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
    }
  };
  