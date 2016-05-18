(function() {
    'use strict';

    angular
        .module('app')
        .factory('Proxy', Proxy);

    function Proxy($http) {
        return {
            // TODO Write unit tests
            get: function(url) {
                return $http.get('https://cors-anywhere.herokuapp.com/' + url); // TODO self-host this and put into a config file
            },
        };
    };
})();
