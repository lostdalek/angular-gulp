var config      = require('../config'),
    gutil       = require('gulp-util'),
    gulp        = require('gulp'),
    path        = require('path'),
    clean       = require('gulp-clean');

gulp.task('clean', function(){
    /* must return func: is async */
    return gulp.src([path.join(config.DIST, '*'), path.join(config.TMP, '*')], {read: false})
        .pipe(clean());

});

