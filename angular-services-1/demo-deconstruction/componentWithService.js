angular
.module ('App')
.component ('upDownCounterWService', component());

function component() {

    function componentController(UpDownService){
        var vm = this;

        vm.getCount = () => {
            return UpDownService.getCount();
        }

        vm.goUp = () => {
            UpDownService.up();
        }

        vm.goDown = () => {
            UpDownService.down();
        }
    }

    return {
        bindings: {},
        controller: componentController,
        template: `
            <div>
                <button ng-click="$ctrl.goUp()">Up</button>
                {{$ctrl.getCount()}}
                <button ng-click="$ctrl.goDown()">Down</button>
            </div>
        `
    }
}