var args        = require('yargs').argv;
var path        = require('path');
var gutil       = require('gulp-util');
var gulp        = require('gulp');
var stringify   = require('json-stringify-safe');
var _           = require('lodash');
var requireDir = require('require-dir');
var exportConfig = {};

var SRC = './src',
    SRC_JS = path.join(SRC, "js"),
    SRC_SASS = path.join(SRC, "sass"),
    SRC_ASSETS = path.join(SRC, "assets"),
    TMP = './.tmp',
    TMP_JS = path.join(TMP, "js");

var defaultConfig = {
    SRC_ASSETS: SRC_ASSETS,
    SRC_SASS: SRC_SASS,
    SRC: SRC,
    SRC_JS: SRC_JS,
    TMP: TMP,
    TMP_JS: TMP_JS
};
var env = {
    dev: {
        name: 'Development',
        cssMinify: false,
        jsUglify: false,
        jsSourceMaps: true,
        jshintOptions: {
            devel: true
        }
    },
    prod: {
        name: 'Production',
        cssMinify: true,
        jsUglify: true,
        jsSourceMaps: true,
        jshintOptions: {
            devel: false
        }
    }
};

// load available targets from directory:
var targetConfig = requireDir('./targets', { recurse: true });
// seek for arguments:
var t = args.t !== undefined ? args.t : '',
    target = args.target !== undefined ? args.target : t;

// seek for env:
var p = args.p === undefined ? false : true,
    prod = args.prod === undefined ? p : true,
    d = args.d === undefined ? false : true,
    dev = args.dev === undefined ? d : true;


// load specified target config
if( targetConfig[target] !== undefined ) {
    exportConfig = _.extend( defaultConfig, targetConfig[target]);
    exportConfig.targetName = target;
} else {
    exportConfig = _.extend( defaultConfig, targetConfig['default']);
    exportConfig.targetName = 'default';
}

if( dev === true ) {
    exportConfig.env = env.dev;
} else {
    exportConfig.env = env.prod;
}
console.log(
' \n'
+'     '+gutil.colors.white.bgBlue.bold(' ')+' \n'
+'     '+gutil.colors.white.bgBlue.bold(' ')+' \n'
+'     '+gutil.colors.white.bgBlue.bold(' ')+'     Action will be launched with\n'
+'     '+gutil.colors.white.bgBlue.bold(' ')+'     the following options:\n'
+'     '+gutil.colors.white.bgBlue.bold(' ')+' \n'
+'     '+gutil.colors.white.bgBlue.bold(' ')+'      ENV:    '+exportConfig.env.name+'\n'
+'     '+gutil.colors.white.bgBlue.bold(' ')+'      TARGET: '+exportConfig.targetName+'\n'
+'     '+gutil.colors.white.bgBlue.bold(' ')+' \n'
+'     '+gutil.colors.white.bgBlue.bold(' ')+'      Dist Path: '+exportConfig.DIST+'\n'
+'     '+gutil.colors.white.bgBlue.bold(' ')+' \n'
+'     '+gutil.colors.white.bgBlue.bold(' ')+' \n'
+'     '+gutil.colors.white.bgBlue.bold(' ')+' \n');

gulp.task('config',  function(){
    var configString = JSON.stringify(exportConfig, null, 2);
    console.log(
            ' \n'
            + '      Current Config:'+' \n'
    );
    console.log( configString );
    console.log(' \n');
});

module.exports =  exportConfig;
