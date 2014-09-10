/**
 * Execute gulp tasks
 * available in gulp/tasks
 *
 */
var args = require('yargs').argv;
var gulp = require('gulp');

require('./gulp');

if( args.help !== undefined || args.h !== undefined) {
    gulp.task('default', ['help']);
}
