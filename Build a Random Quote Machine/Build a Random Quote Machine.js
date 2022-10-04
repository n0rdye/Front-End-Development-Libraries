$(document).ready(function () {
  getQuotes().then(() => {
    getQuote();
  });
  $('#new-quote').on('click', getQuote);
});

let quotesData;
var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

function getQuote(){

  let quote = quotesData.quotes[Math.floor(Math.random()*quotesData.quotes.length)].quote
  let author = quotesData.quotes[Math.floor(Math.random()*quotesData.quotes.length)].author
  $('#tweet-quote').attr(
    'href',
    'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + quote + '" ' + author)
  );
$('#quote-box').animate({ opacity: 0 }, 700, function () {
    $(this).animate({ opacity: 1 }, 700),
    $('#text').text(quote);
    $('#author').text(author);
 });
  var color = Math.floor(Math.random() * colors.length);
  $('html body').animate({backgroundColor: colors[color]},1000);
  $('#new-quote').animate({backgroundColor: colors[color]},1000);
}

function getQuotes(){
  return $.ajax({
    headers: { Accept: 'application/json'},
    url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
    success: function (jsonQuotes) {
      if (typeof jsonQuotes === 'string') {
        quotesData = JSON.parse(jsonQuotes);
      }
    }
  });
}
