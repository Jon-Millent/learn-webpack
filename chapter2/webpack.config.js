

const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode:'production',
  entry: {
    index: './src/index/index.js',
    news: './src/news/index.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  plugins: [
    new CleanWebpackPlugin(['./dist']),
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
