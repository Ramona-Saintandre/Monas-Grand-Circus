function component() {
    function componentController(){
        var vm = this;
        
        vm.count = 0;

        vm.goUp = () => {
            vm.count++;
        }

        vm.goDown = () => {
            vm.count--;
        }
    }

    return {
        bindings: {},
        controller: componentController,
        template: `
            <div>
                <button ng-click="$ctrl.goUp()">Up</button>
            </div>
            <div>{{$ctrl.count}}</div>
            <div>
                <button ng-click="$ctrl.goDown()">Down</button>
            </div>
        `
    }
}

angular
.module ('App')
.component ('upDownCounter', component());