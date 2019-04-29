function ResumeController() {
    var ctrl = this;
}
  
  angular.module('MySite').component('resume', {
    template: `
        <section id="resume">
            <h2>Resume</h2>
        </section>   
    `, // or use templateUrl
    controller: ResumeController
  });