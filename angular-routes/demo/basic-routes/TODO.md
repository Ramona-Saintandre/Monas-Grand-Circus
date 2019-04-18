## Personal Site Code Along
Create three components, home, about-me, and resume, and portfolio each that display their respective numbers

Add a Nav Header

Add angular CDN to index.html `<script src="https://code.angularjs.org/1.6.5/angular-route.js"></script>`

Create and link to app.config.js

Add $routeProvider to config
```
"use strict";
angular
  .module("App")
  // Configuring the routing
  // The config method must have an array as the parameter. The array contains two elements, $routeProvider (as a string) and an arrow function with $routeProvider as a parameter
  .config(["$routeProvider", ($routeProvider) => {
    $routeProvider
      // When the user visits the display route...
      .when("/display", {
        // Load the display component
        template: "<display></display>"
      })
```

Create routes for each component

Add ng-view directive to html element in index.html
