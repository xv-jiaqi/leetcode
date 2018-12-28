/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    let changeIndex = function(list,i,j) {
        if (i==j) return false;
        list[i] = list[i]+list[j];
        list[j] = list[i] -list[j];
        list[i] = list[i] -list[j];
        return true;
    }
    let backRoll = function (start,oneRes,isPush) {
        if (isPush) {res.push(oneRes);}
        for (let i=start;i<nums.length;i++) {
            let tmpRes  = [...oneRes];
            isPush = changeIndex(tmpRes,start,i);
            backRoll(start+1,tmpRes,isPush);
        }
    }
    backRoll(0,[...nums],true);
    return res;
};