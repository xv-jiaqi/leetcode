/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let range = [-Math.pow(2,31),Math.pow(2,31)-1];
    let lteZero = false;  
    if (x<0) {lteZero =true;x=-x;}
    x = parseInt((x).toString().split('').reverse().join(''));
    if (lteZero) {x=-x;}
    if (x<range[0]) {return 0}
    if (x>range[1]) {return 0}
    return x;
};