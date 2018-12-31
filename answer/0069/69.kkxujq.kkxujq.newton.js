/**
 * @param {number} x
 * @return {number}
 */
/**
 * Newton's Method
 * https://www.guokr.com/question/461510/
 */
const mySqrt = function (x) {
  if (x === 0) return x;
    
  let xn = 1;

  while (Math.abs(xn * xn - x) >= 1) {
    xn = 0.5 * (xn + x / xn);
  }

  return Math.floor(xn);
};

console.log(mySqrt(177))