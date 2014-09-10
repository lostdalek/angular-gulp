var config      = require('../config'),
    path        = require('path'),
    gutil       = require('gulp-util'),
    gulp        = require('gulp');

gulp.task('copy', function() {
    gulp.src([path.join(config.SRC_ASSETS, "**", "*.*")]) //{ttf,woff,eof,svg}
        .pipe(gulp.dest(config.DIST_ASSETS+''));

    // copy angular lib:
});
