// Generated using webpack-cli https://github.com/webpack/webpack-cli

import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import WorkboxWebpackPlugin from 'workbox-webpack-plugin';
import { Configuration } from 'webpack';
const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : 'style-loader';

const config: Configuration & { devServer: unknown } = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    open: true,
    port: 8000,
    host: 'localhost',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|mp4|jpg|jpeg|svg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        type: 'asset',
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';

    config.plugins?.push(new MiniCssExtractPlugin());

    config.plugins?.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = 'development';
  }
  return config;
};
