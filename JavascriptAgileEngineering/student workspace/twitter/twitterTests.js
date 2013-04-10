module("twitter api");
test("direct twitter access", function() {

	//what's wrong with this test?
	var query="%23mammoth";
	loadTweets(query,'#tweets');
    

    equal($('#tweets div').length,15);
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
	//use the javascript language to replace the $.ajax function with something that doesn't rely on the internet.
});


module ("sinon managed mocks and sandboxes", {
	setup: function () { this.sandbox=sinon.sandbox.create();},
	teardown: function () {this.sandbox.restore();}
});

test("sinonjs stub", function() {
	//use this sinon stub to redefine (or define in the first place) the ajax method
	var ajaxStub = this.sandbox.stub($,"ajax");
	ajaxStub.yieldsTo('success',{
        	"results":???
        });
	
});

//Everyone Level:
//complete the above exercises
//also simulate (and handle) error conditions with a stub

//B+ students:
//use a mock to ensure that we've formatted the query correctly.

//A+ students:
//use argument matchers to mock only the calls to the query api, other ajax calls should be undisturbed.