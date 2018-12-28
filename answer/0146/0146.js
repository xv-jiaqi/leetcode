/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.lruData = [];
    this.lruMap = {};
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let index = this.lruData.indexOf(key);
    if (index>-1) {
        this.lruData.splice(index,1);
        this.lruData.push(key);
        return this.lruMap[key];
    } else {
        return -1;
    }
     
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let index = this.lruData.indexOf(key);
    if (index>-1) {
        this.lruMap[key] = value;
        this.get(key);
    } else {
        if (this.lruData.length>=this.capacity) {
            let delKey = this.lruData.shift();
            delete this.lruMap[delKey];
        }
        this.lruData.push(key)
        this.lruMap[key] = value;
    }
    
};