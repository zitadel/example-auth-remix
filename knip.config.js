module.exports = {
  ignoreDependencies: ['@commitlint/config-conventional'],
  entry: [
    'app/root.tsx',
    'app/routes/**/*',
    'app/lib/**/*',
  ],
  ignore: ['commitlint.config.js'],
};
