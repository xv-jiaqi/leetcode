/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  const Ncount = A.length / 2;
  const cache = {};

  for (const a of A) {
    if (a.toString() in cache) {
      cache[a]++

      if (cache[a] === Ncount) return a;
    } else {
      cache[a] = 1;
    }
  }
};