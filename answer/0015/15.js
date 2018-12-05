/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let threeSumList = [];
    let threeSumListMap = {};
    function beatRepeat(num1,num2,num3) {
        let res = [num1,num2,num3]; 
        let threeStr = res.join();
        if (!threeSumListMap[threeStr]) {
            threeSumListMap[threeStr] = true;
            threeSumList.push(res)
        }
    }
    nums.sort((a,b)=>{return a-b;});
    if (nums[0]==0 && nums[nums.length-1]==0) {
        if (nums.length>=3) {
            return [[0,0,0]]
        } else {
            return [];
        }
    }
    for (let i=0;i<nums.length,nums[i]<=0;i++) {
        if (i>0) {while(nums[i]==nums[i-1]){i++;}}
        for (let j=nums.length-1;j>i+1;j--) {
            if ((nums[i]+nums[j-1]+nums[j])<0){break;}
            let incj = j-i;
            while (nums[j]+2*nums[i]>0) {
                j--;
                let zj = j-Math.floor(incj/2);
                if (nums[zj]+2*nums[i]>0) {
                    j=zj;
                }
                incj = incj/2;
                if (j<=i+1) {break;}
            }
            if (j<=i+1) {break;}
            for (let k=j-1;k>i;k--) {
                let inc = k-i;
                while (nums[i]+nums[k]+nums[j]>0) {
                    k--;
                    let zk = k-Math.floor(inc/2);
                    if (nums[i]+nums[zk]+nums[j]>0) {
                        k=zk;
                    }
                    inc = inc/2;
                    if (k<=i) {break;}
                }
                if (k<=i) {break;}
                let sumRes = nums[i]+nums[k]+nums[j];
                if (sumRes<0){break;}
                if (sumRes==0) {
                    beatRepeat(nums[i],nums[k],nums[j])
                }
            }
        }
    }
    return threeSumList;
};