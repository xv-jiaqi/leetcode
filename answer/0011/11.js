/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let heightArea = 0
    let i=0,j=height.length-1;
    while (i<j) {
        let tmpHeight = 0;
        height[i]<height[j]?tmpHeight = height[i]:tmpHeight = height[j];
        let tmpHeightArea = (j-i)*tmpHeight;
        if (tmpHeightArea>heightArea) {
            heightArea =  tmpHeightArea;
        }
        height[i]<height[j]?i++:j--;
    }
    return heightArea;
};