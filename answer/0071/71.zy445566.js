const node_path =  require('path');
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let base_path = node_path.join(path);
    if (base_path=='/') return base_path;
    return base_path.replace(/\/$/,'');
};