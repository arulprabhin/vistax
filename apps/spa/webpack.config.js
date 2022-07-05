const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const deps = require('./package.json').dependencies;
const VersionFile = require('webpack-version-file');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin({ disable: true });

module.exports = smp.wrap({
  mode: 'development',
  output: {
    publicPath: 'http://localhost:3000/',
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true, // hot: 'only',
    compress: true,
    open: true,
    allowedHosts: 'auto',
    headers: {
      'X-Frame-Options': 'sameorigin',
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
      {
        test: /\.(jpg|jpeg|png|svg|gif)$/,
        use: { loader: 'url-loader' },
      },
    ],
  },
  plugins: [
    new ReactRefreshPlugin(),
    new ModuleFederationPlugin({
      name: 'spa',
      filename: 'remoteEntry.js',
      remotes: {
        '@logrhythm/shared': 'shared@http://localhost:3001/remoteEntry.js',
        '@logrhythm/dashboard': 'dashboard@http://localhost:3002/remoteEntry.js',
        '@logrhythm/auth': 'auth@http://localhost:3003/remoteEntry.js',
        '@logrhythm/hunt': 'hunt@http://localhost:3004/remoteEntry.js',
      },
      shared: {
        ...deps,
        react: { singleton: true, requiredVersion: deps.react },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: deps['react-router-dom'],
        },
      },
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new MiniCssExtractPlugin({ filename: 'style.css' }),
    new CopyPlugin({
      patterns: [{ from: 'public/images', to: 'images' }],
    }),
    new VersionFile({
      output: './src/versionInfo.js',
      templateString:
        'export default {\n' +
        '\tversion: "<%= version %>", \n' +
        '\tdescription: "<%= description %>", \n' +
        '\tbuild: {\n\t\ttime: <%= buildDate.getTime() %>, \n' +
        '\t\tyear: <%= buildDate.getYear() + 1900 %>, \n' +
        '\t\tmonth: <%= buildDate.getMonth() + 1 %>, \n' +
        '\t\tdate: <%= buildDate.getDate() %>, \n' +
        '\t\thours: <%= buildDate.getHours() %>, \n' +
        '\t\tminutes: <%= buildDate.getMinutes() %>, \n' +
        '\t\tseconds: <%= buildDate.getSeconds() %>, \n' +
        '\t}\n' +
        '};\n',
    }),
  ],
});
