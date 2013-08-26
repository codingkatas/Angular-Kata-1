// Karma configuration
// Generated on Fri Jun 21 2013 07:29:05 GMT+0200 (Vesteuropa, sommertid)


// base path, that will be used to resolve files and exclude
basePath = '';


// list of files / patterns to load in the browser
files = [
    JASMINE,
    JASMINE_ADAPTER,

    'src/main/webapp/res/lib/sugar-1.3.9.min.js',
    'src/main/webapp/res/lib/jquery-2.0.3.js',
    'src/main/webapp/res/lib/angular-1.2.0/angular.min.js',
    'src/main/webapp/res/lib/angular-1.2.0/angular-mocks.js',
    'src/main/webapp/res/lib/angular-1.2.0/angular-resource.min.js',
    'src/main/webapp/res/lib/angular-1.2.0/angular-route.min.js',
    'src/main/webapp/res/lib/ui-bootstrap-tpls-0.5.0.js',
    'src/main/webapp/app/kata1/util.js',
    'src/main/webapp/app/kata1/app.js',
    'src/main/webapp/app/kata1/**/*.js',
    'src/test/webapp/app/**/*.js'

];


// list of files to exclude
exclude = [

];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress'];


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
