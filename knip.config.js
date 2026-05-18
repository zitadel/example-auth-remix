module.exports = {
  ignoreDependencies: [
    '@commitlint/config-conventional',
    '@zitadel/remix-auth',
  ],
  entry: ['app/routes/**/*', 'app/lib/**/*'],
  ignore: ['commitlint.config.js', '.react-router/**'],
};
