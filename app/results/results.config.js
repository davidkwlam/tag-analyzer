(function() {
    'use strict';

    angular
        .module('app')
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/results', {
                templateUrl: 'results/results.html',
                controller: 'Results'
            });
        }]);
})();
