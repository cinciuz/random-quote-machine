// Code works with forismatic API and twitter API

var url = "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?"

function parseQuote(response) {
  var quoteMessage = '"' + response.quoteText + '"'; 
  document.getElementById("quote").innerHTML = quoteMessage;
  var author = response.quoteAuthor;
  if (author == "") {
    document.getElementById("author").innerHTML = "Anonymous";
  } else {
    document.getElementById("author").innerHTML = response.quoteAuthor;
  }
    document.getElementById("twitter").setAttribute("data-text", quoteMessage + " " + author);
}

$(document).ready(function() {
  $.getJSON(url, parseQuote);

});
$("#button").click(function() {
  $.getJSON(url, parseQuote);
});


////////// Code that worked in plain JS but the button was refreshing the whole page.
/*
window.onload = function(){
  var button = document.getElementById("button");
  button.onclick = refresh;  
};

var refresh = function(){
  location.reload();
};
*/
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');


/////////// Code for simple quote switching from internal array
/*
window.onload = function(){
  var button = document.getElementById("button");
  button.onclick = provami;
};

var provami = function() {
  var quote = document.getElementById("quote");
  var author = document.getElementById("author")
  var randomNum = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = '"' + quotes[randomNum] + '"';
    author.innerHTML = authors[randomNum];
};

var quotes = ["If you can't feed a hundred people, then feed just one.", 
              "You are never given a wish without also being given the power to make it come true. You may have to work for it, however. ",
              "Peace of mind is not the absence of conflict from life, but the ability to cope with it.", 
              "How many cares one loses when one decides not to be something but to be someone.", 
              "Victory belongs to the most persevering.", 
              "The whole secret of existence is to have no fear. Never fear what will become of you, depend on no one. Only the moment you reject all help are you freed."
              ];
var authors = ["Mother Theresa", 
               "Richard Bach", 
               "Anonymous", 
               "Coco Chanel", 
               "Napoleon Bonaparte ", 
               "Buddha"];

               */