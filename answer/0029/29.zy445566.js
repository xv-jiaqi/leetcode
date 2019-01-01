/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let fh = true;
    if (dividend<0) {
        dividend = - dividend;
        fh = false;
    }
    if (divisor<0) {
        divisor =  - divisor;
        fh = !fh;
    }
    let res = 0;
    while (dividend>=divisor) {
        let doubleisor = divisor;
        let doubleRes = 1;
        while (dividend>=doubleisor) {
            // can't use << ,because max is Math.pow(2,31) and sign
            let tmpDoubleisor = doubleisor+doubleisor;
            let tmpDoubleRes = doubleRes+doubleRes;
            if (dividend>=tmpDoubleisor) {
                doubleisor = tmpDoubleisor;
                doubleRes = tmpDoubleRes;
            } else {
                dividend-=doubleisor;
                res+=doubleRes;
            }
        }
        
    }
    let max = Math.pow(2,31)-1;
    let min = Math.pow(2,31);
    if (fh && res > max) {
        return max;
    }
    if (!fh && res > min) {
        return -min;
    }
    return fh?res:-res;
    
};