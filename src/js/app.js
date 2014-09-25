(function(){
    'use strict';

    /**
     * Build constrain:
     * - file names matters: a module declaration should be concatenated first!
     */
    // init template Module:
    angular.module('cachedTemplatesModule', []); // cache will be generated on gulp Build



    var ngMainModule = angular.module('app', [
        'ngUser',
        'cachedTemplatesModule'   // --> generated on build
    ]);
})();
