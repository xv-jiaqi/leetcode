/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = function (nums) {
    const threshold = nums.length / 3;
    const counter = {};
    const result = [];

    nums.forEach(num => {
        // If the element has already satisfied the condition, the counter will be set to -1
        if (counter[num] === -1) {
            return;
        }

        if (counter[num]) {
            counter[num]++;
        } else {
            counter[num] = 1;
        }

        if (counter[num] > threshold) {
            result.push(num);
            counter[num] = -1;
        }
    });

    return result;
};

console.log(majorityElement([3, 2, 3], [3]));
console.log(majorityElement([1, 1, 1, 3, 3, 2, 2, 2], [1, 2]));