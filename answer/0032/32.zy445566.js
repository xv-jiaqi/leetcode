/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let maxLen = 0;
    for(let i=0;i<s.length;i++) {
        let tmpLen = 0;
        let nextExp = 0; 
        for(let j=i;j<s.length;j++) {
            if (s[j]=='(') {
                nextExp++;
            } else {
                if (nextExp>0) {
                    nextExp--;
                    if (nextExp==0) {
                        tmpLen = j-i+1;
                        if (tmpLen>maxLen) {
                            maxLen = tmpLen;
                        }
                    }
                } else {
                    break;
                }
            }
        } 
    }
    return maxLen;
};