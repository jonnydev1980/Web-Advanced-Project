function scrollToSection() {
  window.scrollTo({
    top: 700,
    behavior: "smooth"
  });
}

function openReserve() {
  alert("Reservation system opening...");
}

/* COUNTERS */

let c1 = 0;
let c2 = 0;
let c3 = 0;

let counter = setInterval(() => {

  if (c1 < 5000) c1 += 50;
  if (c2 < 120) c2 += 2;
  if (c3 < 20) c3 += 1;

  document.getElementById("c1").innerText = c1;
  document.getElementById("c2").innerText = c2;
  document.getElementById("c3").innerText = c3;

  if (c1 >= 5000 && c2 >= 120 && c3 >= 20) {
    clearInterval(counter);
  }

}, 40);

/* TESTIMONIALS */

const reviews = [

  "Best restaurant experience ever!",
  "Amazing food and atmosphere!",
  "Luxury dining at its finest!",
  "Outstanding chefs and service!",
  "Absolutely unforgettable experience!"

];

let reviewIndex = 0;

setInterval(() => {

  reviewIndex++;

  if (reviewIndex >= reviews.length) {
    reviewIndex = 0;
  }

  document.getElementById("review").innerText =
  reviews[reviewIndex];

}, 3000);

/* MENU FILTER */

const menuItems = [

  {
    type: "food",
    name: "Steak Deluxe"
  },

  {
    type: "food",
    name: "Royal Pasta"
  },

  {
    type: "food",
    name: "Truffle Pizza"
  },

  {
    type: "drink",
    name: "Fresh Juice"
  },

  {
    type: "drink",
    name: "Wine Collection"
  }

];

const filter =
document.getElementById("foodFilter");

if (filter) {

  filter.addEventListener("change", () => {

    let html = "";

    menuItems.forEach(item => {

      if (
        filter.value === "all" ||
        item.type === filter.value
      ) {

        html += `
        <p>${item.name}</p>
        `;

      }

    });

    document.getElementById("menuResults")
    .innerHTML = html;

  });

  filter.dispatchEvent(
    new Event("change")
  );

}

/* RESERVATION FORM */

const reserveForm =
document.getElementById("reserveForm");

if (reserveForm) {

  reserveForm.addEventListener(
    "submit",
    function(e) {

      e.preventDefault();

      let name =
      document.getElementById("name").value;

      let email =
      document.getElementById("email").value;

      let guests =
      document.getElementById("guests").value;

      if (
        name === "" ||
        email === "" ||
        guests === ""
      ) {

        document.getElementById("msg")
        .innerText =
        "Please fill all fields.";

      }

      else {

        document.getElementById("msg")
        .innerText =
        "Reservation Sent Successfully!";

        reserveForm.reset();

      }

    }

  );

}

/* SCROLL ANIMATION */

window.addEventListener("scroll", () => {

  const cards =
  document.querySelectorAll(".card");

  cards.forEach(card => {

    const position =
    card.getBoundingClientRect().top;

    if (
      position <
      window.innerHeight - 100
    ) {

      card.style.opacity = "1";
      card.style.transform =
      "translateY(0px)";

    }

  });

});

/* TOP BUTTON */

const topBtn =
document.getElementById("topBtn");

window.onscroll = function () {

  if (

    document.body.scrollTop > 400 ||

    document.documentElement.scrollTop > 400

  ) {

    topBtn.style.display = "block";

  }

  else {

    topBtn.style.display = "none";

  }

};

function goTop() {

  window.scrollTo({

    top: 0,
    behavior: "smooth"

  });

}

/* HERO FLOAT EFFECT */

const hero =
document.querySelector(".hero-content");

if (hero) {

  setInterval(() => {

    hero.style.transform =
    "translateY(-10px)";

    setTimeout(() => {

      hero.style.transform =
      "translateY(0px)";

    }, 1000);

  }, 2000);

}

/* GALLERY ZOOM */

const images =
document.querySelectorAll(
  ".gallery-grid img"
);

images.forEach(img => {

  img.addEventListener(
    "mouseenter",
    () => {

      img.style.transform =
      "scale(1.08)";

    }
  );

  img.addEventListener(
    "mouseleave",
    () => {

      img.style.transform =
      "scale(1)";

    }
  );

});

/* WELCOME MESSAGE */

window.addEventListener(
  "load",
  () => {

    console.log(
      "Welcome to Velora Restaurant"
    );

  }
);