



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



// // Start Danke Popup

// document.getElementById('button').addEventListener("click", function() {
// 	document.querySelector('.hintergrund').style.display = "flex";
// });

// document.querySelector('.close').addEventListener("click", function() {
// 	document.querySelector('.hintergrund').style.display = "none";
// });

// // Start End Popup



// Start Ajax
// ReiseZiiele aus den drei Boxen
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





// Canvas
function init() {

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    draw(ctx);

    popupSdafrika(ctx);

    sdafrika(ctx);

    popupKaribik(ctx);

    karibik(ctx);

    popupTailand(ctx);

    thailand(ctx);

    flugzeugRoute(ctx);

    flugzeug(ctx);
  }

  function draw(ctx) {

    // weltkarte/europaafrika
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(410.2, 342.7);
    ctx.lineTo(376.6, 220.9);
    ctx.lineTo(321.8, 217.5);
    ctx.lineTo(306.2, 182.9);
    ctx.lineTo(338.6, 130.3);
    ctx.lineTo(384.5, 127.0);
    ctx.lineTo(406.8, 143.7);
    ctx.lineTo(439.2, 143.7);
    ctx.lineTo(453.8, 130.3);
    ctx.lineTo(428.1, 124.7);
    ctx.lineTo(426.9, 114.7);
    ctx.lineTo(415.8, 115.8);
    ctx.lineTo(392.7, 97.7);
    ctx.lineTo(393.4, 109.1);
    ctx.lineTo(402.0, 118.0);
    ctx.lineTo(395.4, 121.6);
    ctx.lineTo(381.0, 103.0);
    ctx.lineTo(369.0, 107.2);
    ctx.lineTo(358.2, 116.2);
    ctx.lineTo(357.0, 121.6);
    ctx.lineTo(349.9, 126.4);
    ctx.lineTo(334.9, 123.4);
    ctx.lineTo(335.5, 105.4);
    ctx.lineTo(351.7, 107.2);
    ctx.lineTo(356.4, 100.6);
    ctx.lineTo(349.3, 94.7);
    ctx.lineTo(371.4, 80.9);
    ctx.lineTo(408.6, 71.3);
    ctx.lineTo(414.0, 46.1);
    ctx.lineTo(394.2, 65.3);
    ctx.lineTo(375.0, 54.5);
    ctx.lineTo(414.0, 26.4);
    ctx.lineTo(445.1, 31.8);
    ctx.lineTo(431.9, 40.1);
    ctx.lineTo(440.9, 49.1);
    ctx.lineTo(499.6, 34.7);
    ctx.lineTo(579.9, 19.2);
    ctx.lineTo(760.2, 38.3);
    ctx.lineTo(741.6, 82.7);
    ctx.lineTo(721.9, 53.3);
    ctx.lineTo(685.9, 64.1);
    ctx.lineTo(710.5, 92.3);
    ctx.lineTo(705.7, 127.6);
    ctx.lineTo(670.4, 121.0);
    ctx.lineTo(689.5, 146.8);
    ctx.lineTo(666.2, 174.3);
    ctx.lineTo(656.0, 173.7);
    ctx.lineTo(665.0, 200.1);
    ctx.bezierCurveTo(665.0, 200.1, 654.2, 213.9, 651.8, 212.7);
    ctx.bezierCurveTo(649.4, 211.5, 606.3, 172.5, 606.3, 172.5);
    ctx.lineTo(577.2, 209.1);
    ctx.lineTo(558.9, 174.3);
    ctx.lineTo(491.8, 147.4);
    ctx.lineTo(494.8, 163.5);
    ctx.lineTo(512.8, 161.7);
    ctx.lineTo(521.8, 171.9);
    ctx.lineTo(479.8, 195.3);
    ctx.lineTo(448.7, 150.4);
    ctx.lineTo(478.1, 213.9);
    ctx.lineTo(497.2, 209.4);
    ctx.lineTo(466.7, 253.4);
    ctx.lineTo(472.1, 282.2);
    ctx.lineTo(452.3, 312.7);
    ctx.lineTo(434.9, 338.5);
    ctx.lineTo(410.2, 342.7);
    ctx.closePath();
    ctx.fillStyle = "rgb(218, 218, 217)";
    ctx.fill();

    // weltkarte/madagaska
    ctx.beginPath();
    ctx.moveTo(479.3, 316.3);
    ctx.lineTo(497.2, 284.0);
    ctx.lineTo(475.7, 289.9);
    ctx.lineTo(479.3, 316.3);
    ctx.closePath();
    ctx.fill();

    // weltkarte/sdamerika
    ctx.beginPath();
    ctx.moveTo(191.1, 397.8);
    ctx.lineTo(161.1, 297.1);
    ctx.lineTo(125.2, 249.8);
    ctx.lineTo(146.8, 206.1);
    ctx.lineTo(206.7, 231.2);
    ctx.lineTo(254.6, 257.0);
    ctx.lineTo(238.4, 312.1);
    ctx.lineTo(191.1, 397.8);
    ctx.closePath();
    ctx.fill();

    // weltkarte/nordamerika
    ctx.beginPath();
    ctx.moveTo(127.0, 212.7);
    ctx.lineTo(59.9, 179.1);
    ctx.lineTo(32.9, 116.8);
    ctx.lineTo(51.5, 78.5);
    ctx.lineTo(27.6, 54.5);
    ctx.lineTo(0.0, 60.5);
    ctx.lineTo(23.4, 32.9);
    ctx.lineTo(110.2, 32.9);
    ctx.lineTo(191.7, 32.9);
    ctx.lineTo(146.2, 59.9);
    ctx.lineTo(173.7, 71.9);
    ctx.lineTo(195.9, 50.9);
    ctx.lineTo(219.9, 66.5);
    ctx.lineTo(222.3, 85.7);
    ctx.lineTo(134.8, 142.6);
    ctx.lineTo(80.3, 164.1);
    ctx.lineTo(127.0, 212.7);
    ctx.closePath();
    ctx.fill();

    // weltkarte/grnland
    ctx.beginPath();
    ctx.moveTo(202.5, 5.4);
    ctx.lineTo(335.5, 0.0);
    ctx.lineTo(262.4, 53.9);
    ctx.lineTo(251.6, 13.8);
    ctx.lineTo(202.5, 5.4);
    ctx.closePath();
    ctx.fill();

    // weltkarte/australien
    ctx.beginPath();
    ctx.moveTo(670.4, 346.3);
    ctx.lineTo(675.1, 305.5);
    ctx.lineTo(729.1, 274.4);
    ctx.lineTo(743.4, 295.3);
    ctx.lineTo(756.0, 276.2);
    ctx.lineTo(776.4, 314.5);
    ctx.lineTo(768.0, 338.5);
    ctx.lineTo(736.3, 355.8);
    ctx.lineTo(724.3, 343.3);
    ctx.lineTo(702.1, 337.9);
    ctx.lineTo(670.4, 346.3);
    ctx.closePath();
    ctx.fill();

    // weltkarte/insel1
    ctx.beginPath();
    ctx.moveTo(733.9, 246.2);
    ctx.lineTo(780.0, 254.6);
    ctx.lineTo(772.2, 272.6);
    ctx.lineTo(747.0, 265.4);
    ctx.lineTo(733.9, 246.2);
    ctx.closePath();
    ctx.fill();

    // weltkarte/insel2
    ctx.beginPath();
    ctx.moveTo(668.0, 241.4);
    ctx.lineTo(684.7, 247.4);
    ctx.lineTo(688.9, 222.3);
    ctx.lineTo(668.0, 241.4);
    ctx.closePath();
    ctx.fill();

    // weltkarte/insel3
    ctx.beginPath();
    ctx.moveTo(635.6, 230.0);
    ctx.lineTo(656.0, 252.2);
    ctx.lineTo(648.8, 257.6);
    ctx.lineTo(635.6, 230.0);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function popupSdafrika(ctx) {

    // popupSdafrika/Pfad
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(597.2, 199.8);
    ctx.bezierCurveTo(597.2, 208.2, 593.9, 215.7, 588.4, 221.2);
    ctx.bezierCurveTo(582.9, 226.7, 575.3, 230.1, 567.0, 230.1);
    ctx.lineTo(546.3, 230.1);
    ctx.lineTo(499.3, 248.4);
    ctx.lineTo(502.8, 230.1);
    ctx.lineTo(476.5, 230.1);
    ctx.bezierCurveTo(459.7, 230.1, 446.2, 216.5, 446.2, 199.8);
    ctx.bezierCurveTo(446.2, 191.4, 449.6, 183.9, 455.0, 178.4);
    ctx.bezierCurveTo(460.5, 172.9, 468.1, 169.5, 476.5, 169.5);
    ctx.lineTo(567.0, 169.5);
    ctx.bezierCurveTo(583.7, 169.5, 597.2, 183.1, 597.2, 199.8);
    ctx.closePath();
    ctx.stroke();

    // popupSdafrika/Madagaska
    ctx.font = "27.0px 'Arial'";
    ctx.fillText("Madagaska", 452.8, 209.1);
    ctx.restore();
  }

  function sdafrika(ctx) {

    // sdafrika/Gruppe
    ctx.save();

    // sdafrika/Gruppe/Pfad
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(496.2, 269.8);
    ctx.bezierCurveTo(497.0, 268.2, 497.4, 266.4, 497.4, 264.5);
    ctx.bezierCurveTo(497.4, 257.9, 492.1, 252.6, 485.5, 252.6);
    ctx.bezierCurveTo(478.9, 252.6, 473.6, 257.9, 473.6, 264.5);
    ctx.bezierCurveTo(473.6, 265.9, 473.8, 267.2, 474.2, 268.4);
    ctx.fillStyle = "rgb(131, 192, 192)";
    ctx.fill();

    // sdafrika/Gruppe/Pfad
    ctx.beginPath();
    ctx.moveTo(496.2, 269.8);
    ctx.lineTo(485.4, 300.5);
    ctx.lineTo(474.1, 268.4);
    ctx.lineTo(474.2, 268.4);
    ctx.fill();

    // sdafrika/Ellipse
    ctx.restore();
    ctx.beginPath();
    ctx.moveTo(492.6, 265.2);
    ctx.bezierCurveTo(492.6, 269.5, 489.2, 272.9, 485.0, 272.9);
    ctx.bezierCurveTo(480.7, 272.9, 477.3, 269.5, 477.3, 265.2);
    ctx.bezierCurveTo(477.3, 261.0, 480.7, 257.5, 485.0, 257.5);
    ctx.bezierCurveTo(489.2, 257.5, 492.6, 261.0, 492.6, 265.2);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 254, 255)";
    ctx.fill();
    ctx.restore();
  }

  function popupKaribik(ctx) {

    // popupKaribik/Pfad
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(212.4, 82.6);
    ctx.bezierCurveTo(212.4, 91.0, 209.0, 98.5, 203.5, 104.0);
    ctx.bezierCurveTo(198.1, 109.5, 190.5, 112.9, 182.1, 112.9);
    ctx.lineTo(161.5, 112.9);
    ctx.lineTo(114.4, 131.2);
    ctx.lineTo(117.9, 112.9);
    ctx.lineTo(91.6, 112.9);
    ctx.bezierCurveTo(74.9, 112.9, 61.3, 99.3, 61.3, 82.6);
    ctx.bezierCurveTo(61.3, 74.2, 64.7, 66.7, 70.2, 61.2);
    ctx.bezierCurveTo(75.7, 55.7, 83.3, 52.3, 91.6, 52.3);
    ctx.lineTo(182.1, 52.3);
    ctx.bezierCurveTo(198.8, 52.3, 212.4, 65.9, 212.4, 82.6);
    ctx.closePath();
    ctx.stroke();

    // popupKaribik/Karibik
    ctx.font = "27.0px 'Arial'";
    ctx.fillText("Karibik", 92.9, 90.7);
    ctx.restore();
  }

  function karibik(ctx) {

    // karibik/Gruppe
    ctx.save();

    // karibik/Gruppe/Pfad
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(102.6, 145.9);
    ctx.bezierCurveTo(103.4, 144.3, 103.9, 142.5, 103.9, 140.6);
    ctx.bezierCurveTo(103.9, 134.1, 98.5, 128.7, 92.0, 128.7);
    ctx.bezierCurveTo(85.4, 128.7, 80.0, 134.1, 80.0, 140.6);
    ctx.bezierCurveTo(80.0, 142.0, 80.3, 143.3, 80.7, 144.5);
    ctx.fillStyle = "rgb(131, 192, 192)";
    ctx.fill();

    // karibik/Gruppe/Pfad
    ctx.beginPath();
    ctx.moveTo(102.6, 145.9);
    ctx.lineTo(91.8, 176.6);
    ctx.lineTo(80.6, 144.5);
    ctx.lineTo(80.7, 144.5);
    ctx.fill();

    // karibik/Ellipse
    ctx.restore();
    ctx.beginPath();
    ctx.moveTo(99.1, 141.3);
    ctx.bezierCurveTo(99.1, 145.6, 95.7, 149.0, 91.4, 149.0);
    ctx.bezierCurveTo(87.2, 149.0, 83.7, 145.6, 83.7, 141.3);
    ctx.bezierCurveTo(83.7, 137.1, 87.2, 133.6, 91.4, 133.6);
    ctx.bezierCurveTo(95.7, 133.6, 99.1, 137.1, 99.1, 141.3);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 254, 255)";
    ctx.fill();
    ctx.restore();
  }

  function popupTailand(ctx) {

    // popupTailand/Pfad
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(709.0, 68.2);
    ctx.bezierCurveTo(709.0, 76.6, 705.6, 84.2, 700.1, 89.7);
    ctx.bezierCurveTo(694.6, 95.1, 687.1, 98.5, 678.7, 98.5);
    ctx.lineTo(658.1, 98.5);
    ctx.lineTo(611.0, 116.8);
    ctx.lineTo(614.5, 98.5);
    ctx.lineTo(588.2, 98.5);
    ctx.bezierCurveTo(571.5, 98.5, 557.9, 85.0, 557.9, 68.2);
    ctx.bezierCurveTo(557.9, 59.9, 561.3, 52.3, 566.8, 46.8);
    ctx.bezierCurveTo(572.3, 41.4, 579.8, 38.0, 588.2, 38.0);
    ctx.lineTo(678.7, 38.0);
    ctx.bezierCurveTo(695.4, 38.0, 709.0, 51.5, 709.0, 68.2);
    ctx.closePath();
    ctx.stroke();

    // popupTailand/Nepal
    ctx.font = "27.0px 'Arial'";
    ctx.fillText("Nepal", 601.3, 77.0);
    ctx.restore();
  }

  function thailand(ctx) {

    // thailand/Gruppe
    ctx.save();

    // thailand/Gruppe/Pfad
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(606.4, 140.1);
    ctx.bezierCurveTo(607.2, 138.6, 607.6, 136.8, 607.6, 134.9);
    ctx.bezierCurveTo(607.6, 128.3, 602.3, 123.0, 595.7, 123.0);
    ctx.bezierCurveTo(589.1, 123.0, 583.8, 128.3, 583.8, 134.9);
    ctx.bezierCurveTo(583.8, 136.2, 584.0, 137.5, 584.4, 138.7);
    ctx.fillStyle = "rgb(131, 192, 192)";
    ctx.fill();

    // thailand/Gruppe/Pfad
    ctx.beginPath();
    ctx.moveTo(606.4, 140.1);
    ctx.lineTo(595.6, 170.8);
    ctx.lineTo(584.3, 138.7);
    ctx.lineTo(584.4, 138.7);
    ctx.fill();

    // thailand/Ellipse
    ctx.restore();
    ctx.beginPath();
    ctx.moveTo(603.4, 134.2);
    ctx.bezierCurveTo(603.4, 138.5, 600.0, 141.9, 595.7, 141.9);
    ctx.bezierCurveTo(591.5, 141.9, 588.1, 138.5, 588.1, 134.2);
    ctx.bezierCurveTo(588.1, 130.0, 591.5, 126.5, 595.7, 126.5);
    ctx.bezierCurveTo(600.0, 126.5, 603.4, 130.0, 603.4, 134.2);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 254, 255)";
    ctx.fill();
    ctx.restore();
  }

  function flugzeugRoute(ctx) {

    // flugzeugRoute/Ellipse
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(620.0, 191.8);
    ctx.bezierCurveTo(620.0, 237.7, 502.6, 274.8, 357.9, 274.8);
    ctx.bezierCurveTo(213.2, 274.8, 95.9, 237.7, 95.9, 191.8);
    ctx.bezierCurveTo(95.9, 146.0, 213.2, 108.9, 357.9, 108.9);
    ctx.bezierCurveTo(502.6, 108.9, 620.0, 146.0, 620.0, 191.8);
    ctx.closePath();
    ctx.lineWidth = 0.5;
    ctx.stroke();
    ctx.restore();
  }

  function flugzeug(ctx) {

    // flugzeug/Gruppe
    ctx.save();

    // flugzeug/Gruppe/Pfad
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(374.3, 103.4);
    ctx.bezierCurveTo(375.4, 104.3, 376.0, 106.4, 375.7, 108.8);
    ctx.bezierCurveTo(375.4, 111.8, 373.7, 114.2, 372.0, 114.0);
    ctx.bezierCurveTo(370.3, 113.8, 369.2, 111.2, 369.5, 108.1);
    ctx.bezierCurveTo(369.7, 106.5, 370.2, 105.2, 370.9, 104.2);
    ctx.fillStyle = "rgb(248, 248, 249)";
    ctx.fill();
    ctx.strokeStyle = "rgb(1, 2, 2)";
    ctx.stroke();

    // flugzeug/Gruppe/Pfad
    ctx.beginPath();
    ctx.moveTo(322.6, 53.3);
    ctx.bezierCurveTo(323.2, 52.0, 323.8, 50.7, 324.2, 49.4);
    ctx.bezierCurveTo(322.4, 49.0, 320.5, 48.7, 318.6, 48.5);
    ctx.bezierCurveTo(318.3, 48.5, 317.9, 48.4, 317.6, 48.5);
    ctx.bezierCurveTo(317.3, 48.6, 317.0, 48.9, 316.8, 49.1);
    ctx.bezierCurveTo(316.1, 49.8, 315.4, 50.5, 314.8, 51.3);
    ctx.fillStyle = "rgb(204, 203, 204)";
    ctx.fill();
    ctx.stroke();

    // flugzeug/Gruppe/Pfad
    ctx.beginPath();
    ctx.moveTo(435.8, 89.0);
    ctx.bezierCurveTo(435.6, 91.3, 436.0, 93.7, 437.4, 95.6);
    ctx.lineTo(437.4, 95.7);
    ctx.bezierCurveTo(439.7, 94.7, 444.4, 91.5, 445.6, 88.5);
    ctx.bezierCurveTo(446.4, 86.6, 445.5, 84.3, 444.0, 82.8);
    ctx.bezierCurveTo(443.1, 81.9, 441.9, 81.2, 440.7, 80.6);
    ctx.bezierCurveTo(439.7, 81.0, 439.0, 81.8, 438.4, 82.7);
    ctx.bezierCurveTo(437.1, 84.5, 436.1, 86.7, 435.8, 89.0);
    ctx.closePath();
    ctx.fillStyle = "rgb(131, 192, 192)";
    ctx.fill();
    ctx.stroke();

    // flugzeug/Gruppe/Pfad
    ctx.beginPath();
    ctx.moveTo(419.2, 74.6);
    ctx.bezierCurveTo(421.8, 75.0, 425.8, 76.9, 427.9, 79.3);
    ctx.bezierCurveTo(428.6, 78.5, 429.1, 77.6, 429.2, 76.6);
    ctx.bezierCurveTo(426.6, 74.5, 423.8, 72.9, 420.8, 71.7);
    ctx.bezierCurveTo(420.8, 72.8, 420.1, 73.9, 419.2, 74.6);
    ctx.closePath();
    ctx.fillStyle = "rgb(226, 226, 226)";
    ctx.fill();
    ctx.stroke();

    // flugzeug/Gruppe/Zusammengesetzter Pfad
    ctx.beginPath();

    // flugzeug/Gruppe/Zusammengesetzter Pfad/Pfad
    ctx.moveTo(318.5, 83.4);
    ctx.bezierCurveTo(318.6, 84.8, 320.2, 85.6, 321.5, 86.0);
    ctx.bezierCurveTo(323.6, 86.7, 325.7, 87.4, 327.7, 88.1);
    ctx.bezierCurveTo(329.6, 88.7, 331.5, 89.3, 333.5, 89.9);
    ctx.bezierCurveTo(333.5, 89.9, 333.5, 90.0, 333.5, 90.0);
    ctx.bezierCurveTo(341.4, 92.4, 349.4, 94.4, 357.6, 95.8);
    ctx.bezierCurveTo(358.3, 95.6, 359.1, 95.3, 359.9, 95.1);
    ctx.bezierCurveTo(359.4, 94.3, 360.2, 93.2, 361.2, 92.6);
    ctx.bezierCurveTo(362.2, 92.1, 363.3, 92.0, 364.5, 91.9);
    ctx.bezierCurveTo(373.6, 91.2, 382.9, 91.0, 391.7, 93.7);
    ctx.bezierCurveTo(392.7, 94.0, 393.8, 94.5, 393.9, 95.5);
    ctx.bezierCurveTo(394.1, 96.4, 393.4, 97.2, 392.7, 97.7);
    ctx.bezierCurveTo(390.5, 99.5, 387.6, 100.1, 384.9, 100.7);
    ctx.bezierCurveTo(410.8, 102.5, 431.0, 98.4, 437.4, 95.7);
    ctx.lineTo(437.4, 95.6);
    ctx.bezierCurveTo(436.0, 93.7, 435.6, 91.3, 435.8, 89.0);
    ctx.bezierCurveTo(436.1, 86.7, 437.1, 84.5, 438.4, 82.7);
    ctx.bezierCurveTo(439.0, 81.8, 439.7, 81.0, 440.7, 80.6);
    ctx.bezierCurveTo(440.0, 80.3, 439.2, 80.0, 438.5, 79.7);
    ctx.bezierCurveTo(436.8, 79.1, 435.0, 78.4, 433.3, 77.7);
    ctx.bezierCurveTo(432.4, 77.3, 431.5, 77.0, 430.6, 76.8);
    ctx.bezierCurveTo(430.6, 78.3, 428.8, 83.3, 416.6, 89.7);
    ctx.bezierCurveTo(415.2, 88.9, 413.8, 88.1, 412.5, 87.2);
    ctx.bezierCurveTo(412.4, 87.1, 412.3, 87.1, 412.3, 87.0);
    ctx.lineTo(412.3, 87.0);
    ctx.bezierCurveTo(410.3, 85.7, 408.3, 84.0, 408.0, 81.7);
    ctx.bezierCurveTo(407.9, 80.2, 408.5, 78.7, 409.5, 77.7);
    ctx.bezierCurveTo(409.8, 77.2, 410.3, 76.9, 410.7, 76.6);
    ctx.bezierCurveTo(411.5, 76.1, 412.4, 75.7, 413.2, 75.4);
    ctx.bezierCurveTo(414.4, 75.1, 415.5, 74.9, 416.5, 74.3);
    ctx.bezierCurveTo(417.5, 73.7, 418.8, 71.9, 418.3, 70.9);
    ctx.bezierCurveTo(414.5, 69.7, 410.5, 69.1, 406.5, 69.2);
    ctx.bezierCurveTo(393.8, 69.4, 367.9, 70.2, 346.6, 73.6);
    ctx.lineTo(346.6, 73.6);
    ctx.bezierCurveTo(335.2, 75.3, 325.1, 77.8, 319.1, 81.2);
    ctx.bezierCurveTo(318.2, 81.9, 318.4, 82.3, 318.5, 83.4);
    ctx.closePath();

    // flugzeug/Gruppe/Zusammengesetzter Pfad/Pfad
    ctx.moveTo(395.0, 83.6);
    ctx.bezierCurveTo(395.1, 82.7, 395.9, 82.1, 396.8, 82.2);
    ctx.bezierCurveTo(397.7, 82.3, 398.3, 83.1, 398.2, 83.9);
    ctx.bezierCurveTo(398.1, 84.8, 397.3, 85.5, 396.5, 85.4);
    ctx.bezierCurveTo(395.6, 85.3, 394.9, 84.5, 395.0, 83.6);
    ctx.closePath();

    // flugzeug/Gruppe/Zusammengesetzter Pfad/Pfad
    ctx.moveTo(386.9, 84.5);
    ctx.bezierCurveTo(387.0, 83.6, 387.8, 83.0, 388.7, 83.0);
    ctx.bezierCurveTo(389.6, 83.1, 390.2, 83.9, 390.1, 84.8);
    ctx.bezierCurveTo(390.0, 85.7, 389.2, 86.3, 388.3, 86.3);
    ctx.bezierCurveTo(387.5, 86.2, 386.8, 85.4, 386.9, 84.5);
    ctx.closePath();

    // flugzeug/Gruppe/Zusammengesetzter Pfad/Pfad
    ctx.moveTo(378.8, 85.0);
    ctx.bezierCurveTo(378.8, 84.1, 379.6, 83.4, 380.5, 83.5);
    ctx.bezierCurveTo(381.4, 83.6, 382.1, 84.4, 382.0, 85.3);
    ctx.bezierCurveTo(381.9, 86.2, 381.1, 86.8, 380.2, 86.7);
    ctx.bezierCurveTo(379.3, 86.6, 378.7, 85.8, 378.8, 85.0);
    ctx.closePath();

    // flugzeug/Gruppe/Zusammengesetzter Pfad/Pfad
    ctx.moveTo(370.4, 85.7);
    ctx.bezierCurveTo(370.5, 84.8, 371.3, 84.2, 372.2, 84.3);
    ctx.bezierCurveTo(373.1, 84.4, 373.7, 85.2, 373.7, 86.0);
    ctx.bezierCurveTo(373.6, 86.9, 372.8, 87.6, 371.9, 87.5);
    ctx.bezierCurveTo(371.0, 87.4, 370.4, 86.6, 370.4, 85.7);
    ctx.closePath();

    // flugzeug/Gruppe/Zusammengesetzter Pfad/Pfad
    ctx.moveTo(362.1, 86.3);
    ctx.bezierCurveTo(362.2, 85.5, 363.0, 84.8, 363.9, 84.9);
    ctx.bezierCurveTo(364.8, 85.0, 365.4, 85.8, 365.3, 86.7);
    ctx.bezierCurveTo(365.2, 87.6, 364.4, 88.2, 363.5, 88.1);
    ctx.bezierCurveTo(362.6, 88.0, 362.0, 87.2, 362.1, 86.3);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 254, 255)";
    ctx.fill();
    ctx.stroke();

    // flugzeug/Gruppe/Pfad
    ctx.beginPath();
    ctx.moveTo(308.4, 55.3);
    ctx.fillStyle = "rgb(226, 226, 226)";
    ctx.fill();
    ctx.stroke();

    // flugzeug/Gruppe/Pfad
    ctx.beginPath();
    ctx.moveTo(320.0, 80.7);
    ctx.bezierCurveTo(325.6, 77.8, 337.2, 75.0, 346.8, 73.5);
    ctx.bezierCurveTo(346.8, 73.5, 324.9, 54.3, 322.8, 53.2);
    ctx.bezierCurveTo(318.5, 50.8, 306.7, 50.8, 307.0, 51.3);
    ctx.bezierCurveTo(319.1, 73.3, 320.0, 80.7, 320.0, 80.7);
    ctx.fill();
    ctx.stroke();

    // flugzeug/Gruppe/Pfad
    ctx.beginPath();
    ctx.moveTo(318.7, 56.5);
    ctx.bezierCurveTo(315.4, 56.1, 312.1, 55.7, 308.8, 55.2);
    ctx.bezierCurveTo(308.7, 55.1, 308.6, 55.1, 308.5, 55.1);
    ctx.bezierCurveTo(306.9, 57.0, 305.0, 58.5, 302.9, 59.8);
    ctx.bezierCurveTo(305.9, 60.2, 309.0, 60.6, 312.0, 61.0);
    ctx.bezierCurveTo(312.1, 60.6, 312.5, 60.4, 312.8, 60.2);
    ctx.bezierCurveTo(314.9, 59.0, 316.9, 57.8, 318.7, 56.5);
    ctx.closePath();
    ctx.fillStyle = "rgb(204, 203, 204)";
    ctx.fill();
    ctx.stroke();

    // flugzeug/Gruppe/Pfad
    ctx.beginPath();
    ctx.moveTo(400.3, 69.2);
    ctx.bezierCurveTo(399.1, 66.9, 397.3, 64.1, 395.4, 62.3);
    ctx.bezierCurveTo(394.5, 61.4, 393.5, 60.6, 392.2, 60.2);
    ctx.bezierCurveTo(391.2, 60.0, 390.2, 60.0, 389.2, 60.0);
    ctx.bezierCurveTo(386.4, 60.2, 383.7, 60.3, 380.9, 60.4);
    ctx.bezierCurveTo(382.1, 62.7, 383.4, 67.3, 383.9, 69.9);
    ctx.fillStyle = "rgb(226, 226, 226)";
    ctx.fill();
    ctx.stroke();

    // flugzeug/Gruppe/Pfad
    ctx.beginPath();
    ctx.moveTo(440.8, 80.6);
    ctx.bezierCurveTo(440.8, 80.6, 440.7, 80.6, 440.7, 80.6);
    ctx.stroke();

    // flugzeug/Gruppe/Pfad
    ctx.beginPath();
    ctx.moveTo(310.9, 111.6);
    ctx.bezierCurveTo(315.4, 113.3, 324.9, 115.0, 324.9, 115.0);
    ctx.bezierCurveTo(326.8, 114.7, 339.8, 111.6, 353.3, 108.4);
    ctx.lineTo(353.3, 108.4);
    ctx.bezierCurveTo(359.4, 106.9, 365.5, 105.4, 370.8, 104.2);
    ctx.bezierCurveTo(377.5, 102.5, 382.8, 101.3, 384.9, 100.7);
    ctx.bezierCurveTo(387.6, 100.1, 390.5, 99.5, 392.7, 97.7);
    ctx.bezierCurveTo(393.4, 97.2, 394.1, 96.4, 393.9, 95.5);
    ctx.bezierCurveTo(393.8, 94.5, 392.7, 94.0, 391.7, 93.7);
    ctx.bezierCurveTo(382.9, 91.0, 373.6, 91.2, 364.5, 91.9);
    ctx.bezierCurveTo(363.3, 92.0, 362.2, 92.1, 361.2, 92.6);
    ctx.bezierCurveTo(360.2, 93.2, 359.4, 94.3, 359.9, 95.1);
    ctx.bezierCurveTo(359.1, 95.3, 358.3, 95.6, 357.6, 95.8);
    ctx.bezierCurveTo(341.8, 101.1, 326.1, 106.5, 310.9, 111.6);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // flugzeug/Gruppe/Pfad
    ctx.beginPath();
    ctx.moveTo(371.6, 113.9);
    ctx.bezierCurveTo(366.5, 113.6, 357.8, 110.6, 353.2, 108.3);
    ctx.lineTo(370.8, 104.2);
    ctx.bezierCurveTo(370.8, 104.2, 367.5, 110.7, 371.6, 113.9);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 254, 255)";
    ctx.fill();
    ctx.stroke();

    // flugzeug/Gruppe/Pfad
    ctx.beginPath();
    ctx.moveTo(366.1, 105.3);
    ctx.bezierCurveTo(365.2, 107.6, 365.3, 110.8, 366.2, 113.0);
    ctx.fill();
    ctx.stroke();

    // flugzeug/Gruppe/Pfad
    ctx.beginPath();
    ctx.moveTo(357.8, 95.9);
    ctx.bezierCurveTo(357.7, 95.9, 357.7, 95.9, 357.6, 95.8);
    ctx.stroke();

    // flugzeug/Gruppe/Pfad
    ctx.beginPath();
    ctx.moveTo(408.0, 81.7);
    ctx.bezierCurveTo(408.3, 84.0, 410.3, 85.7, 412.3, 87.0);
    ctx.lineTo(412.3, 87.0);
    ctx.bezierCurveTo(412.3, 87.1, 412.4, 87.1, 412.5, 87.2);
    ctx.bezierCurveTo(413.8, 88.1, 415.2, 88.9, 416.6, 89.7);
    ctx.bezierCurveTo(428.8, 83.3, 430.6, 78.3, 430.6, 76.8);
    ctx.bezierCurveTo(430.1, 76.7, 429.6, 76.6, 429.2, 76.6);
    ctx.bezierCurveTo(429.1, 77.6, 428.6, 78.5, 427.9, 79.3);
    ctx.bezierCurveTo(427.6, 79.7, 427.3, 80.1, 427.0, 80.4);
    ctx.bezierCurveTo(425.9, 81.5, 424.7, 82.4, 423.4, 83.3);
    ctx.bezierCurveTo(422.2, 84.1, 421.0, 85.0, 419.8, 85.8);
    ctx.bezierCurveTo(418.7, 86.5, 417.5, 87.3, 416.2, 87.2);
    ctx.bezierCurveTo(414.7, 87.2, 412.7, 85.7, 411.7, 84.5);
    ctx.bezierCurveTo(410.9, 83.6, 410.0, 82.4, 409.9, 81.2);
    ctx.bezierCurveTo(409.7, 79.4, 412.1, 78.0, 413.7, 77.2);
    ctx.bezierCurveTo(415.4, 76.4, 417.3, 76.0, 418.8, 74.9);
    ctx.bezierCurveTo(418.9, 74.9, 419.1, 74.8, 419.2, 74.6);
    ctx.bezierCurveTo(420.1, 73.9, 420.8, 72.8, 420.8, 71.7);
    ctx.bezierCurveTo(420.0, 71.4, 419.1, 71.1, 418.3, 70.9);
    ctx.bezierCurveTo(418.8, 71.9, 417.5, 73.7, 416.5, 74.3);
    ctx.bezierCurveTo(415.5, 74.9, 414.4, 75.1, 413.2, 75.4);
    ctx.bezierCurveTo(412.4, 75.7, 411.5, 76.1, 410.7, 76.6);
    ctx.bezierCurveTo(410.3, 76.9, 409.8, 77.2, 409.5, 77.7);
    ctx.bezierCurveTo(408.5, 78.7, 407.9, 80.2, 408.0, 81.7);
    ctx.closePath();
    ctx.fillStyle = "rgb(131, 192, 192)";
    ctx.fill();
    ctx.stroke();

    // flugzeug/Gruppe/Pfad
    ctx.beginPath();
    ctx.moveTo(418.3, 70.9);
    ctx.bezierCurveTo(418.3, 70.9, 418.3, 70.9, 418.3, 70.9);
    ctx.stroke();

    // flugzeug/Gruppe/Pfad
    ctx.beginPath();
    ctx.moveTo(430.6, 76.8);
    ctx.bezierCurveTo(430.6, 76.7, 430.6, 76.7, 430.6, 76.7);
    ctx.stroke();

    // flugzeug/Gruppe/Pfad
    ctx.beginPath();
    ctx.moveTo(409.9, 81.2);
    ctx.bezierCurveTo(410.0, 82.4, 410.9, 83.6, 411.7, 84.5);
    ctx.bezierCurveTo(412.7, 85.7, 414.7, 87.2, 416.2, 87.2);
    ctx.bezierCurveTo(417.5, 87.3, 418.7, 86.5, 419.8, 85.8);
    ctx.bezierCurveTo(421.0, 85.0, 422.2, 84.1, 423.4, 83.3);
    ctx.bezierCurveTo(424.7, 82.4, 425.9, 81.5, 427.0, 80.4);
    ctx.bezierCurveTo(427.3, 80.1, 427.6, 79.7, 427.9, 79.3);
    ctx.bezierCurveTo(425.8, 76.9, 421.8, 75.0, 419.2, 74.6);
    ctx.bezierCurveTo(419.1, 74.8, 418.9, 74.9, 418.8, 74.9);
    ctx.bezierCurveTo(417.3, 76.0, 415.4, 76.4, 413.7, 77.2);
    ctx.bezierCurveTo(412.1, 78.0, 409.7, 79.4, 409.9, 81.2);
    ctx.closePath();
    ctx.fillStyle = "rgb(226, 226, 226)";
    ctx.fill();
    ctx.stroke();

    // flugzeug/Gruppe/Pfad
    ctx.beginPath();
    ctx.moveTo(420.8, 71.7);
    ctx.bezierCurveTo(420.8, 71.7, 420.8, 71.7, 420.8, 71.6);
    ctx.stroke();

    // flugzeug/Gruppe/Pfad
    ctx.beginPath();
    ctx.moveTo(419.2, 74.6);
    ctx.bezierCurveTo(419.2, 74.6, 419.2, 74.6, 419.2, 74.6);
    ctx.stroke();

    // flugzeug/Gruppe/Pfad
    ctx.beginPath();
    ctx.moveTo(427.9, 79.4);
    ctx.bezierCurveTo(427.9, 79.4, 427.9, 79.4, 427.9, 79.3);
    ctx.stroke();

    // flugzeug/Gruppe/Pfad
    ctx.beginPath();
    ctx.moveTo(410.8, 76.6);
    ctx.bezierCurveTo(388.8, 80.4, 366.8, 81.8, 344.5, 83.2);
    ctx.bezierCurveTo(336.4, 83.8, 318.8, 82.8, 318.4, 82.7);
    ctx.stroke();

    // flugzeug/Gruppe/Pfad
    ctx.beginPath();
    ctx.moveTo(412.5, 87.2);
    ctx.bezierCurveTo(408.2, 87.5, 403.3, 87.8, 399.0, 88.1);
    ctx.bezierCurveTo(394.8, 88.5, 390.6, 88.8, 386.3, 89.1);
    ctx.bezierCurveTo(368.7, 90.2, 351.0, 90.0, 333.4, 89.9);
    ctx.stroke();

    // flugzeug/Gruppe/Pfad
    ctx.beginPath();
    ctx.moveTo(395.0, 83.6);
    ctx.bezierCurveTo(394.9, 84.5, 395.6, 85.3, 396.5, 85.4);
    ctx.bezierCurveTo(397.3, 85.5, 398.1, 84.8, 398.2, 83.9);
    ctx.bezierCurveTo(398.3, 83.1, 397.7, 82.3, 396.8, 82.2);
    ctx.bezierCurveTo(395.9, 82.1, 395.1, 82.7, 395.0, 83.6);
    ctx.closePath();
    ctx.fillStyle = "rgb(1, 2, 2)";
    ctx.fill();
    ctx.stroke();

    // flugzeug/Gruppe/Pfad
    ctx.beginPath();
    ctx.moveTo(378.8, 85.0);
    ctx.bezierCurveTo(378.7, 85.8, 379.3, 86.6, 380.2, 86.7);
    ctx.bezierCurveTo(381.1, 86.8, 381.9, 86.2, 382.0, 85.3);
    ctx.bezierCurveTo(382.1, 84.4, 381.4, 83.6, 380.5, 83.5);
    ctx.bezierCurveTo(379.6, 83.4, 378.8, 84.1, 378.8, 85.0);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // flugzeug/Gruppe/Pfad
    ctx.beginPath();
    ctx.moveTo(362.1, 86.3);
    ctx.bezierCurveTo(362.0, 87.2, 362.6, 88.0, 363.5, 88.1);
    ctx.bezierCurveTo(364.4, 88.2, 365.2, 87.6, 365.3, 86.7);
    ctx.bezierCurveTo(365.4, 85.8, 364.8, 85.0, 363.9, 84.9);
    ctx.bezierCurveTo(363.0, 84.8, 362.2, 85.5, 362.1, 86.3);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // flugzeug/Gruppe/Pfad
    ctx.beginPath();
    ctx.moveTo(370.4, 85.7);
    ctx.bezierCurveTo(370.4, 86.6, 371.0, 87.4, 371.9, 87.5);
    ctx.bezierCurveTo(372.8, 87.6, 373.6, 86.9, 373.7, 86.0);
    ctx.bezierCurveTo(373.7, 85.2, 373.1, 84.4, 372.2, 84.3);
    ctx.bezierCurveTo(371.3, 84.2, 370.5, 84.8, 370.4, 85.7);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // flugzeug/Gruppe/Pfad
    ctx.beginPath();
    ctx.moveTo(386.9, 84.5);
    ctx.bezierCurveTo(386.8, 85.4, 387.5, 86.2, 388.3, 86.3);
    ctx.bezierCurveTo(389.2, 86.3, 390.0, 85.7, 390.1, 84.8);
    ctx.bezierCurveTo(390.2, 83.9, 389.6, 83.1, 388.7, 83.0);
    ctx.bezierCurveTo(387.8, 83.0, 387.0, 83.6, 386.9, 84.5);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // flugzeug/Gruppe/Ellipse
    ctx.beginPath();
    ctx.moveTo(370.9, 108.5);
    ctx.bezierCurveTo(370.7, 110.3, 371.4, 111.8, 372.3, 111.9);
    ctx.bezierCurveTo(373.3, 112.0, 374.2, 110.7, 374.4, 108.9);
    ctx.bezierCurveTo(374.6, 107.2, 374.0, 105.7, 373.0, 105.6);
    ctx.bezierCurveTo(372.0, 105.5, 371.1, 106.8, 370.9, 108.5);
    ctx.closePath();
    ctx.fillStyle = "rgb(226, 226, 226)";
    ctx.fill();
    ctx.stroke();

    // flugzeug/Gruppe/Ellipse
    ctx.beginPath();
    ctx.moveTo(371.7, 108.8);
    ctx.bezierCurveTo(371.6, 109.7, 372.0, 110.5, 372.5, 110.6);
    ctx.bezierCurveTo(373.0, 110.7, 373.5, 109.9, 373.6, 109.0);
    ctx.bezierCurveTo(373.7, 108.0, 373.4, 107.2, 372.9, 107.2);
    ctx.bezierCurveTo(372.3, 107.1, 371.8, 107.8, 371.7, 108.8);
    ctx.closePath();
    ctx.fillStyle = "rgb(131, 192, 192)";
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
  }