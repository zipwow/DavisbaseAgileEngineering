function sieve(m) {
	if (m>1) {
		var f = new Array(m+1);
		var i;

		for (i = 2; i <= m; i++) {
			if (f[i]==undefined) {
				f[i]=true;
				removeMultiples(i,f, m);
			}
		}

		var nums = [];
		for(i=2; i < (f.length+1); i++) {
			if (f[i]==true) {
				nums[nums.length]=i;
			}
		}


		return nums;
	} else {
		return [];
	}
}

function removeMultiples(val, f, m) {
	for (var multiple = val*2; multiple<=m; multiple+=val) {
		f[multiple] = false;
	}
}

function initializeFlags(f) {
	for (var i = 0; i<f.length; i++ ) {
		f[i]=false;
	}
}


//This code sucks!  Look for opportunities to apply these refactoring steps, 
//   but be sure to run tests at least in between each one.

//extract method
//inline method
//remove dead code
//remove unneeded code code
//hide method
//rename variable
//guard clause
//reduce local variable scope