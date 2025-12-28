const p1 = new Promise((resolve, reject) => {
    resolve("Hello");
});

console.log(p1);

const p2 = new Promise((resolve, reject) => {
    reject("Hello");
});

p2.then((res) => {
    console.log(res);

}).catch((error) => {
    console.log(error);
})