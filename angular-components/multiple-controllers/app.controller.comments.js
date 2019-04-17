"use strict";
function CommentsController($rootScope) {
  const controller = this;

  controller.comments = ['This is utter garbage', 'I loved it!'];

  $rootScope.$on("newComment", (event, data) => {
    console.log('caught event in comments controller');
    controller.comments.push(data);
  });
}
angular
  .module("App")
  .controller("CommentsController", CommentsController);