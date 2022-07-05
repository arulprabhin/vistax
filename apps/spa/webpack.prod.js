const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const VersionFile = require('webpack-version-file');
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
      {
        test: /\.(jpg|jpeg|png|svg|gif)$/,
        use: { loader: 'url-loader' },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'spa',
      filename: 'remoteEntry.js',
      remotes: {
        '@logrhythm/shared': 'shared@/mfes/shared/dist/remoteEntry.js',
        '@logrhythm/dashboard': 'dashboard@/mfes/dashboard/dist/remoteEntry.js',
        '@logrhythm/auth': 'auth@/mfes/auth/dist/remoteEntry.js',
        '@logrhythm/hunt': 'hunt@/mfes/hunt/dist/remoteEntry.js',
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
      output: './dist/versionInfo.js',
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
};
