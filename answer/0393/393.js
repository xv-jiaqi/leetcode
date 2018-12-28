/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
    let checkNotVal = function(value) {
        if(value>247 || value<=127 || value.toString(2).indexOf('10')!=0){
            return true;
        }
        return false;
    }
    for (let i=0;i<data.length;i++) {
        if (data[i]>247) {return false;}
        if (data[i]>127) {
            let binData = data[i].toString(2);
            if (data[i]<=191) {
                return false;
            }
            if (binData.indexOf('11110')==0) {
                if (data.length<i+4) {return false;}
                if (checkNotVal(data[++i])) {
                    return false;
                }
                if (checkNotVal(data[++i])) {
                    return false;
                }
                if (checkNotVal(data[++i])) {
                    return false;
                }
                
            }
            if (binData.indexOf('1110')==0) {
                if (data.length<i+3) {return false;}
                if (checkNotVal(data[++i])) {
                    return false;
                }
                if (checkNotVal(data[++i])) {
                    return false;
                }
                
            }
            if (binData.indexOf('110')==0) {
                if (data.length<i+2) {return false;}
                if (checkNotVal(data[++i])) {
                    return false;
                }
            }
        }
    }
    return true;
};