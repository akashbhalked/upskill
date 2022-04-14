function findDuplicate(arr) {
    let duplicateNumbers = [];
    let obj = {}
    for (let i of arr) {
        (obj[i]) ? obj[i] += 1: obj[i] = 1;
    };
    for (let key in obj) {
        if (obj[key] > 1) duplicateNumbers.push(key)
    }
    return duplicateNumbers;
}
console.log(findDuplicate([9, 1, 4, 2, 4, 10, 6, 6]))