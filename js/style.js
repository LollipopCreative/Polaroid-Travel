var canvas = document.getElementById("canvas");
var kontext = canvas.getContext("2d");

canvas.width = 1100;
canvas.height = 600;

var background = new Image();
background.src = "https://originalmap.de/wp-content/uploads/2019/08/Klassische-Weltkarte_Original-Map.jpg";

// Make sure the image is loaded first otherwise nothing will draw.
background.onload = function(){
    ctx.drawImage(background,0,0);   
}


//  - fillRect -Viereck gefüllt
//  20 und 20 sind die x und y koodinaten
// 150 und 150 ist die Höhe und die Breite

kontext.fillStyle ='red';
kontext.fillRect (20,20,150,150);

kontext.fillStyle ='green';
kontext.fillRect (200,20,150,150);

// - strokeRect - Viereck mit Umrandung 

kontext.lineWidth =5;
kontext.strokeStyle ='RGB(255,0,120)';
kontext.strokeRect (400,20,150,150);


// - clearRect - aus einer Form etwas rausschneiden
// Die neue Form überlappt auf der alten form und schneidet sie aus
// Ich um mittig auszustanzen muss die neue Form ein bissel kleiner sein
// als die  Form darunter

kontext.clearRect (25,25,140,140);

// fillText - als erstes in '' den text schreiben dann koodinaten

kontext.fillStyle= 'black';
kontext.fontsize= 30;
kontext.fillText ('Hallo World', 20,200);


// Stroke Text - Umrandeter Text

kontext.lineWidth =1;
kontext.strokeStyle ='#FF8C00';
kontext.strokeText ('Hallo World', 20, 300);


// paths- Pfade zeichnen

kontext.beginPath();
    kontext.moveTo (200,200);
    kontext.lineTo (400,200);
    kontext.lineTo (300,400);
kontext.closePath();

kontext.strokeStyle='black';
kontext.stroke ();

kontext.beginPath();
    kontext.moveTo (200,400);
    kontext.lineTo (400,400);
    kontext.lineTo (300,600);
kontext.closePath();

kontext.strokeStyle='black';
kontext.stroke ();
// kontext.fill ();


// Kresie Zeichnen -

// arc(x, y, radius, startAngle, endAngle, anticlockwise)


let centerX = canvas.width / 2;
let centerY = canvas.height / 2;

kontext.beginPath();
kontext.arc(centerX,centerY,80,0,2*Math.PI,true);
kontext.fill();

//  Polaroids zum Wackeln bringen

function wackeln(){
    document.getQuerySelector ('wackeln')
    .style.transform = 'rotate(10deg)';
}


let ctx = document.getElementById('wackeln')
ctx.rotate(45 * Math.PI / 180);



// Bilderkarusell

// let picArrays = new Array();
// picArr [0] = tibitische_flagen.jpeg;
// picArr [1] = <p>hallo</p>;
// picArr [2] = thailand_frau.jpeg;

// let idx =1;
// let timer;

// function tauschPic() {
//     document.getElementById('bilderkarusell').src=picArrays[idx];
//         if (idx==2)
//             inx=0;
        
//         else
//             idx ++;

//         timer =setTimeout ("tauschPic()", 1000);
// }


// function resetPic(){
//     clearTimeout(timer);
//     document.getElementById('bilderkarusell').src=picArrays[0];
// }



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




 // wackelnde bilder
    
 var a = Math.random() * 10 - 5;
 function mOver(obj) {
     obj.style.transform ="rotate(10deg)"
     obj.style.transition =" 0.5s linear";
 }

 function mOut(obj) {
     obj.style.transform ="rotate(0deg)"

 }



//  Wähle deine Zielorte aus


