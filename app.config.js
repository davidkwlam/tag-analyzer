(function() {
    'use strict';

    angular
        .module('app')
        .constant('PROXY_SERVER', 'https://cors-anywhere.herokuapp.com/') // TODO self-host
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.otherwise({
                redirectTo: '/results'
            });
        }])
        .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
            cfpLoadingBarProvider.includeSpinner = false;
        }]);
})();
