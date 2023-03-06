/* eslint-disable @typescript-eslint/no-require-imports */
const { resolve } =  require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const packageName = require('./package.json').name;
const ENV = {
  PUBLIC_PATH: '/',
};

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  target: ['web', 'es5'],
  output: {
    clean: true,
    publicPath: ENV.PUBLIC_PATH,
    library: `${packageName}-[name]`,
    libraryTarget: 'umd',
    chunkLoadingGlobal: `webpackChunkwebpack_${packageName}`,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'axios': resolve(__dirname, 'node_modules/axios/index.js'),
    },
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.vue',
      '.esm.js',
      '.umd.js',
      '.min.js',
      '.json',
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.vue',
      '.esm.js',
      '.umd.js',
      '.min.js',
      '.json',
    ],
    conditionNames: ['require'],
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      ],
      exclude: /node_modules/,
    },
    {
      test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: 'url-loader?limit=10000',
    },
    {
      test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
      use: 'file-loader',
    },
    {
      test: /\.css$/i,
      use: [
        'style-loader',
        'css-loader',
      ],
    },
    {
      test: /\.less$/i,
      use: [
        'style-loader',
        'css-loader',
        'less-loader',
      ],
    },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new MonacoWebpackPlugin(),
  ],
  devtool: 'inline-source-map',
  devServer: {
    port: 9999,
    historyApiFallback: {
      index: ENV.PUBLIC_PATH,
    },
    allowedHosts: 'all',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  }
};
