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
      name: 'hunt',
      filename: 'remoteEntry.js',
      remotes: { '@logrhythm/shared': 'shared@/mfes/shared/dist/remoteEntry.js' },
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
};
