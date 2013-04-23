//this is the function eventually called when the page loads
function loadTweets(query,selector) {
$.ajax({
        url: 'http://search.twitter.com/search.json?q=' + jQuery.param(query),
        dataType: 'jsonp',
        success: function(data) {
                delayedAddTweets(selector, data);
        }
    });
}

function delayedAddTweets(selector, data) {
    var tweets = $(selector);
    tweets.html('');
    for (result in data['results']) {
        //imagine fade-ins, or other more interesting animation here that consume time to execute and execute 
        //asynchronously.
        setTimeout(function (){
            tweets.append('<div>' + data['results'][result]['from_user'] + 
                    ' wrote: <p>' + data['results'][result]['text'] + '</p></div><br />\n');
       },50);
    }           
}
 