let obj = {
    this: 'hello',
    that: () => {}
};

let map = new Map();
map.set('this', 'that');

let that = () => {};

map.set(that, 'hello');

let thisthing = map.get('this');
let thatthing = map.get(that);

console.log(thatthing);

/*
How a cache (which is an example of a Map used in real life)
let cache = new Cache();

obj = reallyExpensiveQuery(); // 10 seconds
cache.set('obj', obj, 30);

function onUpdate(newVersion, oldVersion) {
    if ( newVersion !== oldVersion  ) {
        cache.delete('obj');
    }
}
*/



