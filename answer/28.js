/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
    const needleLength = needle.length;
    if (!needleLength) {
        return 0;
    }

    for (let i = 0; i <= haystack.length - needleLength; i++) {
        if (haystack.substr(i, needleLength) === needle) {
            return i;
        }
    }

    return -1;
};

console.log(strStr('hello', 'll'));
console.log(strStr('hello', 'wor'));
console.log(strStr('hello', ''));
console.log(strStr('a', 'a'));