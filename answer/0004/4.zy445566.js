/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let new_nums = [...nums1,...nums2];
    new_nums.sort((a,b)=>{
        return a-b;
    });
    if(new_nums.length%2==0) {
        return (new_nums[new_nums.length/2-1]+new_nums[new_nums.length/2])/2;
    } else {
        return new_nums[Math.floor(new_nums.length/2)];
    }
};