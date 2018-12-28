/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    function reverseByIndex(index) {
        for(let k=index,h=1;k<nums.length;k++,h++) {
            if (k>=nums.length-h) {break;}
            changeNum(k,nums.length-h);
        }
    }
    function changeNum(m,n) {
        let tmpNum = nums[m];
        nums[m] = nums[n];
        nums[n] = tmpNum;
    }
    if (nums.length<2) {return;}
    let notExist = true;
    for(let i=nums.length-1;i>0;i--) {
        if (nums[i-1]<nums[i]) {
            notExist = false;
            for(let j=i;j<nums.length;j++) {
                if(nums[j]-nums[i-1]<=0) {
                    changeNum(j-1,i-1);
                    reverseByIndex(i);
                    break;
                }
                if (j==nums.length-1) {
                    changeNum(j,i-1);
                    reverseByIndex(i);
                }
            }
            break;
        }
    }
    if(notExist){nums.sort((a,b)=>a-b)}
    return;
};