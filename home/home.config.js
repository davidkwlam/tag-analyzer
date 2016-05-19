(function() {
    'use strict';

    angular
        .module('app')
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/home', {
                templateUrl: 'home/home.html',
                controller: 'Home'
            });
        }]);
})();
