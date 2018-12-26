/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let tempStr = '';
  const subNum = 32;
  const aCode = 'A'.codePointAt(),
    zCode = 'Z'.codePointAt();

  for (const chars of str) {
    let cCode = chars.codePointAt();

    if (cCode >= aCode && cCode <= zCode) {
      tempStr += String.fromCodePoint(cCode + subNum);
    } else {
      tempStr += chars;
    }
  }

  return tempStr;
};