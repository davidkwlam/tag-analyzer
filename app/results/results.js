(function() {
    'use strict';

    angular
        .module('app')
        .controller('Results', Results);

    function Results($scope, Proxy, Parser) {
        $scope.getTags = getTags;
        $scope.url = 'google.com';

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
