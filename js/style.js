



// Cookie Banner
const cookieContainer = document.querySelector(".cookie_container");
const cookieButton = document.querySelector(".cookie_button");


cookieButton.addEventListener("click", () => {
    cookieContainer.classList.remove("active");
    // wenn man Seite neu läd, soll das Cookie Banner nicht nochmal aufpoppen
    // erstmal in den Localstorrage einen wert speichern
    localStorage.setItem("cookieBannerDisplayes", "true");
});

setTimeout(() =>{
    // wenn der wert CookieBannerDisplayes nicht gepeichert ist, dann soll das Banner gezeigt werden
    if(!localStorage.getItem("cookieBannerDisplayes"))
    cookieContainer.classList.add("active");
}, 2000);
// Cookie Banner Ende


// wackelnde bilder 
var a = Math.random() * 10 - 5;
function mOver(obj) {
    obj.style.transform ="rotate(10deg)";
    obj.style.transition =" 0.5s linear";
}

function mOut(obj) {
    obj.style.transform ="rotate(0deg)";

} 
// wackelnde Bilder Ende




// start Slideshow

    
const punkte = document.getElementsByClassName("punkte");
punkte[0].classList.add("aktiv");


const slide = document.getElementsByClassName('slide');
slide[0].classList.add("aktiv");

// Wenn man auf die Pfeile klickt, dass man dann ein Bild weiterschalten kann
let aktuellerIndex = 0;

function umschalten (anzahl){
  
    // neuer Index ist immer plus oder minus 1 (ist in html als Anzahl angegeben)
    let neuerIndex =aktuellerIndex + anzahl;

    // wenn auf der ersten Folie nach links geklickt wird, soll das letzte bild kommen
    if(neuerIndex < 0){
        neuerIndex = slide.length -1;
    }

    // nach der letzten folie soll wieder die erste kommen
    if(neuerIndex > slide.length -1){
        neuerIndex = 0;
    }
   
    springeZuFolie(neuerIndex);

}

// Auf Punkte Klicken und zur gewünschten folie springen

function springeZuFolie(neuerIndex){
    // wenn man klickt, wird das erste Bild und der erste Punkt wieder transaprent (remove aktiv)
    punkte[aktuellerIndex].classList.remove("aktiv");
    slide[aktuellerIndex].classList.remove("aktiv");
    
    // damit beim klicken punkt und bilder der zeiten Folie eingeblendet werden
    punkte[neuerIndex].classList.add("aktiv");
    slide[neuerIndex].classList.add("aktiv");

    // damit js den neuen Indix als Aktuellen speichert und man da weitermachen kann, wo man aufgehört hat
    aktuellerIndex = neuerIndex;

}



// Ende Slideshow


// Start Ajax

// ReiseZiiele
var ReiseInfoDiv = document.getElementById("reise_info");
var btn = document.getElementById("btn");
var pageCounter =1;

btn.addEventListener("click", function(){
    var ourRequest =new XMLHttpRequest();
    ourRequest.open('GET', "../json/"+pageCounter+".json");
    ourRequest.onload =function(){
        var meineDaten = JSON.parse(ourRequest.responseText);
        renderHTML(meineDaten);
    };

ourRequest.send();

pageCounter++;
// durch die If Bedingung verschwindet der Button nach drei mal Klicken
 if (pageCounter>3){
    btn.classList.add ("hide-me");
}

});

function renderHTML (data){
    var htmlString = "";

    // durch die For schleife werden alle Objekte im Array nacheinander aufgerufen
    for (i=0; i < data.length; i++) {
        // Das ist der String, der im HTML dokument reingeschrieben wird
        // += damit alle Objekte des Arrays
        htmlString += "<p>" + data[i].Ort + " ist ein schöner Ort mit vielen " + data[i].Sehenswürdigkeiten + 
        ". Dort kann man gut " + data[i].toDo + ".</p>"

    }
    ReiseInfoDiv.insertAdjacentHTML('beforeend',htmlString);

}

// Reiseziel Ende
