/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/
guestName = ""

/*------------------------ Cached Element References ------------------------*/
document.querySelector("#favicon")
const guestMessage = document.querySelector("#message")
const me = document.querySelector("#me")
const navList = document.querySelectorAll(".nav")
const aboutBtn = document.querySelector("#about-button")
const workBtn = document.querySelector("#work-button")
const contactBtn = document.querySelector("#contact-button")
const resumeBtn = document.querySelector("#resume-button")
/*----------------------------- Event Listeners -----------------------------*/


/*-------------------------------- Functions --------------------------------*/
// import {projects} from code/sei/labs/ttt-weekend/js/app.js


// console.log(projects)
// function init(){

// }
// let guestName = prompt("Please enter your name:")
// guestMessage.push(`Welcome to my portfolio, ${ guestName}!`)
// guestMessage.addEventListener("onclick", addName){
//   guestMessage.innerHTML = ""
//   function addName(){
    

//   }
// }  
aboutBtn.addEventListener("click", onClick) {
  function onClick(){
    document.querySelector("#about-button")
  }
}

me.addEventListener("mouseenter", function(event){
  event.target.style.color = "#F4B860"; 
  setTimeout (function(){
    event.target.style.color = ""
  }, 500)
})