(function() {
    'use strict';

    angular
        .module('myApp.version', [
            'myApp.version.interpolate-filter',
            'myApp.version.version-directive'
        ]);

    angular
        .module('myApp.version')
        .value('version', '0.1');
})();
