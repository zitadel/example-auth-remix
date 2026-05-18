module.exports = {
  ignoreDependencies: [
    '@commitlint/config-conventional',
    '@zitadel/remix-auth',
    '@react-router/node',
  ],
  entry: ['app/root.tsx', 'app/routes/**/*', 'app/lib/**/*'],
  ignore: ['commitlint.config.js'],
};
