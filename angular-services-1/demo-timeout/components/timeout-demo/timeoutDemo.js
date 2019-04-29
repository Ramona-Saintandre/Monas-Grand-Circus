angular
.module ('App')
.component ('timeoutDemo', component());

function component() {

    function componentController($timeout, $scope){
        $scope.time = 0;
        $scope.something = false;

        countUp = function() {
            $scope.time++;
            $timeout(countUp, 1000);
        }
    

        countUpLame = function() {
            $scope.time++;
            setTimeout(countUpLame, 1000);
        }

        $scope.changeSomething = function() {
            $scope.something = !$scope.something;
        }

        $timeout(countUp, 1000);
       // setTimeout(countUpLame, 1000);
    }

    return {
        bindings: {},
        controller: componentController,
        template: `
            <div>
                {{time}}

                <!-- <button ng-click="changeSomething()">Trigger change</button> -->
            </div>
        `
    }
}