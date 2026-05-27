module.exports = {
  ignoreDependencies: ['@commitlint/config-conventional'],
  entry: ['app/routes/**/*', 'app/lib/**/*', 'app/auth.server.ts'],
  ignore: ['commitlint.config.js', '.react-router/**'],
};
