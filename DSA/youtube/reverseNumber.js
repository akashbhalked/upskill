function reverse(num) {
    let mod;
    let rev = 0;
    while (num > 0) {
        mod = num % 10;
        rev = rev * 10 + mod;
        num = Math.floor(num / 10);
    }
    return rev; //951
}
console.log(reverse(15967));