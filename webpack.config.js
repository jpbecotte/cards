module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  output: {
    path: __dirname + '/dist',
    library: 'Cards',
    libraryTarget: 'var',
    /*publicPath: '/',*/
    filename: 'cards.js'
  },
  devServer: {
    contentBase: './dist'
  }
};
