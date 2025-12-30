const is_prime = (n) => {
    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

let alpha = 0;

let id = 2;
while (alpha <= 100) {
    if (is_prime(id)) {
        console.log(id);
        alpha++;
    }
    id++;
}