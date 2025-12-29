let a = 0;
let b = 1;
console.log(a);
console.log(b);
let c = 0;
for (let i = 2; i <= 10; i++) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
}