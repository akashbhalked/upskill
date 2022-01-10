/***
 * write a function which will return array of first pair of elements which will return zero upon addition
 * input -> sorted array
 */
//traditional way -->Big O notation O(N*2)
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }
    }
}
// refactored code with -->Big O notation O(N)
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}


console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) //[-3, 3]
console.log(sumZero([-3, -2, -1, 0, 1, 4, 10]))//[-1, 1]

/***
 * write a function which will return array of pairs of elements which will return zero upon addition
 * input -> sorted array
 */
function sumZero(arr) {
    let resultArray = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                resultArray.push([arr[i], arr[j]])
            }
        }
    }
    return resultArray
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) // [[-3,3],[-2,2],[-1,1]]