



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
