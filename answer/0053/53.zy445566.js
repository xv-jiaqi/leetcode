/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Infinity;
    let add = 0;
    for (let i=0;i<nums.length;i++) {
        add +=nums[i];
        if (max<add) {
            max = add;
        }
        if (add<0) {add=0;}
    }
    return max;
};
