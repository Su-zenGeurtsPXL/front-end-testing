module.exports = {
  presets: [
    '@babel/preset-env', // Transforms ES6+ code to ES5
    '@babel/preset-typescript', // Adds TypeScript support
  ],
  plugins: [
    '@babel/plugin-transform-runtime', // Adds support for async/await and other features
    'babel-plugin-transform-vue-jsx', // Adds support for Vue JSX syntax
  ],
};
