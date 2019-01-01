/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let block =[];
    let rowKey = 0;
    block[rowKey]=[];
    let modNum = numRows-1;
    for (let i=0;i<s.length;i++) {
        let resKey = modNum==0?0:rowKey%modNum;
        if(resKey==0){
            block[rowKey].push(s[i])
        } else {
            block[rowKey].length = numRows;
            block[rowKey].fill('')
            block[rowKey][modNum-resKey] = s[i];
        }
        if (block[rowKey].length>=numRows) {
            rowKey++;
            block[rowKey]=[];
        }
    }
    let resList = [];
    for(let i=0;i<numRows;i++) {
        for(let j=0;j<block.length;j++) {
            if(block[j][i]==undefined){continue;}
            resList.push(block[j][i]);
        }
    }
    return resList.join('');
};