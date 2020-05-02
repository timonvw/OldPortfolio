//constanten variables
const prices = {reserveer:150,vuur:30};
const products = {reserveer:"Reserveersysteem", vuur:"Het Vuurspel"};

//alle knoppen met deze class ophalen
let infoButtons = document.getElementsByClassName("p_button_r");
let infoCloseButtons = document.getElementsByClassName("p_info_close_b");
let infoBuyButtons = document.getElementsByClassName("p_info_buy_b");

let cartButton = document.getElementById("cart_b");
let cart = document.getElementById("cart");
let cartInfo = document.getElementById("cart_info");

let open = false;
let cartPrices = [];
let cartItems = [];
let cartTotal = 0;

//================================================event listerners toeveogen========================================
cartButton.addEventListener("click", openCart);

//door de knoppen heen loopen en op allemaal een event listener zetten
for (let i = 0; i < infoButtons.length; i++) 
{
    infoButtons[i].addEventListener('click', showInfo);
}

//door de knoppen heen loopen en op allemaal een event listener zetten
for (let i = 0; i < infoCloseButtons.length; i++) 
{
    infoCloseButtons[i].addEventListener('click', hideInfo);
}

//door de knoppen heen loopen en op allemaal een event listener zetten
for (let i = 0; i < infoBuyButtons.length; i++) 
{
    infoBuyButtons[i].addEventListener('click', addToCart);
}

//================================================functions========================================

//de infobox laten zien
function showInfo()
{
    document.getElementById(this.value).style.display = "block";
    document.getElementById("html").style.overflowY = "hidden";
}

//infobox weghalen via button
function hideInfo()
{
    closeInfo(this.value)
}

//infobox weghalen
function closeInfo(vname)
{
    document.getElementById(vname).style.display = "none";
    document.getElementById("html").style.overflowY = "auto";
}

//item aan cart toeveogen
function addToCart()
{
    //kijken of het product al in de winkelwagen staat
    if(!cartItems.includes(products[this.value]))
    {
        cartPrices.push(prices[this.value]);
        cartItems.push(products[this.value]);
        fillCart();
    }

    open = false;
    closeInfo(this.value);
    openCart();
}

//cart vullen
function fillCart()
{
    //winkelwagen leegmaken
    cartInfo.innerHTML = "";
    //totaal prijs resetten
    cartTotal = 0;
    
    if(cartItems.length <= 0)
    {
        cartInfo.innerHTML = "<br>Winkelwagen is leeg.";
    }
    else
    {
        //door alles heen lopen en toevoegen
        for(let i = 0; i < cartItems.length; i++)
        {
            cartInfo.innerHTML += "<br> <button onclick='deleteItem("+i+")' class='cart_delete_b'>&times;</button>"+cartItems[i]+"   <span style='float:right;'><b>&euro;"+cartPrices[i]+"</b></span>";
            cartTotal += cartPrices[i];
        }

        //totaal prijs toevoegen
        cartInfo.innerHTML += "<br><br>Totaal<span style='float:right;'><b>&euro;"+cartTotal+"</b></span><br><button id='cart_order_b'>afrekenen.</button>";
    }
}

//items verwijderen uit winkelwagen
function deleteItem(index)
{
    cartItems.splice(index, 1);
    cartPrices.splice(index, 1);
    fillCart();
}

//winkelwagen openen of sluiten
function openCart()
{
    if(open)
    {
        cart.style.width = "auto";
        cart.style.height = "auto";
        cartInfo.style.display = "none";
        open = false;
    }
    else
    {
        cart.style.width = "250px";
        cart.style.height = "auto";
        cartInfo.style.display = "block";
        open = true;
    }
}

//de prijs opahelen en geven
function showPrice(object)
{
    return prices.object;
}