import {projectData} from "./project-data.js"
/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
document.querySelector("#favicon")
const guestMessage = document.querySelector("#message")
const message = document.querySelector("#message")
const sections = document.querySelectorAll(".section")
const navList = document.querySelectorAll(".nav")
const aboutBtn = document.querySelector("#about-button")
const workBtn = document.querySelector("#work-button")
const contactBtn = document.querySelector("#contact-button")
const resumeBtn = document.querySelector("#resume-button")
const cardContainer = document.getElementById('card-container')
/*----------------------------- Event Listeners -----------------------------*/


/*-------------------------------- Functions --------------------------------*/
// import {projects} from code/sei/labs/ttt-weekend/js/app.js


// console.log(projects)
// function init(){

// }

// I want to try to add a prompt that will let the user enter their name & then add their name to the welcome message.
// let guestName = prompt("Please enter your name:")
// guestMessage.push(`Welcome to my portfolio, ${ guestName}!`)
// guestMessage.addEventListener("onclick", addName){
//   guestMessage.innerHTML = ""
//   function addName(){
    

//   }
// }  

// I want the nav to highlight which section the user is looking at.
// sections.forEach((section) => {
//   const sectionTop = section.offsetTop;
//   if (pageYOffset >= sectionTop - 60) {
//     current = section.getAttribute("id")
//   }
// })

aboutBtn.addEventListener("click", function onClick(){

})

let projectMarkup = projectData.map(project =>
`
  <div class="card text-center" style="width: 18rem;">
    <img src="${project.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${project.title}</h5>
      <p class="card-text">${project.description}</p>
      <div>
        <a href="${project.github}" class="btn btn-primary">GitHub</a>
        <a href="${project.deployment}" class="btn btn-secondary">Deployment</a>
      </div>
    </div>
  </div> 
  
  `
  
  ).join('')
  cardContainer.innerHTML = projectMarkup

message.addEventListener("mouseenter", function(event){
  event.target.style.color = "#F4B860"; 
  setTimeout (function(){
    event.target.style.color = ""
  }, 800)
})

