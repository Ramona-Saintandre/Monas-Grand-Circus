"use strict";
function FamilyCtl() {
  const controller = this;

  controller.fam = [{
      name: 'BJ',
      relation: 'me',
      age: 23
    },
    {
      name: 'Rachel',
      relation: 'wife',
      age: 26
    },
    {
      name: 'Sade',
      relation: 'pup',
      age: 2
    }
  ];
}
angular
  .module("App")
  .controller("FamilyCtl", FamilyCtl);