// webpack.config.js
const HtmlPlugin = require('html-webpack-plugin')
module.exports = {
  // Tell webpack to start bundling our app at app/index.js
  entry: './src',
  // Output our app to the dist/ directory
  output: {
  	path: __dirname + '/dist',
    filename: 'index.js'
  },
  // Emit source maps so we can debug our code in the browser
  devtool: 'source-map',
  // Tell webpack to run our source code through Babel
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.css$/,  loaders: ['style-loader', 'css-loader']
    }]
  },
  // Since Webpack only understands JavaScript, we need to
  // add a plugin to tell it how to handle html files.   
  plugins: [
    // Configure HtmlPlugin to use our own index.html file
    // as a template.
    // Check out https://github.com/jantimon/html-webpack-plugin
    // for the full list of options.
    new HtmlPlugin({
      filename: 'index.html',
      template: 'public/index.html'
    })
  ]
}