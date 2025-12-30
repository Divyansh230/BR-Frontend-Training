const is_prime = (n) => {
    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) return false;
    }
    return true;
}
const first_p_prime = (n, p) => {
    let arr = [];
    let count = 0;
    let id = n + 1;
    while (count < = p) {
        if (is_prime(id))
    }
}