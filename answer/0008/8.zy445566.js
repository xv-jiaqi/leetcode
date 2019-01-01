/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let res = parseInt(str);
    if (isNaN(res)) {return 0}
    let rangeBlock = [-Math.pow(2,31),Math.pow(2,31)-1];
    if (res > rangeBlock[1]) {
        return rangeBlock[1];
    }
    if (res < rangeBlock[0]) {
        return rangeBlock[0]
    }
    return res
};