(function() {
    'use strict';

    angular
        .module('app')
        .factory('Parser', Parser);

    function Parser() {
        function createDocumentFromString(str) {
            var isHTML = str.toLowerCase().indexOf("<!doctype") > -1;
            var doc = (new DOMParser()).parseFromString(str, isHTML ? "text/html" : "application/xml");

            var errors = doc.getElementsByTagName("parsererror");
            if (errors.length) {
                return {
                    "error": "Not a valid HTML or XML document!" // TODO get error message from parser?
                };
            }

            return {
                "document": doc
            };
        };

        function getTagsInDocument(doc) {
            var results = {};
            var elements = doc.getElementsByTagName("*"); // TODO check this is correct usage

            for (var i = 0; i < elements.length; i++) {
                var tagName = elements[i].tagName;
                results[tagName] = results[tagName] ? results[tagName] + 1 : 1;
            }

            // return results;
            return _.map(results, function(val, key) {
                return {
                    'tagName': key,
                    'count': val
                }
            })
        };

        return {
            getTags: function(body) {
                var parserResult = createDocumentFromString(body);

                if (parserResult["error"]) {
                    return {
                        "error": parserResult["error"]
                    };
                }

                return {
                    "tags": getTagsInDocument(parserResult["document"])
                };
            },
        };
    };
})();
