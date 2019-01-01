/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let fourSumList = [];
    let fourSumListMap = {};
    nums.sort((a,b)=>{return a-b;});
    function beatRepeat(num1,num2,num3,num4) {
        let res = [num1,num2,num3,num4]; 
        let threeStr = res.join();
        if (!fourSumListMap[threeStr]) {
            fourSumListMap[threeStr] = true;
            fourSumList.push(res)
        }
    }
    for (let i=0;i<nums.length;i++) {
        for (let j=nums.length-1;j>i+1;j--) {
            for(let k=j-1;k>i;k--) {
                for (let h=k-1;h>i;h--) {
                    let sumRes = nums[i]+nums[h]+nums[k]+nums[j];
                    if (sumRes==target) {
                        beatRepeat(nums[i],nums[h],nums[k],nums[j])
                    }
                }
            }
        }
    }
    return fourSumList;
};