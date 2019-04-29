function PortfolioController() {
    var ctrl = this;
}
  
  angular.module('MySite').component('portfolio', {
    template: `
        <section id="portfolio">
            <h2>Portfolio</h2>
        </section>   
    `, // or use templateUrl
    controller: PortfolioController
  });