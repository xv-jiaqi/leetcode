/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {}
    for(let i=0;i<nums.length;i++) {
        let findNum = target-nums[i];
        if (map.hasOwnProperty(findNum)) {
            return [map[findNum],i]
        }
        map[nums[i]] = i;
    }
};