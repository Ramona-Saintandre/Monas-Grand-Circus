angular.module('MyApp').component('two', {
    template: `
    <div>
        <h1> Step 2 </h1>
        <p> Don't freak out </p>

        <a href="#!1">Previous step</a> 
        <a href="#!3">Next step</a>
    </div>`, // or use templateUrl
});