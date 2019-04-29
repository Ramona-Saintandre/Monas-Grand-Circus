console.log('in the route config.');


angular
  .module("MyApp")
  // Configuring the routing
  // The config method must have an array as the parameter. The array contains two elements, $routeProvider (as a string) and an arrow function with $routeProvider as a parameter
  .config(["$routeProvider", ($routeProvider) => {
    $routeProvider
      // When the user visits the display route...
      .when("/1", {
        // Load the display component
        template: "<one></one>"
      })
      .when("/2", {
        // Load the display component
        template: "<two></two>"
      })
      .when("/3", {
        // Load the display comptwont
        template: "<three></three>"
      })
      .otherwise({
          template: "<home></home>"
      })
  }])