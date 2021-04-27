/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator by Ali Omidfar
******************************************/


/***
 * `getRandomQuote` function generates a random number not higher than the length of the objects 
 * it then puts that number object into randomQuote and returns it
***/

function getRandomQuote (){
    let randomQuote = quotes[Math.floor( Math.random() * quotes.length )];
    return randomQuote;
}

/***
 * `printQuote` function
***/

 //document.querySelector('main').innerHTML = getRandomQuote(); 

function printQuote() {
  let html = '';
  let randomQuote = getRandomQuote();
   html +=`<h2>  ${randomQuote.quote} </h2> 
  <br><h3>    _${randomQuote.source},</h3>`;
  
  if (quotes.citation !== 'undefined'){
    
   html += `
    <br>
    <h3>    ${randomQuote.citation}</h3> `;}
    
    if (quotes.year !== 'undefined'){
      html += ` <h3>    ${randomQuote.year}</h3> `; }; 
   return document.getElementById('quote-box').innerHTML = html;
};



//document.querySelector('main').innerHTML = printQuote();
document.getElementById('quote-box').innerHTML = printQuote();

// picking a few color choices and storing it in colorChoices
let colorChoices = [
'green',
'blue',
'brown',
'black',
'yellow',
'orange'
]

// using random number code (up to length of the colors) to pick that number color and put on background
let randomColor = colorChoices[Math.floor( Math.random() * colorChoices.length )];
document.body.style.backgroundColor = randomColor;

// auto refresh function every 10 seconds
setInterval(function(){
  window.location.reload(1);
}, 10000);



 document.getElementById('load-quote').addEventListener("click", printQuote, false);
