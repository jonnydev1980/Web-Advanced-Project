function submitForm(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let people = document.getElementById("people").value;
  let date = document.getElementById("date").value;

  if(name && email && people && date) {
    alert("Reservation sent successfully! 🍽️");
  } else {
    alert("Please fill all fields!");
  }
}
/* Counter */

let count = 0;

let reserved = setInterval(() => {

  count++;

  document.getElementById("counter").innerText = count;

  if(count >= 150){
    clearInterval(reserved);
  }

}, 30);

/* Rating animation */

const rating =
document.getElementById("rating");

rating.addEventListener("mouseenter", () => {

  rating.style.transform = "scale(1.2)";
  rating.style.transition = ".3s";

});

rating.addEventListener("mouseleave", () => {

  rating.style.transform = "scale(1)";

});
