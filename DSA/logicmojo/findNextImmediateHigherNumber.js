function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function findNextImmediateHigherNumber(array, n) {
    let i;
    for (i = n - 1; i > 0; i--) {
        if (array[i] > array[i - 1]) {
            break;
        }
    }
    let res = []
    if (i == 0) {
        return -1; //not possible
    } else {
        let x = array[i - 1],
            min = i;
        for (j = i + 1; j < n; j++) {
            if (array[j] > x && array[j] < array[min]) {
                min = j;
            }
        }
        swap(array, i - 1, min);
        let resp = array.map(i => Number(i));
        for (i = 0; i < n; i++)
            res.push(resp[i]);
    }
    return res.join("");
}
let arr = ['2', '1', '8', '7', '6', '5'];
let n = arr.length;
console.log(findNextNumber(arr, n)); //input 218765--> output 258761