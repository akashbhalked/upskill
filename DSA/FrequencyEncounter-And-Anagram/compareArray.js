/** Compare Two arrays
 * Write a function called same,which accepts two arrays. 
 * Function should retrun true if every value is the array has its corresponding value squared in the second array.
 * The frequency of values must be same 
 */
/* function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1)
    }
    return true;
} */

/** optimised solution */
function same(arr1, arr2) {
    //check length equality of both array
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    // form object with { key : numberOfOccuranceOfKeyInArray }
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for (let key in frequencyCounter1) {
        // check presence of key in both object
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        // check for obj1[key].value = obj2[key**2].value  
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}

console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 25]))  // true
console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]))  // false
console.log(same([1, 2, 3, 2], [9, 1, 4, 4]))         // true
console.log(same([1, 2, 3, 2], [9, 1, 4]))            // false
console.log(same([1, 2, 3, 2], [9, 1, 1, 4]))         // false