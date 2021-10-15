function reverseString(str) {
    newStr = '';
    /**
    for (i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
     */
    for (c of str) {
        newStr = c + newStr
    }
    return newStr;
}

console.log(reverseString('Akash'))