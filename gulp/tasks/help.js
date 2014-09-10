var config      = require('../config'),
    gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    p           = require('../../package.json');
//var browserifyAliasConfig = require('./browserify.config.js');

// define the browserify-watch as dependencies for this task
gulp.task('help',  function(){

    // 49

    var lineLenght = 48,
        packageName = p.name,
        packageNameLen = packageName.length,
        tagLine = '';

    if( packageNameLen < lineLenght) {
        var prependSpace = '',
            appendSpace = '',
            addSpaces = (lineLenght-packageNameLen)/2;
        while (prependSpace.length < addSpaces) {
            prependSpace += ' ';
            appendSpace += ' ';
        }
        tagLine =prependSpace+packageName+appendSpace;
        console.log(tagLine.length, lineLenght)
        if( tagLine.length <= lineLenght) {
            tagLine += ' ';
        }
    }


    console.log(


         '            '+gutil.colors.white.bgBlue.bold('                                                 ')+' \n'
        +'            '+gutil.colors.white.bgBlue.bold(tagLine)+' \n'
        +'            '+gutil.colors.white.bgBlue.bold('                                                 ')+' \n'
        +' \n'

    );
    console.log(
        ' \n'
            + '      Usage: '+' \n'
            + '        gulp [option] [-t target]'+' \n'
            +' \n'
            + '      if -t or --target is not specified, a default target will be used'+' \n'
            + '      run '+gutil.colors.white.bgBlue.bold('gulp config')+' for more info on the default target'+' \n'
    );
    console.log(
        ' \n'
            + '      Options: '+' \n'
            + '        watch            Watch for source file changes (js|sass|assets|...)'+' \n'
            + '        build            Build entire project then watch'+' \n'
            + '        config           Show config of a specified target (-t)'+' \n'
            +' \n'
            + '      Arguments: '+' \n'
            + '        -h, --help       This command'+' \n'
            + '        -d, --dev        developpement context'+' \n'
            + '        -p, --prod       production context'+' \n'
            + '        -t, --target     yii|symfony'+' \n'
    );

    //gulp.task('config');
    console.log('      Current Config: '+' \n'+JSON.stringify(config, null, 2));
    console.log('\n')
});
