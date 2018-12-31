/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];
    let dps = function (start,list) {
        res.push(list);
        for (let i=start;i<nums.length;i++) {
            dps(i+1,[...list,nums[i]])
        }
    }
    dps(0,[])
    return res
};