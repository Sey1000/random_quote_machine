var quotes = [
  ["I'm all in favor of keeping dangerous weapons out of the hands of fools. Let's start with typewriters.", "Frank Lloyd Wright"],
  ["If you can't get rid of the skeleton in your closet, you'd best teach it to dance.", "George Bernard Shaw"],
  ["Greed, for lack of a better word, is good.", "Wall Street"],
  ["I can write better than anybody who can write faster, and I can write faster than anybody who can write better.", "A. J. Liebling"],
  ["In the End, we will remember not the words of our enemies, but the silence of our friends.", "Martin Luther King Jr."]
]

function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

function getQuote() {
  var randNum = Math.floor(Math.random() * quotes.length);
  return quotes[randNum];
}

function putQuote() {
  var thisQuote = getQuote();
  $("#quote-text").text(thisQuote[0]);
  $("#quote-author").text(thisQuote[1]);
}

$(document).ready(function() {
  putQuote();
  $("#new-quote").click(function() {
    putQuote();
  });
  $("#tweet-me").click(function() {
    openURL('https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + getQuote() + '"'));
  })
});
