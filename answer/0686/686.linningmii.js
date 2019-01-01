/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
const repeatedStringMatch = function (A, B) {
    if (A.length >= B.length) {
        if (A.indexOf(B) >= 0) {
            return 1;
        } else if (`${A}${A}`.indexOf(B) >= 0) {
            return 2;
        } else {
            return -1;
        }
    }

    let maxRepeatTime = Math.ceil(B.length * 2 / A.length);
    let repeatA = '';

    for (let i = 0; i < maxRepeatTime; i++) {
        repeatA += A;
    }

    const repeatIndex = repeatA.indexOf(B);

    if (repeatIndex === -1) {
        return -1;
    } else {
        return maxRepeatTime - Math.floor((repeatA.length - (repeatIndex + B.length)) / A.length);
    }
};

console.log(repeatedStringMatch('abcd', 'cdabcdab'));
console.log(repeatedStringMatch('aaaaaaaaaaaaaaaaaaaaaab', 'ba'));