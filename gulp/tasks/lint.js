var config      = require('../config'),
    gulp        = require('gulp'),
    path        = require('path'),
    gutil       = require('gulp-util'),
    jshint      = require('gulp-jshint');

// JSHint task
gulp.task('lint', function() {
    gulp.src(path.join(config.SRC_JS,"*.js"))
        .pipe(jshint(config.env.jshintOptions))
        .pipe(jshint.reporter(require('jshint-stylish')));

});
