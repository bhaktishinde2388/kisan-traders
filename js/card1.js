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
