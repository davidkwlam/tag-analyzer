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
            $scope.loading = true;
            $scope.tags = {};

            Proxy.getPage(url)
                .then(function(body) {
                    var doc = Parser.getDocumentFromString(body);
                    $scope.tags = Parser.getTagsInDocument(doc);
                })
                .catch(function(response) {
                    console.log(response.status); // TODO handle GET errors
                })
                .finally(function() {
                    $scope.loading = false;
                });
        };
    };
})();
