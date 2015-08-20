// Karma configuration
// Generated on Thu Jul 30 2015 08:37:07 GMT+0800 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      //dependencies
      {pattern: 'vendor/jquery/dist/jquery.min.js', watched: false, served: true, included: true},
      {pattern: 'vendor/underscore/underscore-min.js', watched: false, served: true, included: true},
      {pattern: 'vendor/jasmine/lib/jasmine-core/jasmine.js', watched: false, served: true, included: true},
      {pattern: 'vendor/jasmine-jquery/lib/jasmine-jquery.js', watched: false, served: true, included: true},

      // fixtures
      {pattern: 'spec/fixtures/**/*.html', watched: true, served: true, included: false},

      //files to test
      'src/js/*.js',
      'spec/**/*-spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  })
}
