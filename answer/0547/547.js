/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    let group = [];
    for (let i=0;i<M.length;i++) {
        for (let j=0;j<M[i].length;j++) {
            if (M[i][j]==0){continue;}
            let isNew = true;
            let mergeIndex = [];
            for (let k=0;k<group.length;k++) {
                if (group[k].has(i) || group[k].has(j)) {
                    mergeIndex.push(k);
                    group[k].add(i);
                    group[k].add(j);
                    isNew = false;
                }
            }
            if (mergeIndex.length>1) {
                let index = mergeIndex.pop();
                for (let s=0;s<mergeIndex.length;s++) {
                    for (let sv of group[mergeIndex[s]].values()) {
                        group[index].add(sv)
                    }
                    group.splice(mergeIndex[s],1);
                }
            }
            if (isNew) {
                group.push(new Set([i,j]))
            }
        }
    }
    return group.length;
};