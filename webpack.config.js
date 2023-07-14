const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  entry: {
    resume: './src/pages/Resume/index.tsx',
    blog: './src/pages/Blog/index.tsx',
    article: './src/pages/Article/index.tsx',
    library: './src/pages/Library/index.tsx',
  },
  devServer: {

    static: {
      directory: path.join(__dirname, '/mobile'),
    },
    compress: true,
    host: '0.0.0.0',
    port: 8000
  },
  devtool: 'source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ["@babel/preset-env"] }
      },
      {
        test: /\.(svg|png|jpe?g|gif|woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(css|less)$/,
        use: [{ loader: 'style-loader' }, {
          loader: 'css-loader',
          options: {
            modules: {
              auto: true,
              localIdentName: "[path][name]__[local]--[hash:base64:5]",
            },
          }
        }, {
          loader: 'less-loader',
          options: {
            lessOptions: {
              paths: [path.resolve(__dirname, 'node_modules')],
            },
          },
        }]
      }

    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      title: 'resume',
      filename: 'resume/index.html',
      chunks: ['resume'],
      templateContent: `<html><body><div id='root'></div></body></html>`
    }),
    new htmlWebpackPlugin({
      title: 'blog',
      filename: 'blog/index.html',
      chunks: ['blog'],
      templateContent: `<html><body><div id='root'></div></body></html>`
    }),
    new htmlWebpackPlugin({
      title: 'article',
      filename: 'article/index.html',
      chunks: ['article'],
      templateContent: `<html><body><div id='root'></div></body></html>`
    }),
    new htmlWebpackPlugin({
      title: 'library',
      filename: 'library/index.html',
      chunks: ['library'],
      templateContent: `<html><body><div id='root'></div></body></html>`
    })
  ],
  resolve: {
    alias: {
      "@": resolve('src')
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  output: {
    filename: '[name]/index.js',
    asyncChunks: true,
    path: __dirname + '/mobile'
  }
}