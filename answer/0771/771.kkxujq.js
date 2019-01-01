/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let count = 0;
    J = Array.from(J);

    [...S].forEach(chart => {
      if (J.includes(chart)) 
        count++;
    });

    return count;
};