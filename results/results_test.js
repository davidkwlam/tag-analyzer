'use strict';

describe('ResultsController', function() {
    var scope;

    beforeEach(function() {
        module('app');

        inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            $controller('Results', {
                $scope: scope
            });
        });
    });

    describe('Results controller', function() {

        it('should ....', function() {
            expect(scope.error).toBe(undefined);
        });
    });
});
