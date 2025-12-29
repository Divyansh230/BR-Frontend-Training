let arr = []
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 100));
}

let sum_of_arr = (arr) => {
    let sum = 0;
    for (num of arr) {
        sum += num;
    }
    return sum;
}


console.log(`Average of the Arrays elements ${sum_of_arr(arr)/10}`)