const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const deps = require('./package.json').dependencies;

module.exports = {
  mode: 'production',
  devtool: false,
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  optimization: {
    splitChunks: {
      minSize: 10000,
      maxSize: 250000,
    },
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.ts', '.tsx'],
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
    new ModuleFederationPlugin({
      name: 'shared',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './axios': './src/utils/axios',
        './api': './src/utils/api',
        './common': './src/utils/common',
        './Typography': './src/components/Typography',
        './PrivateRoute': './src/components/PrivateRoute',
        './LoggedOutRoute': './src/components/LoggedOutRoute',
        './ColorChangingSlider': './src/components/ColorChangingSlider',
        './VistaLoader': './src/components/VistaLoader',
        './VistaDialog': './src/components/VistaDialog',
        './SplitButtonMenu': './src/components/SplitButtonMenu',
        './EntryTypeChip': './src/components/EntryTypeChip',
        './DoubleLabeledSwitch': './src/components/DoubleLabeledSwitch',
        './ImageSelector': './src/components/ImageSelector',
        './ChipMenu': './src/components/ChipMenu',
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
};
