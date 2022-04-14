// Array should be sorted always
//Bottom - up:
function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === val) {
            return mid;
        }
        if (val < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

//Recursive:
function binarySearch(arr, val, start = 0, end = arr.length - 1) {
    const mid = Math.floor((start + end) / 2);
    if (val === arr[mid]) {
        return mid;
    }
    if (start >= end) {
        return -1;
    }
    return val < arr[mid] ? binarySearch(arr, val, start, mid - 1) : binarySearch(arr, val, mid + 1, end);
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 8)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 2)); //2


/**One array of integers is given as an input ,which is initially increasing and then decreasing or it can be only 
 *increasing or decreasing, you need to find the maximum value in the array in O(Log n) 
 * Time complexity and O(1) Space Complexity Asked in
 */
function findMaximumValue(array, low, high) {
    /*Only one element is present in array1[low..high]*/
    if (low == high)
        return array[low];

    /* If there are two elements and first is greater then  
        the first element is maximum */
    if ((high == low + 1) && array[low] >= array[high])
        return array[low];

    /* If there are two elements and second is greater then  
        the second element is maximum */
    if ((high == low + 1) && array[low] < array[high])
        return array[high];

    let mid = Math.floor((low + high) / 2); /*low + (high - low)/2;*/

    /* If we reach a point where array1[mid] is greater than both of  its adjacent elements array1[mid-1] and array1[mid+1], then array1[mid]  
        is the maximum element*/
    if (array[mid] > array[mid + 1] && array[mid] > array[mid - 1])
        return array[mid];

    /* If array1[mid] is greater than the next 
        element and smaller than the previous  
        element then maximum lies on left side of mid */
    if (array[mid] > array[mid + 1] && array[mid] < array[mid - 1])
        return findMaximumValue(array, low, mid - 1);

    // when array1[mid] is greater than array1[mid-1] 
    else
        return findMaximumValue(array, mid + 1, high);
}



let arr = [1, 3, 50, 10, 9, 7, 6]
console.log(findMaximumValue(arr, 0, arr.length - 1)) // 50





/**
 * Array consist of only 0's, 1's and 2's. 
 * Write an algorithm to sort  this array in O(n) time complexity and O(1) Space complexity with only one traversal
 */
function Sort(array, end) {
    let start = 0,
        mid = 0;
    let pivot = 1;

    while (mid <= end) {
        if (array[mid] < pivot) { //current element is 0
            swap(array, start, mid);
            ++start;
            ++mid;
        } else if (array[mid] > pivot) { //current element is 2
            swap(array, mid, end);
            --end;
        } else //current element is 1
            ++mid;
    }
    return array
}
//Function to swap two elements array[i] and array[j] in the array
function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;

}

let array = [2, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];

console.log(Sort(array, array.length - 1)) //[0, 0, 0, 0, 1,1, 1, 1, 1, 2,2, 2]