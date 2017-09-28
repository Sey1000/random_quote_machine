$(document).ready(function() {
  getQuote();
  $("#new-quote").click(function() {
    getQuote();
  });
  $("#tweet-me").click(function() {

  });
});

var colors = ["#F6511D", "#FFB400", "#00A6ED", "#7FB800", "#AF9164", "#6F1A07"]
var thisQuote = {};
var xhr = new XMLHttpRequest();

function getQuote() {
  xhr.open('GET', "https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", true);
  xhr.send();
  xhr.addEventListener("readystatechange", processRequest, false);
}

function processRequest(e) {
  if (xhr.readyState == 4 && xhr.status == 200) {
    thisQuote = JSON.parse(xhr.responseText);
    $("#quote-text").text(thisQuote.quoteText);
    var author = thisQuote.quoteAuthor || "Anonymous"
    $("#quote-author").text(author);
    changeColor();
    loadTweetText();
  }
}

function changeColor() {
  var randomNumber = Math.floor(Math.random() * colors.length);
  var thisColor = colors[randomNumber];
  $("body").css("background-color", thisColor);
  $(".some-button").css("color", thisColor);
}

function loadTweetText() {
  var fullQuote = thisQuote.quoteText + " -" + thisQuote.quoteAuthor;
  console.log(fullQuote);
  var encoded = encodeURIComponent(fullQuote);
  $("#tweet-me").attr('href', "https://twitter.com/intent/tweet?text=" + encoded);
}
