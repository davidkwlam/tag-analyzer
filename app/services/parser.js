(function() {
    'use strict';

    angular
        .module('app')
        .factory('Parser', Parser);

    // TODO Write unit tests
    function Parser() {
        return {
            getDocumentFromString: function(str) {
                var parser = new DOMParser();
                var doc = parser.parseFromString(str, "text/html"); // TODO check for parsing errors
                return doc;
            },

            getTagsInDocument: function(doc) {
                var results = {};
                var elements = doc.getElementsByTagName("*"); // TODO check this is correct usage

                for (var i = 0; i < elements.length; i++) {
                    var tagName = elements[i].tagName;
                    results[tagName] = results[tagName] ? results[tagName] + 1 : 1;
                }

                return results;
            },
        };
    };
})();
