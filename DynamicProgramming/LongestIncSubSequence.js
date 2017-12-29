function LongestIncSubSequence(sequence) {

	// initilize lis array to hold largest subseq and variable for max sub sequence
	let lis = [];
	let maxSubSeq = 0;

	for(let x = 0; x < sequence.length; x++) {
		lis[x] = 1;
	}

	for(let i = 0; i < sequence.length; i++) {
		for(let j = 1; j < sequence.length; j++) {
			if(sequence[i] > sequence[j]) {
				lis[i] = Math.max(lis[j] + 1, lis[i]);
			}
		}
	}

	for(let y = 0; y < lis.length; y++) {
		if(lis[y] > maxSubSeq) {
			maxSubSeq = lis[y];
		}
	}

	console.log(lis);
	return maxSubSeq;	
}

console.log(LongestIncSubSequence([3,4,-1,0,6,2,3]));



