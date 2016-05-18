(function() {
    'use strict';

    angular
        .module('app')
        .factory('Proxy', Proxy);

    function Proxy($http, CONSTANTS) {
        return {
            get: function(url) {
                return $http.get(CONSTANTS.PROXY_SERVER + url);
            },
        };
    };
})();
