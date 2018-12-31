/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let resList = [];
    let n2 = n*2;
    let bNumList = [];bNumList.length = n2;
    bNumList.fill('0');bNumList[0] = 1;
    let bNumStr = bNumList.join('');
    let minNum = parseInt(bNumStr,2);
    bNumStr = bNumList.fill('1',0,n).join('');
    let maxNum = parseInt(bNumStr,2);
    let tmpList = []
    for (let i=minNum;i<=maxNum;i+=2) {
        tmpList.push(i.toString(2))
    }
    for (let i=0;i<tmpList.length;i++) {
        let expToken = 0;
        let itemStr = [];
        for (let j=0;j<n2;j++) {
            if (tmpList[i][j]=='1') {
                expToken++;
                itemStr.push('(')
            } else {
                expToken--;
                itemStr.push(')')
                if (expToken<0) {
                    break;
                }
            }
        }
        if (expToken == 0) {
            resList.push(itemStr.join(''))
        }
    }
    return resList;
};