var config      = require('../config'),
    gutil       = require('gulp-util'),
    gulp        = require('gulp'),
    path        = require('path'),
    connect     = require('gulp-connect'),
    concat      = require('gulp-concat'),
    sourcemaps  = require('gulp-sourcemaps'),
    ngAnnotate  = require('gulp-ng-annotate'),
    templateCache = require('gulp-angular-templatecache'),
    uglify      = require('gulp-uglify');


gulp.task('build', ['clean'], function(){
    // clean is finished, let's build:
    gulp.start(['lint','css','copy', 'html'])
});

