let head = document.querySelector("h3");
let color1 = document.querySelector(".input1");
let color2 = document.querySelector(".input2");
let body = document.querySelector("#gradient");



function setGradient(){
    body.style.background = 
    "linear-gradient(to right, "
     + color1.value 
     + ","
     + color2.value 
     +") ";
    head.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
