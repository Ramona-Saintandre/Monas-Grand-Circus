"use strict";
function FormController($rootScope) {
  const controller = this;

  controller.addComment = () => {
        console.log('broadcasting', controller.formData);
        $rootScope.$broadcast('newComment', controller.formData);
  }
}
angular
  .module("App")
  .controller("FormController", FormController);