/**
 * @param {number} num
 * @return {number}
 */
const maximumSwap = function (num) {
    const numDigitList = Array.from(num.toString()).map(numStr => parseInt(numStr));
    const maxDigit = Math.max(...numDigitList);
    const maxDigitIndexList = [];
    numDigitList.forEach((digit, index) => {
        if (digit === maxDigit) {
            maxDigitIndexList.push(index);
        }
    });

    if (numDigitList[0] === maxDigit) {
        const lastPartOfNumber = parseInt(numDigitList.slice(1).join(''));
        console.log(lastPartOfNumber);
        return parseInt(`${numDigitList[0]}${lastPartOfNumber ? maximumSwap(lastPartOfNumber) : numDigitList.slice(1).join('')}`);
    }

    const resultDigitList = numDigitList.slice();
    resultDigitList[0] = maxDigit;
    resultDigitList[maxDigitIndexList[maxDigitIndexList.length - 1]] = numDigitList[0];
    return parseInt(resultDigitList.join(''));
};

// console.log(maximumSwap(2736));
// console.log(maximumSwap(9973));
// console.log(maximumSwap(98863));
// console.log(maximumSwap(100));
console.log(maximumSwap(99901));