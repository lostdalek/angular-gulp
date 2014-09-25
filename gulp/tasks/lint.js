var config      = require('../config'),
    gulp        = require('gulp'),
    path        = require('path'),
    gutil       = require('gulp-util'),
    jshint      = require('gulp-jshint');

// JSHint task
gulp.task('lint', function() {
    var srcFiles = [];

    if( config.OVERRIDE_APP_CONFIG === true ) {
        srcFiles.push(path.join(config.SRC_JS,"**", "*.js") );
        srcFiles.push(config.OVERRIDE_APP_CONFIG_FILE_SRC );
        srcFiles.push(path.join(config.SRC_JS,"!defaultConfig.js") );
    } else {
        srcFiles.push(path.join(config.SRC_JS,"**", "*.js") )
    }


    gulp.src(srcFiles)
        .pipe(jshint(config.env.jshintOptions))
        .pipe(jshint.reporter(require('jshint-stylish')));

});
