const path = require('path')

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    browsers: ['ChromeHeadless'],
    files: [{
        pattern: 'tests/*Test.js',
        watched: false
      },
      {
        pattern: 'tests/**/*Test.js',
        watched: false
      }
    ],
    preprocessors: {
      'tests/*Test.js': ['webpack'],
      'tests/**/*Test.js': ['webpack']
    },
    webpack: require('./webpack.config.js'),
    webpackMiddleware: {
      // Any custom webpack-dev-middleware configuration...
    },
    reporters: ['coverage'],
    coverageReporter: {
      reporters: [{
          type: 'text-summary'
        },
        {
          type: function () {
            var shieldBadgeReporter = require('istanbul-reporter-shield-badge')
            var istanbul = require('istanbul')
            istanbul.Report.register(shieldBadgeReporter)
            return 'shield-badge'
          }(),
          subdir: '.',
          coverageType: 'statements',
          range: [75, 90],
          subject: 'Coverage',
          readmeFilename: 'README.md',
          readmeDir: path.resolve(__dirname, '..')
        }
      ]
    }
  });
};