window.onload = () => {

setTimeout(() => {

document.getElementById("loader").style.display = "none";

},2000);

};

function reserve(){

alert("Termini juaj u rezervua me sukses!");

}

function bookingForm(){

let name =
document.getElementById("name").value;

let email =
document.getElementById("email").value;

let date =
document.getElementById("date").value;

if(name==="" || email==="" || date===""){

alert("Plotëso të gjitha fushat!");

return false;

}

alert("Rezervimi u krye me sukses!");

return true;

}

let clients=0;
let cars=0;
let years=0;

let counter = setInterval(()=>{

if(clients<2500){

clients+=25;

document.getElementById("clients").innerHTML=
clients+"+";

}

if(cars<500){

cars+=5;

document.getElementById("cars").innerHTML=
cars+"+";

}

if(years<15){

years++;

document.getElementById("years").innerHTML=
years+"+";

}

},20);

const reviews=[

"★★★★★ Servisi më i mirë që kam vizituar.",

"★★★★★ Punë profesionale dhe çmime të mira.",

"★★★★★ Mekanikë shumë të aftë.",

"★★★★★ Shërbim i shpejtë dhe korrekt."

];

let reviewIndex=0;

setInterval(()=>{

document.getElementById("reviewText").innerHTML=
reviews[reviewIndex];

reviewIndex++;

if(reviewIndex>=reviews.length){

reviewIndex=0;

}

},3000);

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

let position = card.getBoundingClientRect().top;

let screen = window.innerHeight;

if(position < screen-100){

card.style.opacity="1";
card.style.transform="translateY(0px)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(100px)";
card.style.transition="1s";

});