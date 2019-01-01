/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const { floor } = Math;
  const rowSet = new Set();
  const colGroupSet = {
    0: new Set(),
    1: new Set(),
    2: new Set(),
    3: new Set(),
    4: new Set(),
    5: new Set(),
    6: new Set(),
    7: new Set(),
    8: new Set(),
  };
  const cellGroupSet = {
    '00': new Set(),
    '01': new Set(),
    '02': new Set(),
    '10': new Set(),
    '11': new Set(),
    '12': new Set(),
    '20': new Set(),
    '21': new Set(),
    '22': new Set(),
  };

  for (let colI = 0; colI < 9; colI++) {
    for (let rowI = 0; rowI < 9; rowI++) {
      const cell = +board[colI][rowI];

      if (Number.isInteger(cell)) {
        if (rowSet.has(cell)) return false;
        else rowSet.add(cell);

        if (colGroupSet[rowI].has(cell)) return false;
        else colGroupSet[rowI].add(cell);

        const cellI = `${floor(colI / 3)}${floor(rowI / 3)}`;
        if (cellGroupSet[cellI].has(cell)) return false;
        else cellGroupSet[cellI].add(cell);
      }
    }

    rowSet.clear();
  }

  return true;
};