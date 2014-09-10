var config      = require('../config'),
    path        = require('path'),
    gulp        = require('gulp'),
    connect     = require('gulp-connect'),
    http        = require('http'),
    open        = require('open'),
    gutil       = require('gulp-util');

/**
 * Start an http server at localhost:8080
 */
gulp.task('serve', ['build', 'watch'], function(callback) {
    connect.server({
        root: './',
        livereload: true
    });
});
