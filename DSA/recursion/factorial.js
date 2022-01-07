/**
 * @Description generic method 
 * @param {*} n 
 * @returns 
 */
/** 
function fact(n) {
    let factorial = 1;
    for (let i = n; i > 1; i--) {
        factorial *= i;
    }
    return factorial;
}
*/
/** recusrion method */
function factorial(x){
    if (x < 0 ) return 0;
    if (x <= 1 ) return 1;
    return x * factorial(x-1);
 }
console.log(fact(3))