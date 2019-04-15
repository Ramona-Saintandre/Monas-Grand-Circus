"use strict";
function SuperHeroCtrl($scope) {

  $scope.heroes = [
    {
      name: 'Thor',
      type: 'hero',
      power: 90
    }
  ];
  $scope.villians = [];

  // Initialize with some build-in heros & villians
  $scope.people = [
    {
      name: 'Thor',
      type: 'hero',
      power: 90
    },
    {
      name: 'Loki',
      type: 'both',
      power: 50
    },
    {
      name: 'Thanos',
      type: 'villian',
      power: 99
    },
    {
      name: 'Iron Man',
      type: 'hero',
      power: 85
    },
    {
      name: 'Hela',
      type: 'villian',
      power: 95
    },
    {
      name: 'Ultron',
      type: 'villian',
      power: 85
    }
  ];

  $scope.isOnTeam = (person) => {
    var search = person.name;


    var found = false;

    if ( person.type === 'villian' || person.type === 'both' ) {
      $scope.villians.forEach( (villian) => {
        if ( villian.name === search )
          found = 'villians';
      }); 
    }

    if (person.type === 'hero' || ( person.type === 'both' && !found ) ) {
      $scope.heroes.forEach( (hero) => {
        if ( hero.name === search )
          found = 'heroes';
      });
    }

    return found;
  }

  $scope.getTeamWithLeastPower = () => {
    let heroPoints = $scope.getTotalByType('heroes');
    let grandTotal = $scope.getGrandTotal();

    return (grandTotal - heroPoints) > heroPoints ? 'heroes' : 'villians';  
  }

  $scope.daysUntilAvengers = () => {
    var date1 = new Date();
    var date2 = new Date("04/23/2019");
    
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());

    return Math.ceil(timeDiff / (1000 * 3600 * 24)); 
  }

  $scope.getTotalByType = (type) => {
    let total = 0;

    $scope[type].forEach( (person) => {
      total += person.power;
    });

    return total;
  }

  $scope.getGrandTotal = () => {
    let total = 0;

    ['heroes', 'villians'].forEach( (type) => {
      $scope[type].forEach( (person) => {
        total += person.power;
      });
    })

    return total;
  }

  $scope.addPerson = (newHero) => {    
    $scope.people.push(angular.copy(newHero));
  };

  $scope.addHero = (person) => {
    if ( 
      person.type === 'villian' || 
      (person.type === 'both' && $scope.getTeamWithLeastPower() === 'villians')
    ) {
      $scope.villians.push(angular.copy(person));
    } else {
      $scope.heroes.push(angular.copy(person));  
    }
  };

  $scope.removeHero = (person) => {
    let search = person.name;

    if ( $scope.isOnTeam(person) === 'villians' ) {
      $scope.villians.forEach( (villian,index) => {
        if ( search === villian.name ) {
          $scope.villians.splice(index, 1);
        }
      });
    } 
    
    if ( $scope.isOnTeam(person) === 'heroes' ) {
      $scope.heroes.forEach( (hero, index) => {
        if ( search === hero.name ) {
          $scope.heroes.splice(index, 1);
        }
      });
    }
  };
}
angular
  .module("App")
  .controller("SuperHeroCtrl", ['$http',SuperHeroCtrl]);