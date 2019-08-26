// Fonctionnalité 1

let footerElement = document.getElementsByTagName("footer")[0];
let click = 0;
footerElement.addEventListener("click", function() {
    console.log("clique");
    console.log("clic numéro " + ++click);
});

// Fonctionnalité 2 

let MenuButtonElement = document.getElementsByClassName("navbar-toggler")[0];

let navbarHeaderElement = document.getElementById("navbarHeader");
MenuButtonElement.addEventListener("click", function() {
    navbarHeaderElement.classList.toggle("collapse");
});

// Fonctionnalité 3

let firstCardElement = document.getElementsByClassName("card")[0]
let editElement = firstCardElement.getElementsByClassName("btn-outline-secondary")[0];

editElement.addEventListener("click", function() {
  firstCardElement.style.color = "red";
});

// Fonctionnalité 4 

function textColor(x){
  if (x.style.color === "green") {
    x.style.color = "";
  } else {
    x.style.color = "green";
  }
}

let secondCardElement = document.getElementsByClassName("card")[1]
let editCardElement = secondCardElement.getElementsByClassName("btn-outline-secondary")[0];
editCardElement.addEventListener("click", function(){
textColor(secondCardElement);
});

// Fonctionnalité 5

let navbarElement = document.getElementsByClassName("navbar")[0]
navbarElement.addEventListener("dblclick", function() {
  document.styleSheets[0].disabled = !document.styleSheets[0].disabled;
});

// Fonctionnalité 6

function resizeCard(card){
  
}


let hoverCardElement = document.getElementById