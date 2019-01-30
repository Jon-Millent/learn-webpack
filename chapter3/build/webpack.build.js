const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')


module.exports = {
  mode:'production',
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../dist')
  },
  plugins: [
    new CleanWebpackPlugin(['./dist']),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    // new BundleAnalyzerPlugin(),
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
