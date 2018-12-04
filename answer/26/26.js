/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    let i = 0;
    while (i < nums.length) {
        if (i === 0) {
            i++;
        }

        if (nums[i - 1] === nums[i]) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }
};

const input = [1, 1, 2];
removeDuplicates(input);
console.log(input);
