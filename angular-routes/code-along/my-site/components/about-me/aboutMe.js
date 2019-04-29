function AboutMeController() {
    var ctrl = this;
}
  
  angular
  .module('MySite')
  .component('aboutMe', {
    template: `
        <section id="about-me">
            <h2>About Me</h2>
        </section>   
    `, // or use templateUrl
    controller: AboutMeController
  });