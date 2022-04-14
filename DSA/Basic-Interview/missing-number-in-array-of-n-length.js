function missingNumbers(inputArray, n) {
    let missingNumbers = [];
    for (let i = 1; i <= n; i++) {
        if (!inputArray.includes(i)) {
            missingNumbers.push(i)
        }
    }
    return missingNumbers;

}

console.log(missingNumbers([2, 3, 1, 7, 5], 10))