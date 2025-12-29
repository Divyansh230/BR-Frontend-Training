let arr = []
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 1000) + 10);
}
let sum = 0;
for (num of arr) {
    sum += num;
}
console.log(sum);