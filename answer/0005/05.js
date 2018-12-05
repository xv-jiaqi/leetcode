/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	if(s.length <= 1) return s;
	
	var min = 0
	var max = 0
	var len = s.length
	for(var i = 0 ; i < len ; i++){
		if(max > (len - i) * 2) return s.substring(min,min+max)
		var count = 0;
		while(i < len-1 && s[i] == s[i+1]){
			count++
			i++
		}
		var first = i - count;
		var end = i;
		
		while(first >= 0 && end < len-1 && s[first-1] == s[end+1]){
			
			first--
			end++
		}
		if(max < end - first +1){
			min = first
			max = end - first +1
		}
		
	}

	return s.substring(min,min+max)

};