(function(){
    'use strict';

    /**
     * Build constrain:
     * - file names matters: a module declaration should be concatenated first!
     */
    // init template Module:
    angular.module('cachedTemplates', []); // cache will be generated on gulp Build



    var ngMainModule = angular.module('app', [
        'ngUser',
        'cachedTemplates'   // --> generated on build
    ]);
    console.log('josé')

    //angular configuration
    angular.element(document).ready(function () {
        console.log('App ready');
        var $html = angular.element('html');
        // bootstrap model
        angular.bootstrap($html, ['app', 'ngUser']);
    });
})();
