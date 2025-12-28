function Counter() {
    let count = 0;

    function increment() {
        count++;
        return count;
    }
    return increment;
}

const hello = Counter();
console.log(hello());
console.log(hello());
console.log(hello());