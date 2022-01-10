/**
 * Given a sorted array, write a function called search, that accepts a value and return the index
 * where the value passed to the function is located,if the value is not found return -1
 */
//linear search  --> loop through complete array(time consuming as array length increses)
function search(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1
}

search([2,6,9,2,1,8,5,6,3],3)
//revisit this code as its not working as expected
//binary search  --> divide and conquer(keep dividing array into half to find last min sub array having value to be searched)

// function search(arr, value) {
//     let min = 0;
//     let max = arr.length - 1;
//     while (min <= max) {
//         let middle = Math.floor((min + max) / 2)
//         let currentElement = arr[middle]
//         if (arr[middle] < value) {
//             min = middle + 1;
//         } else if (arr[middle] > value) {
//             max = middle - 1
//         } else {
//             return middle
//         }
//     }
//     return -1
// }