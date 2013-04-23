module("environment verification");
test("Equality examples", function () {

	//the "ok" function accepts anything that evaluates to true in javascript:
	ok(true,"true is true, hello world");
	ok(1,"one is also true");
	ok("x","non-empty string is okay.  Sometimes this is helpful, sometimes it's an easy bug to write in your tests");

	var string1 = "Kevin";


	//you don't technically need anything else, but equal() is much more informative, since it can show both
	//the expected and the actual, along with a diff for long strings in the test output.
	//Exercise: Break these test and look at the how the output differs.

	ok(string1==string1, "instance comparison");
	equal(string1,string1,"instance comparison, like ==");

	var string2 = "Kevin";
	deepEqual(string1,string2,"this equal compares type and value, like ===");
	ok(string1===string2,"these strings have the same value");

	//Exercise 1: break the deepEqual test:
	var brothers = ["Kevin","Brian"];
	var otherBrothers = ["Kevin","Brian"];
	var sisters = ["Nicole","Elizabeth"];
	deepEqual(brothers, otherBrothers);

});

// Exercise 2:  Re-order the test methods below and run the test and see it fail.  Fill in the setup / teardown functions so that
//  the tests can be independent.
module("balance transactions", {
	setup: function() {
		//code to execute before each test goes here
	},
	teardown: function() {
		//code to execute after each test goes here
	}}
);

//create a customer and set their balance to 100
addCustomer(1);
updateBalance(1,100);

test("balance update negative", function() {
	updateBalance(1,-10);
	equal(getBalance(1),90);
});
test("balance update positive", function() {
	updateBalance(1,45);
	equal(getBalance(1),135);
});

test("balance update zero", function() {
	updateBalance(1,0);
	equal(getBalance(1),135);
});
