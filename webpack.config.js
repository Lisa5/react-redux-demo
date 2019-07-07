var webpack = require('webpack');
var path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../build/'),
    filename: '[name].js',
    chunkFilename: '[name].bundle.[chunkHash:6].js',
    publicPath: ''
  },
  devServer: {
    inline: true,
    port: 3002,
    publicPath: 'http://localhost:3002/',
  },
  module: {
    // 解决问题：Critical dependency: require function is used in a way 
    // in which dependencies cannot be statically extracted
    unknownContextCritical: false,
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 50000,
              outputPath: './asset/images',
              name: '[name].[hash: 5].[ext]',
              pulbicPath: './build/asset/images'
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|wav|mp3|mp4|svg|woff|woff2)$/,
        use: `${require.resolve(
          'file-loader'
        )}?name=fonts/[name].[hash:6].[ext]`
      },
      {
        test: /\.css$/,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     // you can specify a publicPath here
          //     // by default it uses publicPath in webpackOptions.output
          //     publicPath: '../',
          //     hmr: process.env.NODE_ENV === 'development',
          //   },
          // },
          'css-loader',
        ],
        // use: ExtractTextPlugin.extract({
        //   fallback: 'style-loader',
        //   use: [
        //     {
        //       loader: 'css-loader',
        //       options: {
        //         // minimize: env === 'production'
        //       }
        //     },
        //     {
        //       loader: require.resolve('postcss-loader'),
        //       options: {
        //         plugins: () => [
        //           // require('postcss-import')({
        //           //   path: [Utils.resolveNodeModulesPath()]
        //           // }),
        //           require('postcss-mixins')(),
        //           require('postcss-nested')(),
        //           // require('postcss-cssnext')({
        //           //   browsers: AUTOPREFIXER_BROWSERS
        //           // })
        //         ]
        //       }
        //     }
        //   ]
        // })
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',  // HTML 模版文件所在的文件路径
      filename: `index.html`,    // 输出的 HTML 的文件名称
      chunk: ['./src/index.js']
    })
  ]
}