function scrollToSection() {
  window.scrollTo({
    top: 600,
    behavior: "smooth"
  });
}

function openReserve() {
  alert("Reservation system opening...");
}

/* COUNTERS */
let a = 0, b = 0, c = 0;

setInterval(() => {
  if (a < 5000) a += 50;
  if (b < 120) b += 2;
  if (c < 20) c += 1;

  document.getElementById("c1").innerText = a;
  document.getElementById("c2").innerText = b;
  document.getElementById("c3").innerText = c;
}, 40);

/* SIMPLE REVIEW CHANGE */
const reviews = [
  "Best restaurant experience ever!",
  "Amazing food and atmosphere!",
  "10/10 service and quality!"
];

let i = 0;
setInterval(() => {
  i = (i + 1) % reviews.length;
  document.getElementById("review").innerText = reviews[i];
}, 3000);