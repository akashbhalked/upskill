/**
 * implement a function called countUniqueValue,which accepts sorted array, and counts the unique values
 * in the array, there can be negative values as well
 */
 function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}

// Another way
function countUniqueValues(arr){
    let frequencyCounter = {}
    for (let val of arr) {
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1
    }
    return Object.keys(frequencyCounter1).length
}

// using spread operator
function countUniqueValues(arr){
    return [...new Set(arr)].length
}

countUniqueValues([1,2,2,5,7,7,99])