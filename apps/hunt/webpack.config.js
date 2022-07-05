const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const deps = require('./package.json').dependencies;

const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin({ disable: true });

module.exports = smp.wrap({
  entry: './src/index.js',
  mode: 'development',
  output: {
    publicPath: 'http://localhost:3004/',
  },
  devServer: {
    port: 3004,
    historyApiFallback: true,
    hot: true, // hot: 'only',
    compress: true,
    allowedHosts: 'auto',
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json', '.ts', '.tsx'],
    alias: {
      handlebars: 'handlebars/dist/cjs/handlebars',
      'handlebars/runtime': 'handlebars/dist/cjs/handlebars',
    },
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader'],
        exclude: /\.module\.css$/,
      },
    ],
  },

  plugins: [
    new ReactRefreshPlugin(),
    new ModuleFederationPlugin({
      name: 'hunt',
      filename: 'remoteEntry.js',
      remotes: { '@logrhythm/shared': 'shared@http://localhost:3001/remoteEntry.js' },
      exposes: {
        './route': './src/App',
      },
      shared: {
        ...deps,
        react: { singleton: true, requiredVersion: deps.react },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new MiniCssExtractPlugin({ filename: 'style.css' }),
  ],
});
