//als de gebruiker scrolled deze functie aanroepen 
window.onscroll = function() 
{
    ChangeHeaderBackground();
    SetToTopButton();
}

// wanneer je een scroll positie bereikt, attributes veranderen van de header
function ChangeHeaderBackground() 
{
    if (window.pageYOffset > 60) 
    {
        document.getElementById("header").setAttribute("style", "transition: all 0.5s ease; padding: 15px 20px; background-color: white; box-shadow: 0px 5px 10px -3px rgba(53,53,53,0.5);");
        document.getElementById("javas0").setAttribute("style", "color: #353535;");
        document.getElementById("javas1").setAttribute("style", "color: #353535;");
        document.getElementById("javas2").setAttribute("style", "color: #353535;");
        document.getElementById("javas3").setAttribute("style", "color: #353535;");
        document.getElementById("javas4").setAttribute("style", "color: #353535;");
    } 
     else 
    {
        document.getElementById("header").setAttribute("style", "background-color: none; padding: 40px 20px; color: white;");
        document.getElementById("javas0").setAttribute("style", "color: white;");
        document.getElementById("javas1").setAttribute("style", "color: white;");
        document.getElementById("javas2").setAttribute("style", "color: white;");
        document.getElementById("javas3").setAttribute("style", "color: white;");
        document.getElementById("javas4").setAttribute("style", "color: white;");
    }
}

//Functie om de terug naar boven knop te laten zien als je bepaald aantal pixels hebt gescrolled
function SetToTopButton() 
{
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) 
    {
        document.getElementById("topButton").style.display = "block";
    } 
    else 
    {
        document.getElementById("topButton").style.display = "none";
    }
}

//naar boven kant van pagina gaan
function ToTopButtonClick() 
{
    document.body.scrollTop = 0; //voor Safari
    document.documentElement.scrollTop = 0; //voor chrome etc
}

//berekend mijn leeftijd
function AgeCounter() 
{
    var dateNow = new Date();
    var birthDate = dateNow - new Date(1996, 11, 21);
    birthDate = Math.floor(birthDate/1000/60/60/24/365);
    return birthDate;
}

//menu laten zien
function OpenMenuButtonClick() 
{
    document.getElementById("menuHidden").style.height = "100%";
    document.getElementById("html").style.overflowY = "hidden";
}

//menu niet meer laten zien
function CloseMenuButtonClick() 
{
    document.getElementById("menuHidden").style.height = "0%";
    document.getElementById("html").style.overflowY = "auto";
}

//na 2 seconden de laad balk weghalen
function RemoveLoaderTimer()
{
    setTimeout(RemoveLoader, 1500);
}

//balk weghalen en pagina naar boven scrollen
function RemoveLoader()
{
    document.getElementById("loader").style.width = "0%";
    document.getElementById("loadSign").style.display = "none";
    document.getElementById("loader").style.overflowY = "auto";
    
    ToTopButtonClick();
}

//===================================laden text======================================
let counterLoading = 0;

//laat text laten zien en elke 0,4 seconden een . erbij voegen
function loadingText()
{
    counterLoading = 3;
    document.getElementById("loadSign").innerHTML = "laden.";
    setInterval(loading, 400);
}


function loading()
{
    if(counterLoading == 3)
    {
        document.getElementById("loadSign").innerHTML = "laden.";
        counterLoading = 0;
    }
    else
    {
        document.getElementById("loadSign").innerHTML += ".";
        counterLoading++;
    }
}


