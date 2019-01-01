/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max_len = 0;
    function getCharIn(str,char) {
        for(let k=0;k<str.length;k++) {
            if (char==str[k]) {
                return k;
            }
        }
        return -1;
    }
    for(let i=0;i<s.length;i++) {
        let tmp_str = '';
        for(let j=i;j<s.length;j++) {
            let char_index = getCharIn(tmp_str,s[j]);
            if (char_index>=0) {
                if(j-i>max_len){
                    max_len=j-i;
                }
                break;
            }
            tmp_str+=s[j];
        }
        if (tmp_str.length>max_len) {
            max_len = tmp_str.length;
        }
    }
    return max_len;
};