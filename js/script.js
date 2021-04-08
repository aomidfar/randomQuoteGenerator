/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
*/
/***
 * `getRandomQuote` function
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
    <h3>    _${randomQuote.citation}</h3> `;}
    
    if (quotes.year !== 'undefined'){
      html += ` <h3>    ${randomQuote.year}</h3> `; }; 
   return document.getElementById('quote-box').innerHTML = html;
};



//document.querySelector('main').innerHTML = printQuote();
document.getElementById('quote-box').innerHTML = printQuote();

//printQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

 document.getElementById('load-quote').addEventListener("click", printQuote, false);