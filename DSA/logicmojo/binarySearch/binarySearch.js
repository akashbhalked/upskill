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