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

// products
const quantityText = document.getElementById("quantity-text");
const showQuantity = document.getElementById("show-quantity");
const showTotal = document.getElementById("show-total");

function inc()
{

let quantity = parseInt(quantityText.innerText);

if(quantity < 5)
{
  quantityText.innerText = ++quantity;
}
else
{
  alert("you cant add more than 5 items")
}
showQuantity.innerText = `${quantity} x 799`;
showTotal.innerText = `Total:${quantity * 799}`
}

function dec()
{
let quantity = parseInt(quantityText.innerText);

if(quantity > 1)
{
  quantityText.innerText = --quantity;
}
else
{
  alert("you cant add less than 1 items")
}
showQuantity.innerText = `${quantity} x 799`
showTotal.innerText = `Total:${quantity * 799}`
}


// product2
const quantityText2 = document.getElementById("quantity-text2");
const showQuantity2 = document.getElementById("show-quantity2");
const showTotal2 = document.getElementById("show-total2");

function inc2()
{

let quantity = parseInt(quantityText2.innerText);

if(quantity < 5)
{
  quantityText2.innerText = ++quantity;
}
else
{
  alert("you cant add more than 5 items")
}
showQuantity2.innerText = `${quantity} x 799`;
showTotal2.innerText = `Total:${quantity * 799}`
}

function dec2()
{
let quantity = parseInt(quantityText2.innerText);

if(quantity > 1)
{
  quantityText2.innerText = --quantity;
}
else
{
  alert("you cant add less than 1 items")
}
showQuantity2.innerText = `${quantity} x 799`
showTotal2.innerText = `Total:${quantity * 799}`
}
