(function() {
    'use strict';

    angular
        .module('myApp.view1', ['ngRoute']);

    angular
        .module('myApp.view1')
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/view1', {
                templateUrl: 'view1/view1.html',
                controller: 'View1Ctrl'
            });
        }]);

    angular
        .module('myApp.view1')
        .controller('View1Ctrl', [function() {

        }]);
})();
