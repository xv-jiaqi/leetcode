/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) {return false;}
    if (x%10==0 && x!=0) {return false;}
    let reverseNum = 0;
    let tmpNum = x;
    while (tmpNum>0) {
        reverseNum = reverseNum*10 + (tmpNum%10);
        tmpNum=Math.floor(tmpNum/10);
    }
    return reverseNum==x
};