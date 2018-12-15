/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function (nums) {
    // set的去重复杂度是
    const set = new Set()

    return nums.find(num => {
        if (set.has(num)) {
            return num
        }
        set.add(num)
    })
};

console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([3, 1, 3, 4, 2]));