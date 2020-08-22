const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const serverConfig = {
  mode: 'development',
  entry: './src/Server/server',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [
          path.resolve(__dirname, 'src', 'Client'),
          path.resolve(__dirname, 'src', 'Server'),
        ],
        exclude: [
          /node_modules/,
        ],
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devtool: 'source-map',
  context: __dirname,
  target: 'node',
  externals: [nodeExternals()],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: false,
          ecma: 6,
          mangle: true,
        },
        sourceMap: true,
        test: /\.js(\?.*)?$/i,
      }),
    ],
  },
  node: {
    fs: 'empty',
    net: 'empty',
    buffer: 'empty',
  },
};

const clientConfig = {
  mode: 'development',
  entry: './src/Client/Client',
  output: {
    path: path.resolve(__dirname, 'dist', 'static'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [
          path.resolve(__dirname, 'src', 'Client'),
          path.resolve(__dirname, 'src', 'Server'),
        ],
        exclude: [
          /node_modules/,
        ],
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devtool: 'source-map',
  context: __dirname,
  target: 'web',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: false,
          ecma: 6,
          mangle: true,
        },
        sourceMap: true,
        test: /\.js(\?.*)?$/i,
      }),
    ],
  },
};

module.exports = [serverConfig, clientConfig];
