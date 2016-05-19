(function() {
    'use strict';

    angular
        .module('app')
        .constant('CONSTANTS', {
            'PROXY_SERVER': 'http://tag-analyzer-proxy.herokuapp.com/'
        })
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.otherwise({
                redirectTo: '/home'
            });
        }])
        .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
            cfpLoadingBarProvider.includeSpinner = false;
        }]);
})();
