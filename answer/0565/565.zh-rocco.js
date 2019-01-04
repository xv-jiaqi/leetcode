/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
  let result = 0;
  const visited = new Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    while (!visited[i]) {
      visited[i] = true;
      count++;
      i = nums[i];
    }
    result = Math.max(result, count);
  }

  return result;
};
