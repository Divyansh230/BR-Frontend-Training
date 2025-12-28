const n = Math.floor(Math.random() * 1000) + 10;

const is_Palidrome = (num) => {
    const str = num.toString();

    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) return false;
        start++;
        end--;
    }
    return true;
}

if (is_Palidrome(n)) console.log(`${n} is a Palindrome Number`);
else console.log(`${n} is not a Palindrome number`);