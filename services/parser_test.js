'use strict';

describe('Parser', function() {
    var parser;

    beforeEach(function() {
        module('app');

        inject(function($injector) {
            parser = $injector.get('Parser');
        });
    });

    it('check the existence of Parser factory', function() {
        expect(parser).toBeDefined();
    });

    it('should return an error when given an empty string', function() {
        var body = '';

        var result = parser.getTags(body);
        var error = result['error'];
        var tags = result['tags'];

        expect(error).toBeDefined();
        expect(tags).toBe(undefined);
    });

    it('should return an error when given a random string', function() {
        var body = 'Blah blah blah blah blah';

        var result = parser.getTags(body);
        var error = result['error'];
        var tags = result['tags'];

        expect(error).toBeDefined();
        expect(tags).toBe(undefined);
    });

    it('should return an error when given CSS', function() {
        var body = 'p { font-size: 12px; font-weight: bold; }';

        var result = parser.getTags(body);
        var error = result['error'];
        var tags = result['tags'];

        expect(error).toBeDefined();
        expect(tags).toBe(undefined);
    });

    it('should return an error when given javascript', function() {
        var body = 'console.log("Hello World")';

        var result = parser.getTags(body);
        var error = result['error'];
        var tags = result['tags'];

        expect(error).toBeDefined();
        expect(tags).toBe(undefined);
    });

    it('should return an error when given malfomed XML', function() {
        var body = '<sometag>';

        var result = parser.getTags(body);
        var error = result['error'];
        var tags = result['tags'];

        expect(error).toBeDefined();
        expect(tags).toBe(undefined);
    });

    it('should return the correct tags for an XML document with one tag', function() {
        var body = '<sometag></sometag>';

        var result = parser.getTags(body);
        var error = result['error'];
        var tags = result['tags'];

        expect(error).toBe(undefined);
        expect(tags).toBeDefined();
        expect(Object.keys(tags).length).toEqual(1);
        expect(tags).toEqual([{
            tagName: 'sometag',
            count: 1
        }]);
    });

    it('should return the correct tags and tag count for an XML document with two tags', function() {
        var body = '<sometag><anothertag></anothertag></sometag>';

        var result = parser.getTags(body);
        var error = result['error'];
        var tags = result['tags'];

        expect(error).toBe(undefined);
        expect(tags).toBeDefined();
        expect(Object.keys(tags).length).toEqual(2);
        expect(tags).toEqual([{
            tagName: 'sometag',
            count: 1
        }, {
            tagName: 'anothertag',
            count: 1
        }]);
    });

    it('should return the correct tags and tag count for an XML document with two tags that are the same', function() {
        var body = '<sometag><sometag></sometag></sometag>';

        var result = parser.getTags(body);
        var error = result['error'];
        var tags = result['tags'];

        expect(error).toBe(undefined);
        expect(tags).toBeDefined();
        expect(Object.keys(tags).length).toEqual(1);
        expect(tags).toEqual([{
            tagName: 'sometag',
            count: 2
        }]);
    });

    it('should return the correct tags and tag count for a simple HTML document', function() {
        var body = '<!doctype HTML><html><head></head><body></body></html>';

        var result = parser.getTags(body);
        var error = result['error'];
        var tags = result['tags'];

        expect(error).toBe(undefined);
        expect(tags).toBeDefined();
        expect(Object.keys(tags).length).toEqual(3);
        expect(tags).toEqual([{
            tagName: 'HTML',
            count: 1
        }, {
            tagName: 'HEAD',
            count: 1
        }, {
            tagName: 'BODY',
            count: 1
        }]);
    });

    it('should return the correct tags and tag count for an HTML document with multiple tags', function() {
        var body = '<!doctype HTML><html><head><title>This is a webpage</title></head><body><h1>Web Page</h1><p>Content</p></body></html>';

        var result = parser.getTags(body);
        var error = result['error'];
        var tags = result['tags'];

        expect(error).toBe(undefined);
        expect(tags).toBeDefined();
        expect(Object.keys(tags).length).toEqual(6);
        expect(tags).toEqual([{
            tagName: 'HTML',
            count: 1
        }, {
            tagName: 'HEAD',
            count: 1
        }, {
            tagName: 'TITLE',
            count: 1
        }, {
            tagName: 'BODY',
            count: 1
        }, {
            tagName: 'H1',
            count: 1
        }, {
            tagName: 'P',
            count: 1
        }]);
    });

    it('should return the correct tags and tag count for an HTML document with multiple duplicate tags', function() {
        var body = '<!doctype HTML><html><head></head><body><h1>Web Page</h1><h1>Web Page Again</h1></body></html>';

        var result = parser.getTags(body);
        var error = result['error'];
        var tags = result['tags'];

        expect(error).toBe(undefined);
        expect(tags).toBeDefined();
        expect(Object.keys(tags).length).toEqual(4);
        expect(tags).toEqual([{
            tagName: 'HTML',
            count: 1
        }, {
            tagName: 'HEAD',
            count: 1
        }, {
            tagName: 'BODY',
            count: 1
        }, {
            tagName: 'H1',
            count: 2
        }]);
    });
});
