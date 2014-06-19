angular-markdown-linkify
============================

This filter must be used with `ngSanitize` module and the `ng-bind-html` directive.

Parses markdown links of the form `[Go to google](https://www.google.com/ "Go To Google.com")`

The regex pattern was adopted from [js-markdown-extra](https://github.com/tanakahisateru/js-markdown-extra)

Usage
--------------

Controller

```javascript
angular.module('myApp', ['ngSanitize', 'angular-markdown-linkify'])
    .controller('AppController', function ($scope) {
        $scope.paragraphs = [
            'Nunquam demitto accentor. [Go to google](https://www.google.com/ "Go To Google.com"). Compaters assimilant.',
            'Cur abactus resistere? [Domuss ridetis!](<https://www.gmail.com/> "Nunquam carpseris fermium."). Fortiss messis.',
            'Nunquam convertam plasmator [Vortexs potus!](<https://www.youtube.com/>). Contencios credere.',
            'Sunt planeta unda, omnes [fiscinaes](http://www.example.com) demitto camerarius, noster frondatores.'
        ];
    });
```

Template

```html
<!-- Default 'target' parameter -->
<p ng-repeat="paragraph in paragraphs" ng-bind-html="paragraph | markdownLinkify"></p>

<!-- Optional 'target' parameter -->
<p ng-repeat="paragraph in paragraphs" ng-bind-html="paragraph | markdownLinkify:'_blank'"></p>
```
