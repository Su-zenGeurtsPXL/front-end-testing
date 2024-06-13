/** @type {import('ts-jest').JestConfigWithTsJest} */

// module.exports = {
  module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    // '^.+\\.vue$': 'vue-jest',
    '^.+\\.[tj]sx?$': 'babel-jest', // Use babel-jest for JS/TS files
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  // setupFiles: ['./jest.setup.js'], // if you have a setup file
};
