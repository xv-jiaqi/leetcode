/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let i=0;i<board.length;i++) {
        let map = {};
        for (let j=0;j<board[i].length;j++) {
            if (board[i][j]!='.'){
                if (!map[board[i][j]]) {
                    map[board[i][j]] = true;
                } else {
                    return false;
                }
            }
        }
    }
    for(let i=0;i<board.length;i++) {
        let map = {};
        for (let j=0;j<board[i].length;j++) {
            if (board[j][i]!='.'){
                if (!map[board[j][i]]) {
                    map[board[j][i]] = true;
                } else {
                    return false;
                }
            }
        }
    }
    function littleReapeat(lStart,vStart,long = 3) {
        let map = {};
        for(let i=lStart;i<lStart+long;i++) {
            for (let j=vStart;j<vStart+long;j++) {
                if (board[i][j]!='.'){
                    if (!map[board[i][j]]) {
                        map[board[i][j]] = true;
                    } else {
                        return false;
                    }
                }
            }
        }
        return true;
    }
    for(let i=0;i<board.length;i+=3) {
        for (let j=0;j<board[i].length;j+=3) {
            if(!littleReapeat(i,j)) {
                return false;
            }
        }
    }
    return true;
};