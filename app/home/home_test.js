'use strict';

describe('Home', function() {
    var Home, $q, $scope, Proxy, Parser, getDeferred;

    beforeEach(function() {
        module('app');

        inject(function($rootScope, $controller, _$q_, _Parser_) {
            $q = _$q_;
            $scope = $rootScope.$new();
            Parser = _Parser_;
            Proxy = {
                get: function() {
                    getDeferred = $q.defer();
                    return getDeferred.promise;
                }
            };

            spyOn(Proxy, 'get').and.callThrough();

            Home = $controller('Home', {
                '$scope': $scope,
                'Proxy': Proxy,
                'Parser': Parser
            });
        });
    });

    it('should have an error if Proxy.get fails', function() {
        $scope.getTags('google.com');

        getDeferred.reject({
            'status': '404',
            'statusText': 'Not found'
        });

        $scope.$apply();

        expect($scope.error).toBeDefined();
        expect($scope.error).toEqual('Not found (404)');
    });

    it('should have an error if Parser.getTags has an error', function() {
        $scope.getTags('google.com');

        getDeferred.resolve({
            'data': 'something'
        });

        spyOn(Parser, 'getTags').and.returnValue({
            'error': 'Some error'
        });

        $scope.$apply();

        expect($scope.error).toBeDefined();
        expect($scope.error).toEqual('Some error');
    });

    it('shouldnt have an error if successful', function() {
        $scope.getTags('google.com');

        getDeferred.resolve({
            'data': 'something'
        });

        spyOn(Parser, 'getTags').and.returnValue({
            'tags': {
                'HTML': 1
            }
        });

        $scope.$apply();

        expect($scope.error).not.toBeDefined();
        expect($scope.tags).toEqual({
            'HTML': 1
        });
    });
});
