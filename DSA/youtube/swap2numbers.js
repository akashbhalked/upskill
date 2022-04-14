function swap2Numbers(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
}
console.log(swap2Numbers(3, 4))