const is_prime = (num) => {
    //const c = 0;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) return false;
    }
    return true;
}

const is_Palidrome = (num) => {
    let str = num.toString();
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] != str[end]) return false;
        start++;
        end--;
    }
    return true;
}

const num = Math.floor(Math.random() * 100) + 10;

if (is_Palidrome(num) && is_prime(num)) {
    console.log("Found");
} else {
    console.log("Not Found");
}