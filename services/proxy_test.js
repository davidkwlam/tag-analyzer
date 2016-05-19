'use strict';

describe('Parser', function() {
    var proxy, CONSTANTS, $httpBackend;

    beforeEach(function() {
        module('app');

        inject(function($injector) {
            proxy = $injector.get("Proxy");
            $httpBackend = $injector.get("$httpBackend");
            CONSTANTS = $injector.get("CONSTANTS");
        });
    });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('check the existence of Parser factory', function() {
        expect(proxy).toBeDefined();
    });

    it('should call the proxy server with a given url', function() {
        var url = 'www.someurl.com';
        var data = '<html></html>';
        var resultData;

        var getOrdersRequestHandler = $httpBackend.when('GET', CONSTANTS.PROXY_SERVER + url)
            .respond(data, {});

        $httpBackend.expectGET(CONSTANTS.PROXY_SERVER + url);
        proxy.get(url).then(function(result) {
            resultData = result.data;
        });
        $httpBackend.flush();

        expect(resultData).toBe(data);
    });
});
