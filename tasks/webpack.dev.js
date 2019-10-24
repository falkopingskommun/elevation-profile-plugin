const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  output: {
    path: `/build/js/`,
    publicPath: '/build/js',
    filename: 'ep.js',
    libraryTarget: 'var',
    libraryExport: 'default',
    library: 'ElevationProfile'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },            
          {
            loader: "css-loader"
          },          
          {
            loader: "sass-loader"     
          }
        ]
      }      
    ]
  },  
  devServer: {
    contentBase: './',
    port: 9008
  }
});
