(function() {
    'use strict';

    // Declare app level module which depends on views, and components
    angular
        .module('app', [
            'ngRoute',
            'app.results'
        ]);

    angular
        .module('app')
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.otherwise({
                redirectTo: '/results'
            });
        }]);
})();
