/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
    let len = 0

    s.split('').forEach((char, index) => {
        if (char === ' ' && s[index + 1] && s[index + 1].trim()) {
            len = 0
        } else if (char !== ' ') {
            len += 1
        }
    })

    return len
};
