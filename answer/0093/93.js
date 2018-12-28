/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let rightList = [];
    function lineStr(s,index,need) {
        let endIndex = index+need;
        let tmpStr = '';
        for (let i=index;i<endIndex;i++) {
            if (i>=s.length) {return false;}
            tmpStr+=s[i]
        }
        return tmpStr;
    }
    function checkAIP(num) {
        if (num>255 || (num.length>1 && num[0]=='0')) 
        {
            return true;
        }
        return false;
    }
    let cache = {};
    for(let i = 1;i<=3;i++) {
        for (let j = 1;j<=3;j++) {
            for (let k = 1;k<=3;k++) {
                for (let l = 1;l<=3;l++) {
                    if (i+j+k+l!=s.length){continue;}
                    let a = lineStr(s,0,i);
                    if (checkAIP(a)) {continue;}
                    let b = lineStr(s,i,j);
                    if (checkAIP(b)) {continue;}
                    let c = lineStr(s,i+j,k);
                    if (checkAIP(c)) {continue;}
                    let d = lineStr(s,i+j+k,l);
                    if (checkAIP(d)) {continue;}
                    let ip = `${a}.${b}.${c}.${d}`;
                    if (!cache[ip]) {
                        cache[ip] = true;
                        rightList.push(ip)
                    }
                }
            }
        }
    }
    return rightList;
};