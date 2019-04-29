function HomeController() {
    var ctrl = this;
}
  
  angular.module('MySite').component('home', {
    template: `
        <section id="home">
            <h2>Home</h2>
        </section>   
    `, // or use templateUrl
    controller: HomeController
  });