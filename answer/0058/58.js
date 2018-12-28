/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let sList = s.split(' ');
    for(let i=sList.length-1;i>=0;i--) {
        if(sList[i].length>0) {
            return sList[i].length;
        }
    }
    return 0;
};