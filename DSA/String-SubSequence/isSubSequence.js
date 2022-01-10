/**
 * write a function which takes in two strings and checks in whether the characters in the first string
 * form a subsequence of the character in the second sunsequence. In other word cahraters in the first 
 * string appear some where in the second string without their order changing
 */
// iterative
function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}

// recursive but not O(N)
function isSubsequence(str1, str2) {
    if (str1.length === 0) return true
    if (str2.length === 0) return false
    if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
    return isSubsequence(str1, str2.slice(1))
}


isSubsequence("hello", "hello world")//true
isSubsequence("sing", "sting")//true
isSubsequence("abc", "abracd")//true
isSubsequence("abc", "acb")//false  --> order matters