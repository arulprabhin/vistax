module.exports = function babel(api) {
  const presets = [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        corejs: 3,
        useBuiltIns: 'usage',
        modules: false,
        targets: {
          browsers: [
            'last 2 Chrome versions',
            'last 2 Firefox versions',
            'last 2 Safari versions',
            'last 2 iOS versions',
            'last 1 Android versions',
            'last 1 ChromeAndroid versions',
            'ie 11',
          ],
        },
      },
    ],
    '@babel/preset-typescript',
  ];

  const plugins = [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
    'babel-plugin-styled-components',
    '@emotion',
  ];
  const ENV = api.env();

  if (ENV === 'development') {
    plugins.push('react-refresh/babel');
  }

  return { presets, plugins };
};
