function find_positive(arr) {
    return arr.filter((num) => num >= 0)
}

const arr = [10, 0, -1, -2, 5];
console.log(find_positive(arr));