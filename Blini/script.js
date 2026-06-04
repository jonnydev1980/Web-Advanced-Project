function bookDrive(){

alert("Test Drive u rezervua!");

}

function validateForm(){

let name =
document.getElementById("fullname").value;

let email =
document.getElementById("email").value;

let message =
document.getElementById("message").value;

if(name==="" || email==="" || message===""){

alert("Plotëso të gjitha fushat!");

return false;

}

alert("Mesazhi u dërgua!");

return true;

}

let cars=0;
let clients=0;
let years=0;

let interval=setInterval(()=>{

if(cars<150){
cars++;
document.getElementById("carsCounter").innerHTML=cars;
}

if(clients<500){
clients+=5;
document.getElementById("clientsCounter").innerHTML=clients;
}

if(years<20){
years++;
document.getElementById("yearsCounter").innerHTML=years;
}

},20);

const images=[
"images/car1.jpg",
"images/car2.jpg",
"images/car3.jpg",
"images/car4.jpg"
];

let index=0;

setInterval(()=>{

index++;

if(index>=images.length){

index=0;

}

document.getElementById("carImage").src=
images[index];

},3000);

const reviews=[

"★★★★★ Shërbim perfekt!",
"★★★★★ Vetura super cilësore!",
"★★★★★ Staf profesional!"

];

let r=0;

setInterval(()=>{

document.getElementById("review").innerHTML=
reviews[r];

r++;

if(r>=reviews.length){

r=0;

}

},2500);

document
.getElementById("themeBtn")
.addEventListener("click",()=>{

document.body.classList.toggle("light");

});