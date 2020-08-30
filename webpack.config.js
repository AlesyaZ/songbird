const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    mode: 'development',

  module: {
    rules: [
        {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
        },
        {
        test: /\.(jpg|png|jpeg|gif|ico)$/,
        use: [{ 
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                    name: '[name]-[sha1:hash:7].[ext]'
                }
            }
        ]
        },
        {
        test: /\.mp3$/,
        use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
            test: /\.(ttf|otf|eot|woff|woff2)$/,
            use: [{ 
                loader: 'file-loader',
                options: {
                    outputPath: 'fonts',
                    name: '[name].[ext]'
                }
            }
        ]},
        {
            test: /\.(css)$/,
            use: [ MiniCssExtractPlugin.loader,'css-loader']
        },
        {
            test: /\.(scss)$/,
            use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
        template: 'index.html'
    }),
    new MiniCssExtractPlugin({
        filename: 'main-[hash:8].css'
    })
  ],

  devServer: {
      open: true,
  }
};

module.exports = config;