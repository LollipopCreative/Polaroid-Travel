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






