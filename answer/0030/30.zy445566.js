/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (words.length==0){return [];}
    if (s.length==0) {return [];}
    if (words.length>s.length){return [];}
    if (s.length>=10000) {return [];}
    let wordsMap = {};
    let indexMap = {}
    let indexList = [];
    for(let i=0;i<words.length;i++) {
        let startIndex = 0
        wordsMap[i] = [];
        let wordsIndex=-1;
        do {
            wordsIndex = s.indexOf(words[i],startIndex);
            if (wordsIndex>=0) {
                if (indexMap[wordsIndex]!=undefined) {
                    if(indexMap[wordsIndex].index.indexOf(i)<0){
                        indexMap[wordsIndex].index.push(i)
                    }
                } else {
                    indexMap[wordsIndex] = {words:words[i],index:[i]};
                }
                wordsMap[i].push({wordsIndex:wordsIndex,words:words[i],index:i});
                startIndex = wordsIndex+1;
            }
        }while (wordsIndex>=0);
    }
    if (words.length==1) {
        for(let resIndex of wordsMap[0]) {
            indexList.push(resIndex.wordsIndex);
        }
        return indexList;
    }
    for(let wordIndex in wordsMap) {
        for (let i=0;i<wordsMap[wordIndex].length;i++) {
            let wordsCount = 1;
            let indexInc = wordsMap[wordIndex][i].wordsIndex+wordsMap[wordIndex][i].words.length;
            let existList = [wordsMap[wordIndex][i].index];
            while (wordsCount<words.length) {
                if(indexMap[indexInc]!=undefined) {
                    let isExistValue = -1;
                    for(let repeatIndexValue of indexMap[indexInc].index) {
                        if (existList.indexOf(repeatIndexValue)<0){
                            isExistValue = repeatIndexValue;
                        }
                    }
                    if (existList.indexOf(isExistValue)<0 && isExistValue>-1) {
                        wordsCount++;
                        existList.push(isExistValue);
                        if (wordsCount==words.length && indexList.indexOf(wordsMap[wordIndex][i].wordsIndex)<0) {
                            indexList.push(wordsMap[wordIndex][i].wordsIndex)
                        }
                        indexInc+=indexMap[indexInc].words.length;
                    } else {
                        break;
                    }
                } else {
                    break;
                }
            }
        }
    }
    return indexList;
};