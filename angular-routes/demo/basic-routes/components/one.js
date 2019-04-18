angular.module('MyApp').component('one', {
    template: `
    <div>
        <h1> Step 1 </h1>
        <p> Do this thing </p>

        <a href="#!2">Next step</a>
    </div>`, // or use templateUrl
});