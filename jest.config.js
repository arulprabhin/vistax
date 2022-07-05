const path = require('path');

module.export = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/apps'],
  transform: {
    '\\.(js|jsx)?$': 'babel-jest',
  },
  testMatch: ['<rootDir>/apps/**/>(*.)test.{js, jsx}'], // finds test
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/public/', '/dist'],
  setupFilesAfterEnv: [
    path.resolve(__dirname, 'setupTests.js'),
    '@testing-library/jest-dom/extend-expect',
    '@testing-library/react/cleanup-after-each',
  ], // setupFiles before the tests are ran
};
