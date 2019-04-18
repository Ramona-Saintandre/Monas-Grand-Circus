angular.module('MyApp').component('home', {
    template: `
    <nav>
        <h1>Home</h1>
        <li><a href="#!1">Step 1</a></li>
        <li><a href="#!2">Step 2</a></li>
        <li><a href="#!3">Step 3</a></li>
    </nav>`, // or use templateUrl
});

console.log('in the home');