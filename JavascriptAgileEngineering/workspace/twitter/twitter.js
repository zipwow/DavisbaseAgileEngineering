//this is the function eventually called when the page loads
function loadTweets(query,selector) {
$.ajax({
        url: 'http://search.twitter.com/search.json?q=' + jQuery.param(query),
        dataType: 'jsonp',
        success: function(data) {
            var tweets = $(selector);
            tweets.html('');
            for (res in data['results']) {
                tweets.append('<div>' + data['results'][res]['from_user'] + 
                		' wrote: <p>' + data['results'][res]['text'] + '</p></div><br />\n');
        	}
        }
    });
}