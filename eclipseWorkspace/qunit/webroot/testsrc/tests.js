
//simplest possible example
test("string meierizer", 1, function () {
    var input = "Kline";
    var expected = "Klinemeier";

    //this is the unit under test
    var result = meierize(input);

    equal(result, expected);
});


var qunitSelector = "#qunit-fixture"; //the special node that is reset every test


//dom-manipulating jquery test
test("dom meierizer single", 1, function () {
    $(qunitSelector).append("<span>Kevin</span>");

    //this is the unit under test
    $(qunitSelector + " span").meierizeDom();
    equal($("#qunit-fixture span").html(), "Kevinmeier");
});

module("json hand rolled mocks", {
    setup: function () {
        //store the 'real' JSON function
        this.originalGetJSON = $.getJSON;
    },

    teardown: function () {
        //back to your regularly scheduled JSONing
        $.getJSON = this.originalGetJSON;
    }
});

//this is a lot of tedious work, but it describes what's happening under the covers
test("lookup by id with ajax mock", 3, function () {
    var recordId = 42;

    $.getJSON = function (url, data, callback) {
        //are the params correct?
        equal(data.id, recordId);
        equal(url, "services/lookup.json");

        //now make up our own fake data object
        callback({
            "fName": "Kevin",
            "lName": "Klinemeier"
        });
    };


    //make an element to be updated
    $(qunitSelector).append("<span></span>");

    //this is the unit under test
    $(qunitSelector + " span").updateFullName(recordId);

    equal($(qunitSelector + " span").html(), "Kevin Klinemeier");

});

module ("sinon managed mocks and sandboxes", {
	setup: function () { this.sandbox=sinon.sandbox.create();},
	teardown: function () {this.sandbox.restore();}
});

test("sinonjs mock", 1, function() {
	var recordId = 9292;
	var expectedUrl = "services/lookup.json";
	var expectedData = {"id":recordId};

	//declare our expectations -- more succinct than assertions
	var jQueryMock = this.sandbox.mock($);
	
	//set our expectation, and define the behavior
	//this.sandbox.stub($,"getJSON").yieldsTo({"fName":"Kevin","lName":"Klinemeier"});
	this.sandbox.mock($).expects("getJSON").withArgs(expectedUrl,expectedData).once()
	  .yields({"fName":"Kevin","lName":"Klinemeier"});

    //make an element to be updated
    $(qunitSelector).append("<span></span>");

    //this is the unit under test
    $(qunitSelector + " span").updateFullName(recordId);
    
    equal($(qunitSelector + " span").html(), "Kevin Klinemeier");
	
});
