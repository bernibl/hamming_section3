
var compute;


compute = function(word, word2) { 
var count = 0;
	for (i = 0; i < word.length; i++) {
		if ((word.length) != (word2.length)) {
			throw  new Error('DNA strands must be of equal length.');
		} else if (word.charAt(i) != word2.charAt(i)) {
			count++;
		
		}
	}

	return count;
};

module.exports = {
	compute: compute
};