## Personal Site Code Along
1. Create three components, home, about-me, and resume, and portfolio each that display their respective info

2. Add a Nav Header that links to each component

3. Add angular CDN to index.html `<script src="https://code.angularjs.org/1.7.8/angular-route.js"></script>`

3 1/2. Add the ngRoute dependency to app.module.js

4. Create and link to app.config.js

5. Add $routeProvider to config
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

6. Create routes for each component in the config file

7. Add ng-view directive to html element in index.html
