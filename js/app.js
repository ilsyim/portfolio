import {projectData} from "./project-data.js"
/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
document.querySelector("#favicon")
const guestMessage = document.querySelector("#message")
const message = document.querySelector("#message")
const sections = document.querySelectorAll(".section")
const navList = document.querySelectorAll("nav .nav li")
const aboutBtn = document.querySelector("#about-button")
const workBtn = document.querySelector("#work-button")
const contactBtn = document.querySelector("#contact-button")
const resumeBtn = document.querySelector("#resume-button")
const cardContainer = document.getElementById('card-container')
const ligthDarkBtn = document.querySelector('#light-dark-button')
const body = document.querySelector('body')
const activePage = window.location
const profile = document.getElementById('my-photo')
/*----------------------------- Event Listeners -----------------------------*/

console.log(activePage)
/*-------------------------------- Functions --------------------------------*/
// import {projects} from code/sei/labs/ttt-weekend/js/app.js


let projectMarkup = projectData.map(project =>
`
  <div class="card text-center" style="width: 18rem;">
    <img src="${project.image}" class="card-img-top" alt="Picture of Tic-Tac-Toe app">
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
  event.target.style.color = "#f4b860"; 
  setTimeout (function(){
    event.target.style.color = ""
  }, 800)
})

function toggleLightDark() {
  body.className = body.className === "dark" ? "" : "dark"
}

function checkDarkPref() {
  if(
    window.matchMedia("(prefers-color-scheme:dark)").matches && 
    body.className !== "dark"
  ) {
    toggleLightDark()
  }
}

checkDarkPref()
ligthDarkBtn.addEventListener('click', toggleLightDark)

profile.addEventListener('click', function(event){
  event.target.style.width = '70%'
  event.target.style.height = 'auto';
  setTimeout (function(){
    event.target.style.width = ''
  }, 800)
})




