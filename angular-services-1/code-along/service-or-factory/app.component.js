angular
.module ('App')
.component ('demoComponent', component());

function component() {

    function componentController(service){
        var vm = this;

        vm.hello = true;
    
        vm.getGreeting = () => {
            return vm.hello ? service.getHello() : service.getGoodbye()
        }

        vm.toggleGreeting = () => vm.hello = !vm.hello;

        vm.goDown = () => {
            UpDownService.down();
        }
    }

    return {
        bindings: {},
        controller: ['ServiceService', componentController],
        template: `
            <div>
                {{$ctrl.getGreeting()}}
                <button ng-click="$ctrl.toggleGreeting()">Toggle Greeting</button>
            </div>
        `
    }
}