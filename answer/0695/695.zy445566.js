/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let getSite = function (x,y) {
        return `${x},${y}`;
    }
    let checkSite = function (grid,x,y,locked) {
        if (grid[x][y] == 0 || locked[getSite (x,y)]) {
            return false;
        }
        return true;
    }
    let search = function (grid,x,y,locked) {
        let site = getSite(x,y);
        locked[site] = true;
        let area = 1;
        if (0<=x-1) {
            if(checkSite(grid,x-1,y,locked)) {
                area+=search(grid,x-1,y,locked);
            }
        }
        if (grid.length>x+1) {
            if(checkSite(grid,x+1,y,locked)) {
                area+=search(grid,x+1,y,locked);
            }
        }
        if (0<=y-1) {
            if(checkSite(grid,x,y-1,locked)) {
                area+=search(grid,x,y-1,locked);
            }
        }
        if (grid[x].length>y+1) {
            if(checkSite(grid,x,y+1,locked)) {
                area+=search(grid,x,y+1,locked);
            }
        }
        return area;
    }
    let maxArea = 0;
    let locked = {};
    for (let i=0;i<grid.length;i++) {
        for (let j=0;j<grid[i].length;j++) {
            if (grid[i][j]==1) {
                let area = search(grid,i,j,locked);
                if (area>maxArea) {
                    maxArea = area;
                }
            }
            
        }
    }
    return maxArea;
};