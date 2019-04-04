"use strict";
function MyCtrl($scope) {  
  $scope.listItems = [
    'List Item 1',
    'List Item 2',
    'List Item 3'
  ];

  $scope.inputItems = [
    { name: 'input1', label: 'Input 1' },
    { name: 'input2', label: 'Input 2' }
  ];
}
angular
  .module("App")
  .controller("MyCtrl", MyCtrl);