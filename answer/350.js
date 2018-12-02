/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
    const sortedNums1 = nums1.slice().sort((pre, next) => pre - next);
    const sortedNums2 = nums2.slice().sort((pre, next) => pre - next);

    const theLongerOne = sortedNums1.length >= sortedNums2.length ? sortedNums1 : sortedNums2;
    const theShorterOne = sortedNums1.length < sortedNums2.length ? sortedNums1 : sortedNums2;

    const result = [];
    let longerIndex = 0;
    let shorterIndex = 0;

    while (longerIndex < theLongerOne.length && shorterIndex < theShorterOne.length) {
        if (theLongerOne[longerIndex] === theShorterOne[shorterIndex]) {
            result.push(theLongerOne[longerIndex]);
            longerIndex++;
            shorterIndex++;
        }

        if (theLongerOne[longerIndex] < theShorterOne[shorterIndex]) {
            longerIndex++;
        }

        if (theShorterOne[shorterIndex] < theLongerOne[longerIndex]) {
            shorterIndex++;
        }
    }

    return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersect([1, 2], [1, 1]));
console.log(intersect([9, 3, 7], [6, 4, 1, 0, 0, 4, 4, 8, 7]));
console.log(intersect(
    [61, 24, 20, 58, 95, 53, 17, 32, 45, 85, 70, 20, 83, 62, 35, 89, 5, 95, 12, 86, 58, 77, 30, 64, 46, 13, 5, 92, 67, 40, 20, 38, 31, 18, 89, 85, 7, 30, 67, 34, 62, 35, 47, 98, 3, 41, 53, 26, 66, 40, 54, 44, 57, 46, 70, 60, 4, 63, 82, 42, 65, 59, 17, 98, 29, 72, 1, 96, 82, 66, 98, 6, 92, 31, 43, 81, 88, 60, 10, 55, 66, 82, 0, 79, 11, 81],
    [5, 25, 4, 39, 57, 49, 93, 79, 7, 8, 49, 89, 2, 7, 73, 88, 45, 15, 34, 92, 84, 38, 85, 34, 16, 6, 99, 0, 2, 36, 68, 52, 73, 50, 77, 44, 61, 48]
));