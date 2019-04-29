angular
    .module('App')
    .service('UpDownService', service)

function service() {
    this.count = 0;

    this.getCount = () => {
        return this.count
    }

    this.up = () => {
        this.count++;
    }

    this.down = () => {
        this.count--;
    }
}