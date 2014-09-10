var config      = require('../config'),
    path        = require('path'),
    gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    express = require('express'),
    connect     = require('gulp-connect'),
    refresh = require('gulp-livereload'),
    livereload = require('connect-livereload'),
    livereloadport = 35729,
    serverport = 5000;

// Set up an express server (not starting it yet)
var server = express();
server.use(function(req, res, next){
    console.log('%s %s', req.method, req.url);
    next();
});
// Add live reload
server.use(livereload({port: livereloadport}));
// Use our 'dist' folder as rootfolder
server.use(express.static('./'+config.DIST)); //config.DIST_JS
// Because I like HTML5 pushstate .. this redirects everything back to our index.html
/*server.all('/*', function(req, res) {
    res.sendfile('index.html', { root: 'dist' });
});*/

// ['build'],
gulp.task('watch',  function() {
    // Start webserver
    server.listen(serverport);
    // Start live reload
    refresh.listen(livereloadport);

    // watch application
    gulp.watch(path.join(config.SRC_JS,"**", "*.js"),[
        'lint',
        'concat'
    ]);
    // watch vendors refs
    gulp.watch( path.join(config.SRC_JS, "main-deps.json"),[
        //'lint',
        'concat'
    ]);

    // watch for templates
    gulp.watch([path.join(config.SRC,"**", "*.html")], [
        'concat'
    ]);

    // Watch our sass files
    gulp.watch([path.join(config.SRC_SASS,"**", "*.sass"), path.join(config.SRC_SASS,"**", "*.scss")], [
        'css'
    ]);
    // app entry point
    gulp.watch([path.join(config.SRC,"index.html")], [
        'html'
    ]);
    gulp.watch(path.join(config.DIST_JS, "*.*")).on('change', refresh.changed);
});
