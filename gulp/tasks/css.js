var config      = require('../config'),
    path        = require('path'),
    gutil       = require('gulp-util'),
    gulp        = require('gulp'),
    gulpif      = require('gulp-if'),
    debug       = require('gulp-debug'),
    handleErrors = require('../util/handleErrors'),
    compass     = require('gulp-compass'),
    minifyCSS   = require('gulp-minify-css'),
    connect     = require('gulp-connect');


gulp.task('css', function(){
    var compassOpts = {
        //config_file: config.SRC_SASS+'/config.rb',
        //project: config.SRC_SASS,
        //project: config.DIST_ASSETS,
        css: path.join(config.TMP, 'css'),
        sass: '',
        sourcemap: false,
        time: true,
        options: 'nested' //nested, expanded, compact, or compressed
    };

    if( config.env.compassOpts !== undefined ) {
        compassOpts = config.env.compassOpts;
    }

    return gulp.src([path.join(config.SRC_SASS,"**", "*.sass"), path.join(config.SRC_SASS,"**", "*.scss")] )
        .pipe(compass(compassOpts))
        .on('error', handleErrors)
        //.pipe(debug({verbose: true}))
        //.pipe(connect.reload())
        .pipe(gulpif(config.env.cssMinify, minifyCSS()))
        .pipe(gulp.dest(config.DIST_CSS));           // seems to be ignored
});
