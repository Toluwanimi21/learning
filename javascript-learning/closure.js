function sayHello(name) {
    return function() {
        console.log("howdy " + name);
    }
}

let bobby = sayHello("bobby");
let cornard = sayHello("cornard");
let grant = sayHello("grant");

bobby();
cornard();
grant();