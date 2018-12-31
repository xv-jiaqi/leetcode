/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
    const range = [];
    nums.some((num, index) => {
        if (num !== target) {
            return;
        }

        if (index === 0) {
            range.push(0);
        }

        if (nums[index - 1] < target) {
            range.push(index);
        }

        if (index + 1 === nums.length) {
            range.push(index);
            return true;
        }

        if (nums[index + 1] > target) {
            range.push(index);
            return true;
        }
    });

    if (!range.length) {
        return [-1, -1];
    }
    return range;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([0], 0));