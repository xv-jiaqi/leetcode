/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let num = 0
    let strList = s.split('');
    while (strList.length>0) {
        if (strList[0]=='M') {strList.shift();num+=1000;continue;}
        if ((strList[0]+strList[1])=='CM') {strList.shift();strList.shift();num+=900;continue;}
        if (strList[0]=='D') {strList.shift();num+=500;continue;}
        if ((strList[0]+strList[1])=='CD') {strList.shift();strList.shift();num+=400;continue;}
        if (strList[0]=='C') {strList.shift();num+=100;continue;}
        if ((strList[0]+strList[1])=='XC') {strList.shift();strList.shift();num+=90;continue;}
        if (strList[0]=='L') {strList.shift();num+=50;continue;}
        if ((strList[0]+strList[1])=='XL') {strList.shift();strList.shift();num+=40;continue;}
        if (strList[0]=='X') {strList.shift();num+=10;continue;}
        if ((strList[0]+strList[1])=='IX') {strList.shift();strList.shift();num+=9;continue;}
        if (strList[0]=='V') {strList.shift();num+=5;continue;}
        if ((strList[0]+strList[1])=='IV') {strList.shift();strList.shift();num+=4;continue;}
        if (strList[0]=='I') {strList.shift();num+=1;continue;}
    }
    return num;
};