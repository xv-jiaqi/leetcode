/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let solveList = [];
    let dpsQueens = function(board,num,x) {
        num = num-1;
        for (let i=x+1;i<n;i++) {
            for(let j=0;j<n;j++) {
                if(checkQueens(board,i,j)) {
                    let newBoard = [...board];
                    let line = newBoard[i].split('');
                    line[j] = 'Q';
                    newBoard[i] = line.join('');
                    if(num>0) {
                        dpsQueens(newBoard,num,i);
                    } else {
                        solveList.push(newBoard);
                    }
                }
            }
        }
    }
    let checkQueens = function(board,x,y) {
        if(board[x][y]=='Q') {return false;}
        for (let i=0;i<n;i++) {
            if(board[x][i]=='Q') {return false;}
        }
        for (let i=0;i<n;i++) {
            if(board[i][y]=='Q') {return false;}
        }
        if (x>=y) {
            for (let i=x-y,j=0;i<n && j<n;i++,j++) {
                if(board[i][j]=='Q') {return false;}
            }
        } else {
            for (let i=0,j=y-x;i<n && j<n;i++,j++) {
                if(board[i][j]=='Q') {return false;}
            }
        }
        
        if(x+y<n) {
            for (let i=0,j=x+y;i<n && j>=0;i++,j--) {
                if(board[i][j]=='Q') {return false;}
            }
        } else {
            for (let i=x-(n-1-y),j=n-1;i<n && j>=0;i++,j--) {
                if(board[i][j]=='Q') {return false;}
            }
        }
        return true;
    }
    let initBoard = function(size) {
        let board = new Array(size);
        let line = new Array(size).fill('.').join('');
        board.fill(line)
        return board;
    }
    dpsQueens(initBoard(n),n,-1);
    return solveList;
};