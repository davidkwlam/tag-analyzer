(function() {
    'use strict';

    angular
        .module('app')
        .factory('Proxy', Proxy);

    function Proxy($http, PROXY_SERVER) {
        return {
            get: function(url) {
                return $http.get(PROXY_SERVER + url);
            },
        };
    };
})();
