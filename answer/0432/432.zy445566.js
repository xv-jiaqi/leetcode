/**
 * Initialize your data structure here.
 */
var AllOne = function() {
    this.map = {};
    this.valMap = {};
};


AllOne.prototype.changeNum = function(key,beforeNum,afterNum) {
  if (beforeNum>0) {
      if (this.valMap.hasOwnProperty(beforeNum)) {
          this.valMap[beforeNum].splice(this.valMap[this.map[key]].indexOf(key),1)
      }
  }
  if (afterNum>0) {
      if (this.valMap.hasOwnProperty(afterNum)) {
          this.valMap[afterNum].push(key);
      } else {
          this.valMap[afterNum]=[key];
      }
  }
}

/**
 * Inserts a new key <Key> with value 1. Or increments an existing key by 1. 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
    if (this.map.hasOwnProperty(key)) {
        this.changeNum(key,this.map[key],this.map[key]+1)
        this.map[key]++;
    } else {
        this.changeNum(key,0,1)
        this.map[key] = 1;
    }

};

/**
 * Decrements an existing key by 1. If Key's value is 1, remove it from the data structure. 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
    if (this.map.hasOwnProperty(key)) {
        if (this.map[key]>1) {
            this.changeNum(key,this.map[key],this.map[key]-1)
            this.map[key]--;
        } else {
            this.changeNum(key,1,0)
            delete this.map[key];
        }
    }
};

/**
 * Returns one of the keys with maximal value.
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
    let max = Math.max.apply(this,Object.values(this.map));
    if (max==-Infinity) {return '';}
    return this.valMap[max][0];
};

/**
 * Returns one of the keys with Minimal value.
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
    let min = Math.min.apply(this,Object.values(this.map));
    if (min==Infinity) {return '';}
    return this.valMap[min][0];
};

/** 
 * Your AllOne object will be instantiated and called as such:
 * var obj = Object.create(AllOne).createNew()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */