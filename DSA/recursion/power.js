//recursion
function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}


// function power(a,n){
//     return Math.pow(a,n)
// }

console.log(power(2,3))