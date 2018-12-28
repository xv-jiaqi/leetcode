/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const { floor } = Math;
  const seeds = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const row = {
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

  const col = {
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

  const cellGroup = {
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

  let solveSeeds = new Map();

  for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
    for (let colIndex = 0; colIndex < 9; colIndex++) {
      const cell = +board[rowIndex][colIndex];
      const groupId = calcGroupId(rowIndex, colIndex);

      if (Number.isInteger(cell)) {
        row[rowIndex].add(cell);

        col[colIndex].add(cell);

        cellGroup[groupId].add(cell);

        solveSeeds = clearSolveSeeds(rowIndex, colIndex, groupId, cell, solveSeeds);
      } else {
        const solveId = `${rowIndex}${colIndex}`;
        const seeds = calcSeed(rowIndex, colIndex, groupId);

        solveSeeds.set(solveId, new Set(seeds));
      }
    }
  }

  return clearSolves();

  function clearSolves(solves = solveSeeds) {
    let cache = null;

    for (const [[row, col], seed] of solves) {
      if (seed.size === 1) {
        const cell = [...seed][0];
        const groupId = calcGroupId(row, col);

        board[row][col] = cell.toString();
        solves.delete(`${row}${col}`);

        cache = clearSolveSeeds(row, col, groupId, cell, solves);
      }
    }

    if (cache) return clearSolves(cache);

    if (solves.size) {
      console.log(solves);
      // return solveSudoku(board);
      return board;
    } else {
      // return board;
    }
  }

  function calcSeed(rowIndex, colIndex, groupId) {
    const seedSet = new Set(seeds);

    [ ...row[rowIndex],
      ...col[colIndex],
      ...cellGroup[groupId]
    ].forEach(c => seedSet.delete(c));

    return seedSet;
  }

  function clearSolveSeeds(rowIndex, colIndex, groupId, cell, solveSeeds) {
    rowIndex = rowIndex.toString();
    colIndex = colIndex.toString();
    groupId =  groupId.toString();

    for (const [[row, col], seed] of solveSeeds) {
      if (row === rowIndex
        || col === colIndex
        || groupId === calcGroupId(row, col)) {

        seed.delete(cell);

        solveSeeds.set(`${row}${col}`, seed);
      }
    }

    return solveSeeds;
  }

  function calcGroupId(rowIndex, colIndex) {
    return `${floor(rowIndex / 3)}${floor(colIndex / 3)}`;
  }
};

// var sudoku = [
//   ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
//   ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
//   ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
//   ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
//   ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
//   ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
//   ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
//   ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
//   ['.', '.', '.', '.', '8', '.', '.', '7', '9']];

var sudoku = [
  ['.','.','9','7','4','8','.','.','.'],
  ['7','.','.','.','.','.','.','.','.'],
  ['.','2','.','1','.','9','.','.','.'],
  ['.','.','7','.','.','.','2','4','.'],
  ['.','6','4','.','1','.','5','9','.'],
  ['.','9','8','.','.','.','3','.','.'],
  ['.','.','.','8','.','3','.','2','.'],
  ['.','.','.','.','.','.','.','.','6'],
  ['.','.','.','2','7','5','9','.','.']];

console.log(solveSudoku(sudoku).map(row => row.map(c => c.toString().padStart(12))).join('\n'))

