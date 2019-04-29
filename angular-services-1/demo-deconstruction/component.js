 angular
.module ('App')
.component ('upDownCounter', component());

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
                {{$ctrl.count}}
                <button ng-click="$ctrl.goDown()">Down</button>
            </div>
        `
    }
}