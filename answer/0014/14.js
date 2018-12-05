/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let baseStr = strs.pop();
    if (baseStr==undefined) {
        return '';
    }
    let longestPrefix = '';
    for(let i= 0;i<baseStr.length;i++) {
        let isCommonPrefix = true;
        for (let j=0;j<strs.length;j++) {
            if (strs[j].length<i+1) {return longestPrefix;}
            if (strs[j][i]!=baseStr[i]) {
                isCommonPrefix = false;
            }
        }
        if (isCommonPrefix==true) {
            longestPrefix+=baseStr[i];
        } else {
            return longestPrefix;
        }
    }
    return longestPrefix;
};