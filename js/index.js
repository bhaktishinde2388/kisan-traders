// theme switcher
function darkmode(){
    const darkMode= document.getElementById("dark-mode")
    darkMode.classList.add('active')

    const lightMode= document.getElementById("light-mode")
    lightMode.classList.remove('active')

    const body= document.getElementById("body")
    body.className = "body-dark"


}

function lightmode(){

    const lightMode= document.getElementById("light-mode")
    lightMode.classList.add('active')

    const darkMode= document.getElementById("dark-mode")
    darkMode.classList.remove('active')

    const body= document.getElementById("body")
    body.className = "body-light"

    
}