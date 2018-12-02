/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
    const index = nums.findIndex((num) => {
        if (num < target) {
            return false;
        } else {
            return true;
        }
    });

    return index === -1 ? nums.length : index;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 0));