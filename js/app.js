/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/


/*------------------------ Cached Element References ------------------------*/
document.querySelector("#favicon")
const guestMessage = document.querySelector(".message")
const me = document.querySelector("#me")
/*----------------------------- Event Listeners -----------------------------*/


/*-------------------------------- Functions --------------------------------*/
// import {projects} from code/sei/labs/ttt-weekend/js/app.js


// console.log(projects)
// function init(){

// }
// let guestName = prompt("Please enter your name:")
// guestMessage.push(`Welcome to my portfolio, ${ guestName}!`)  

me.addEventListener("mouseenter", function(event){
  event.target.style.color = "#FF7D00" ; 
  setTimeout (function(){
    event.target.style.color = ""
  }, 500)
})