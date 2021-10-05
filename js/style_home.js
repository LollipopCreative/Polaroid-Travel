// start Slideshow

const punkte = document.getElementsByClassName("punkte");
punkte[0].classList.add("aktiv");


const slide = document.getElementsByClassName('slide');
slide[0].classList.add("aktiv");

// Wenn man auf die Pfeile klickt, dass man dann ein Bild weiterschalten kann
let aktuellerIndex = 0;

function umschalten(anzahl) {

    // neuer Index ist immer plus oder minus 1 (ist in html als Anzahl angegeben)
    let neuerIndex = aktuellerIndex + anzahl;

    // wenn auf der ersten Folie nach links geklickt wird, soll das letzte bild kommen
    if (neuerIndex < 0) {
        neuerIndex = slide.length - 1;
    }

    // nach der letzten folie soll wieder die erste kommen
    if (neuerIndex > slide.length - 1) {
        neuerIndex = 0;
    }

    springeZuFolie(neuerIndex);

}

// Auf Punkte Klicken und zur gewünschten Folie springen

function springeZuFolie(neuerIndex) {
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
// ReiseZiiele aus den drei Boxen
var ReiseInfoDiv = document.getElementById("reise_info");
var btn = document.getElementById("btn");
var pageCounter = 1;

btn.addEventListener("click", function () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', "../json/" + pageCounter + ".json");
    ourRequest.onload = function () {
        var meineDaten = JSON.parse(ourRequest.responseText);
        renderHTML(meineDaten);
    };

    ourRequest.send();

    pageCounter++;
    // durch die If Bedingung verschwindet der Button nach drei mal Klicken
    if (pageCounter > 3) {
        btn.classList.add("hide-me");
    }

});

function renderHTML(data) {
    var htmlString = "";

    // durch die For schleife werden alle Objekte im Array nacheinander aufgerufen
    for (i = 0; i < data.length; i++) {
        // Das ist der String, der im HTML dokument reingeschrieben wird
        // += damit alle Objekte des Arrays
        htmlString += "<p>" + data[i].Ort + " ist ein schöner Ort mit vielen " + data[i].Sehenswürdigkeiten +
            ". Dort kann man gut " + data[i].toDo + ".</p>"

    }
    ReiseInfoDiv.insertAdjacentHTML('beforeend', htmlString);
}

// Ajax/Reiseziel Ende

