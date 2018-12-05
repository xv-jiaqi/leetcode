/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let map = {
        '2':'abc',
        '3':'def',
        '4':'ghi',
        '5':'jkl',
        '6':'mno',
        '7':'pqrs',
        '8':'tuv',
        '9':'wxyz',
    }
    let resList = [];
    let tmpList = resList;
    for(let i=0;i<digits.length;i++) {
        resList = [];
        for(let j=0;j<map[digits[i]].length;j++) {
            if (i==0) {
                resList.push(map[digits[i]][j]);
            } else {
                for(let k=0;k<tmpList.length;k++) {
                    resList.push(tmpList[k]+map[digits[i]][j]);
                }
            }
        }
        tmpList = resList;
    }
    return resList;
};