/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === val) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }

    return nums.length
};

const input = [1, 1, 2];
removeElement(input, 1);
console.log(input);