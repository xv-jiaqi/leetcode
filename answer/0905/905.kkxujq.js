/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  const cacheArr = [];

  for (const a of A) {
    if (a % 2) {
      cacheArr.push(a);
    } else {
      cacheArr.unshift(a);
    }
  }

  return cacheArr;
};