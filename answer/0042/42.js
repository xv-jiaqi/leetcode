/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    while (height.length>0) {
        if (height[0]==0) {
            height.shift();
        } else {
            break;
        }
    }
    if (height.length<3) {return 0;}
    let maxHeight = 0;
    let minHeight = 0;
    let area = 0;
    let useArea = 0;
    for (let i=0;i<height.length;i++) {
        if (height[i]>=maxHeight) {
            area+=useArea;
            maxHeight = height[i];
            minHeight = height[i];
            useArea=0;
        } else {
            if (height[i]>=minHeight) {
                let needArea = 0;
                for (let j=i-1;j>=0;j--) {
                    if (height[j]>=height[i]) {
                        area+=needArea;
                        minHeight = height[j];
                        break;
                    } else {
                        needArea+=height[i]-height[j];
                        height[j] = height[i];
                    }
                }
                useArea-= needArea;
            }
            minHeight = height[i];
            useArea+=maxHeight-height[i];
        }
    }
    return area;
};