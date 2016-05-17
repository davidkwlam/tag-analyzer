(function() {
    'use strict';

    angular
        .module('app')
        .factory('Proxy', Proxy);

    function Proxy($http) {
        return {
            // TODO Write unit tests
            getPage: function(url) {
                return $http.get('https://cors-anywhere.herokuapp.com/' + url) // TODO host this yourself and put into a config file
                    .then(function(response) {
                        return response.data;
                    });
            },
        };
    };
})();
