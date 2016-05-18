(function() {
    'use strict';

    angular
        .module('app.results', ['ngRoute']);

    angular
        .module('app.results')
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/results', {
                templateUrl: 'results/results.html',
                controller: 'Results'
            });
        }]);

    angular
        .module('app.results')
        .controller('Results', Results);

    Results.$inject = ['$scope', 'Proxy', 'Parser'];

    function Results($scope, Proxy, Parser) {
        $scope.getTags = getTags;
        $scope.url = 'http://google.com';

        function getTags(url) {
            if (!url) {
                return;
            }

            $scope.tags = {};
            $scope.error = "";

            Proxy.get(url)
                .then(function(response) {
                    var result = Parser.getTags(response.data);
                    $scope.tags = result["tags"];
                    $scope.error = result["error"];
                })
                .catch(function(response) {
                    $scope.error = response.statusText + ' (' + response.status + ')';
                });
        };
    };
})();
