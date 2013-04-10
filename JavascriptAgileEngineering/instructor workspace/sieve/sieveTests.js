//remember the refactoring pre-conditions
module("sieve of Eratosthenes");
test("one",function(){
	var resultList = sieve(1);
	equal(resultList.length, 0, "wrong number of elements in list");
});

test("two", function() {
	var resultList = sieve(2);
	equal(resultList.length, 1, "wrong number of elements in list");
	deepEqual(resultList,[2], "wrong items in list");
})

test("three", function() {
	var resultList=sieve(3);
	equal(resultList.length, 2, "wrong number of elements in list");
	deepEqual(resultList,[2,3], "wrong items in list");
})

test("four", function() {
	var resultList = sieve(4);
	equal(resultList.length,2,"wrong number of elements in list");
	deepEqual(resultList,[2,3], "wrong items in list");
})

test("fifteen", function() {
	var resultList = sieve(15);
	equal(resultList.length,6,"wrong number of elements in list");
	deepEqual(resultList,[2,3,5,7,11,13], "wrong items in list");
})

test("two hunderd", function() {
	var resultList = sieve(200);
	equal(resultList.length,46,"wrong number of elements in list");
	deepEqual(resultList,[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 
		31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 
		97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 
		157, 163, 167, 173, 179, 181, 191, 193, 197, 199], "wrong items in list");

})