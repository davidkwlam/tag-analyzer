(function() {
    'use strict';

    angular
        .module('app')
        .controller('Home', Home);

    function Home($scope, Proxy, Parser) {
        $scope.predicate = 'tableNumber';
        $scope.reverse = false;
        $scope.order = order;
        $scope.getTags = getTags;
        $scope.url = '';

        function getTags(url) {
            if (!url) {
                return;
            }

            $scope.tags = [];
            $scope.error = '';

            Proxy.get(url)
                .then(function(response) {
                    var result = Parser.getTags(response.data);
                    $scope.tags = result['tags'];
                    $scope.error = result['error'];
                })
                .catch(function(response) {
                    $scope.error = response.statusText + ' (' + response.status + ')';
                });
        };

        function order(predicate) {
            if ($scope.predicate === predicate) {
                $scope.reverse = !$scope.reverse;
            }

            $scope.predicate = predicate;
        };
    };
})();
