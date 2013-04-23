//imagine that it actually updates a balance somewhere, by id.
//for simplicity, we'll just update things here.
var balanceHash = {};

function addCustomer(id) {
	if(!balanceHash[id]) {
		balanceHash[id]=0;
	}
}

function updateBalance(id, addedValue) {
	//this is the work we are testing in the example.
	balanceHash[id]+=addedValue;
}

function getBalance(id) {
	return balanceHash[id];
}

function clearBalance(id) {
	balanceHash[id]=0;
}