(function() {
    'use strict';

    angular
        .module('app', [
            'ngRoute',
            'angular-loading-bar',
            'ngAnimate',
            'app.results'
        ]);

    angular
        .module('app')
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.otherwise({
                redirectTo: '/results'
            });
        }])
        .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
            cfpLoadingBarProvider.includeSpinner = false;
        }]);
})();
