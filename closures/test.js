function Counter() {
    function Increment() {
        console.log("I am Increment");

    }
    Increment();
}

//Counter();

function Counter() {
    function Increment() {
        console.log("I am Increment");

    }
    return Increment;
}

const hello = Counter();
console.log(hello());

function Counter() {
    function Increment() {
        console.log("I am Increment");
        return 20;
    }
    return Increment;
}

const world = Counter();
console.log(world);