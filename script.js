const shareBtn = document.getElementById("share-button")
const avatarSection = document.getElementById("avatar-div")
const shareSection = document.getElementById("share-section")
const activeShareBtn = document.getElementById("active-share-button")
const main = document.getElementById("main")
const widerScreenWidth = window.matchMedia("(min-width: 50em)");

function displayActiveState() {
    if (widerScreenWidth.matches) {
        shareSection.style.display = "block"
    } else {
        avatarSection.style.display = "none"
        shareSection.style.display = "block"
    }
    
}

function displayNonActiveState(e) {
    shareSection.style.display = "none"
    avatarSection.style.display = "block"
}
   


shareBtn.addEventListener("click", displayActiveState)

activeShareBtn.addEventListener("click", displayNonActiveState)