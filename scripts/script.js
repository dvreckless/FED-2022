var hamburgerButtonOpen = document.querySelector("header nav button");
var hamburgerMenu = document.querySelector("header nav ul");
var hamburgerButtonClose = document.querySelector("header nav ul li button");
var darkModus = document.body;

function openHamburger () {
    hamburgerMenu.classList.add("openmenu");
}


function closeHamburger () {
    hamburgerMenu.classList.remove("openmenu");
}

function activateDark() {
    
    darkModus.classList.toggle("darkmode");
  }

hamburgerButtonOpen.addEventListener("click", openHamburger);
hamburgerButtonClose.addEventListener("click", closeHamburger);