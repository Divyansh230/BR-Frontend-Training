const dig_sum = (n) => {
    let s = 0;
    while (n != 0) {
        s += n % 10;
        n = n / 10;
    }
    return s;
}