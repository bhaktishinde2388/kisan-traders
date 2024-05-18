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

//img toggler
function mainImg(b)
{
   const number = document.getElementById('bulb');
   if(b=='number-1')
   {
    number.src = './../img/index-images/store-img3.jpg';
   }
   else if(b=='number-2')
    {
        number.src = './../img/index-images/store-imgg2.jpg';
    }
    else if(b=='number-3')
    {
        number.src = './../img/index-images/store-img3 (2).jpg';
    }
   
    const choice=document.getElementById("number");

choice.innerText=`Flavour :\n ${b}`; 
}