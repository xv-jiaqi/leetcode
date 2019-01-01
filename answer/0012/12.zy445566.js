/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let romanNum = '';
    while (num>0) {
        if (num>=1000) {romanNum+='M';num-=1000;continue;}
        if (num>=900) {romanNum+='CM';num-=900;continue;}
        if (num>=500) {romanNum+='D';num-=500;continue;}
        if (num>=400) {romanNum+='CD';num-=400;continue;}
        if (num>=100) {romanNum+='C';num-=100;continue;}
        if (num>=90) {romanNum+='XC';num-=90;continue;}
        if (num>=50) {romanNum+='L';num-=50;continue;}
        if (num>=40) {romanNum+='XL';num-=40;continue;}
        if (num>=10) {romanNum+='X';num-=10;continue;}
        if (num>=9) {romanNum+='IX';num-=9;continue;}
        if (num>=5) {romanNum+='V';num-=5;continue;}
        if (num>=4) {romanNum+='IV';num-=4;continue;}
        if (num>=1) {romanNum+='I';num-=1;continue;}
    }
    return romanNum;
};