module("twitter api");
test("callback example", function() {
	stop();

	delayedAddTweets('#tweets',{'results':[strippedResult]}

	);

	setTimeout(function() {
		equal($('#tweets div').length,1);
		start();
	},550)
});
var strippedResult={
	"from_user":"EXPECTED_FROM_USER",
	"text":"EXPECTED TEXT"
};
test("direct twitter access with wait", function() {
	stop();  //or you can use asyncTest above, which starts the test 'stopped'
	//this test stops the test queue, meaning that when this thread exits the test, it's not actually over..

	var query="%23mammoth";
	loadTweets(query,'#tweets');
    

    setTimeout(function () {
        equal($('#tweets div').length,15);
        start();//start the test queue again, we're all done
    },550);
});
