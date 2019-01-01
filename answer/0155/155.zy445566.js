/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stackData = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stackData.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stackData.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.stackData.length>0) {
        return this.stackData[this.stackData.length-1];
    } else {
        return null;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min.apply(this,this.stackData);
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */