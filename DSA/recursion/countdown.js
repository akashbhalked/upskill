function countDown(n) {
    if (n <= 0) {
        console.log(n);
        return;
    }
    console.log(n);
    n--;
    countDown(n);

}
console.log(countDown(4))