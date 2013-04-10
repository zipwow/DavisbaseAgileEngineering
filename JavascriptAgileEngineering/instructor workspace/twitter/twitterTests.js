module("twitter api");
test("direct twitter access", function() {

	stop();
	//this test stops the test queue, meaning that when this thread exits the test, it's not actually over..

	var query="%23mammoth";
	loadTweets(query,'#tweets');
    

    setTimeout(function () {
    	//waitsfor loop would be better, or if jQuery specific possibly a Promise
        equal($('#tweets div').length,15);
        start();//start the test queue again, we're all done
    },250);
});

module("hand mocked twitter",{
	setup: function() {
		this.originalAjax=$.ajax;
	},

	teardown: function() {
		$.ajax = this.originalAjax;
	}
});


//this is an example json response with only the variables we care about
var strippedResult={
	"from_user":"EXPECTED_FROM_USER",
	"text":"EXPECTED TEXT"
};

test("hand mocked twitter access", function() {

	stop();
	//this test stops the test queue, meaning that when this thread exits the test, it's not actually over..

	$.ajax = function(ajaxParams) {

        //now make up our own fake data object and return it for data
        ajaxParams.success({
        	"results":[strippedResult]}
        	);		
	};

	var query="%23mammoth";
	loadTweets(query,'#tweets');
    

    setTimeout(function () {
        equal($('#tweets div').length,1,"unexpected count in tweets div");
        //can now be more specific, since the results are consistent.
        var elementText = $('#tweets div').text(); 
        ok( elementText.indexOf(strippedResult['from_user']) != -1 ,"from_user content not found in elementText ["+elementText+"]");

        ok( elementText.indexOf(strippedResult['text']) != -1, "tweet text not found in div ["+elementText+"]");

        start();//start the test queue again, we're all done
    },250);
});


module ("sinon managed mocks and sandboxes", {
	setup: function () { this.sandbox=sinon.sandbox.create();},
	teardown: function () {this.sandbox.restore();}
});

test("sinonjs stub", function() {
	stop();
	//declare our expectations -- more succinct than assertions
	
	//set our expectation, and define the behavior
	var ajaxStub = this.sandbox.stub($,"ajax");
	ajaxStub.yieldsTo('success',{
        	"results":[strippedResult]
        }
        	);
	var query="%23mammoth";
	loadTweets(query,'#tweets');
    

    setTimeout(function () {
        equal($('#tweets div').length,1,"unexpected count in tweets div");
        //can be just as specific, since it's the same data.
        var elementText = $('#tweets div').text(); 
        ok( elementText.indexOf(strippedResult['from_user']) != -1 ,"from_user content not found in elementText ["+elementText+"]");

        ok( elementText.indexOf(strippedResult['text']) != -1, "tweet text not found in div ["+elementText+"]");

        start();//start the test queue again, we're all done
    },250);
	
});

//Everyone Level:
//simulate (and handle) error conditions with a stub

//B+ students:
//use a mock to ensure that we've formatted the query correctly.

//A+ students:
//use argument matchers to mock only the calls to the query api, other ajax calls should be undisturbed.