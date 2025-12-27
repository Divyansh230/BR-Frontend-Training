let sum = 0;
for (let i = 0; i < 5; i++) {
    const num = Math.floor(Math.random() * 10) + 10;
    sum += num;
}
console.log(sum, (sum / 5).toPrecision(2));