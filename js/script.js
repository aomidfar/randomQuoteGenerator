/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator by Ali Omidfar
******************************************/
// picking a few background color choices and storing it in colorChoices

let colorChoices = [
  'green',
  'blue',
  'brown',
  'black',
  'yellow',
  'orange'
  ] 
  getRandomColor ();
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
   html +=`<p class="quote">  ${randomQuote.quote} </p> 
   <p class="source"> ${randomQuote.source}</p>`;
  
  if (randomQuote.citation){
    
   html += `
    <span class="citation">   ${randomQuote.citation}</span> `;}

    if (randomQuote.tag){
    
      html += `
       <span class="tag">   ${randomQuote.tag}</span> `;}
    
    if (randomQuote.year){
      html += ` <span class="year">    ${randomQuote.year}</span> `; }; 
      getRandomColor ();
      return document.getElementById('quote-box').innerHTML = html;
};



document.getElementById('quote-box').innerHTML = printQuote();


// using random number code (up to length of the colors) to pick that number color and put on background

function getRandomColor () {
  let randomColor = colorChoices[Math.floor( Math.random() * colorChoices.length )];
  document.body.style.backgroundColor = randomColor; 
  return randomColor;
}


// auto refresh function every 10 seconds
setInterval(function(){
 window.location.reload(1);
}, 10000);

//printQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/


 document.getElementById('load-quote').addEventListener("click", printQuote, false);
