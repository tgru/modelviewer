module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      { pattern: 'spec/*Spec.js', watched: false },
      { pattern: 'spec/**/*Spec.js', watched: false }
    ],
    preprocessors: {
      'spec/*Spec.js': [ 'webpack' ],
      'spec/**/*Spec.js': [ 'webpack' ]
    },
    webpack: require('./webpack.config.js'),
    webpackMiddleware: {
      // Any custom webpack-dev-middleware configuration...
    }
  });
};