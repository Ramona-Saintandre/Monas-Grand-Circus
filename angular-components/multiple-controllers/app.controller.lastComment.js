"use strict";
function LatestComment($rootScope) {
  const controller = this;

  $rootScope.$on("newComment", (event, data) => {
    controller.latestComment = data;
  });
}
angular
  .module("App")
  .controller("LatestComment", LatestComment);