function addN(n) {
    total = 0;
    for (i = 1; i <= n; i++) {
        total = total + i;
    }
    return total
}
console.log(addN(5))