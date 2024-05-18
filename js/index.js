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
function cake(b)
{
   const flavour = document.getElementById('bulb');
   if(b=='butter scotch')
   {
   flavour.src = './../img/index-images/store-img3.jpg';
   }
   else if(b=='chocolate')
    {
        flavour.src = './../img/index-images/store-imgg2.jpg';
    }
    else if(b=='Fruit')
    {
        flavour.src = './../img/index-images/store-img3 (2).jpg';
    }
   
    const choice=document.getElementById("flavour");

choice.innerText=`Flavour :\n ${b}`; 
}