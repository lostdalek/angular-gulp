var config      = require('../config'),
    path        = require('path'),
    gutil       = require('gulp-util'),
    gulp        = require('gulp');

gulp.task('copy', function() {
    gulp.src([path.join(config.SRC_ASSETS, "**", "*.*")]) //{ttf,woff,eof,svg}
        .pipe(gulp.dest(config.DIST_ASSETS+''));

    gulp.src([path.join(config.SRC, 'images', "**", "*.*")]) //{ttf,woff,eof,svg}
        .pipe(gulp.dest(path.join(config.DIST, 'images')));

    gulp.src([path.join(config.SRC, 'fonts', "**", "*.*")]) //{ttf,woff,eof,svg}
        .pipe(gulp.dest(path.join(config.DIST, 'fonts')));

    // copy angular lib:
});
