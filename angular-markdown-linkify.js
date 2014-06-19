(function (angular) {
    'use strict';

    /**
     * @ngdoc filter
     * @name markdownLinks
     *
     * @param target {String}
     *
     * @description Parses links of the form [link-text](http://www.example.com "optional title")
     * or [link-text](<http://www.example.com> "optional title")
     * tolerates spaces before/after closing parenthesis and allows both " and ' to be used in the title.
     *
     * The regex was taken from https://github.com/tanakahisateru/js-markdown-extra and slightly modified.
     */
    angular.module('angular-markdown-linkify', []).filter('markdownLinkify', function () {

        var MD_LINK_REGEX = /(\[((?:[^\]]*?))\]\([ \n]*(?:<(.+?)>|((?:[^\)\s]*?)))[ \n]*(([\'"])(.*?)\6[ \n]*)?\))/mg;

        return function (input, target) {
            if (!angular.isString(input)) {
                return input;
            }

            return input.replace(MD_LINK_REGEX, function (match, wholeMatch, linkText, url1, url2, a, b, title) {
                var url = ((angular.isDefined(url1)) ? url1 : url2),
                    anchor = '<a href="' + url + '"';

                if (angular.isString(title) && title !== '') {
                    anchor += ' title="' + title + '"';
                }
                if (angular.isString(target) && target !== '') {
                    anchor += ' target="' + target + '"';
                }

                anchor += '>' + linkText + '</a>';

                return anchor;
            });
        };

    });

})(angular);
