/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    const visitedRightSideIndex = [];

    if (typeof s !== 'string') {
        return false;
    }

    if (s.length % 2 !== 0) {
        return false;
    }

    if (!s) {
        return true;
    }

    const charList = Array.from(s);

    return charList.every((char, index) => {
        console.log(index, char, visitedRightSideIndex)
        return findValidRightSide(visitedRightSideIndex, charList, index, char);
    });
};

function findValidRightSide(visitedRightSideIndex, charList, index, leftSide) {
    if (index >= charList.length) {
        return false;
    }

    if (visitedRightSideIndex.includes(index)) {
        return true;
    }

    let rightSide = '';
    switch (leftSide) {
        case '(':
            rightSide = ')';
            break;
        case '[':
            rightSide = ']';
            break;
        case '{':
            rightSide = '}';
            break;
        default:
            return false;
    }

    if (charList[index + 1] === rightSide) {
        visitedRightSideIndex.push(index + 1);
        return true;
    } else {
        return findValidRightSide(visitedRightSideIndex, charList, index + 2, leftSide);
    }
}

console.log(isValid('[({(())}[()])]'));