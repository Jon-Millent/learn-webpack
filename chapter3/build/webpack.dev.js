const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')


module.exports = {
  mode:'development',
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader" // 转化需要的loader
          // options选项配置在: .babelrc
          // options: {
          //   ...
          // }
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      cacheGroups: {
        // 注意: priority属性
        // 其次: 打包业务中公共代码
        common: {
          name: "common",
          chunks: "all",
          minSize: 1,
          priority: 0
        },
        // 首先: 打包node_modules中的文件
        vendor: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          priority: 10
        }
      }
    }
  }
}
