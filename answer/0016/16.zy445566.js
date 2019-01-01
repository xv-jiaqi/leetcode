/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let tmp = Infinity;
    let anwser = [];
    for (let i=0;i<nums.length;i++) {
        for (let j=nums.length-1;j>i;j--) {
            for (let k=j-1;k>i;k--) {
                let resSum = nums[i]+nums[k]+nums[j];
                let absTmp = Math.abs(resSum-target);
                if (absTmp<tmp) {
                    tmp = absTmp;
                    anwser = resSum;
                }
            }
        }
    }
    return anwser;
};