function component() {
    function componentController($scope){
        var vm = this;
        
        $scope.count = 0;

        vm.goUp = () => {
            $scope.count += 10;
        }

        vm.goDown = () => {
            $scope.count -= 10;
        }
    }

    return {
        bindings: {},
        controller: componentController,
        template: `
            <div>
                <button ng-click="$ctrl.goUp()">Up</button>
            </div>
            <div>{{count}}</div>
            <div>
                <button ng-click="$ctrl.goDown()">Down</button>
            </div>

            <div>
            <label>
                Click inside of the input to expand it

                <input expand-on-focus count="count" />
                </p>
                
            </label>
        </div>
        `
    }
}

angular
.module ('InputExample')
.component ('upDownCounter', component());