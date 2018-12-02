/**
 * @param {string} s
 * @return {boolean}
 */
const checkRecord = function (s) {
    const charList = Array.from(s);
    let alreadyHaveOneAbsent = false;

    return charList.every((char, index) => {
        if (char === 'A') {
            alreadyHaveOneAbsent = !alreadyHaveOneAbsent
            return alreadyHaveOneAbsent
        }

        if (char === 'L') {
            return !(`${char}${charList[index + 1]}${charList[index + 2]}` === 'LLL');
        }

        return true;
    });
};

console.log(checkRecord('PPALLP'));
console.log(checkRecord('PPALLL'));
console.log(checkRecord('LALL'));
console.log(checkRecord('AAAA'))