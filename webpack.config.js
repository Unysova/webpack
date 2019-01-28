const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: 'pug-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(jpe?g|png|ico|gif|svg)$/i,
        use: [{
                loader: "img-loader"
            }, 
            {
                loader: "file-loader",
                options: {
                    outputPath: "img/",
                    name: '[name].[ext]'
                }
            }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: "file-loader",
          options: {
            outputPath: "fonts/",
            name: '[name].[ext]'
          }
        }]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/templates/index.pug'
    }),
    new ExtractTextPlugin('style.css'),
    new webpack.ProvidePlugin({
    '$': 'jquery'})
  ]
};
