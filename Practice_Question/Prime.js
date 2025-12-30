const is_prime = (n) => {

    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) return 0;
    }
    return 1;
}