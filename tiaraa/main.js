const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const update = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){
            counter.innerText =
            Math.ceil(current + increment);

            setTimeout(update, 20);
        }
        else{
            counter.innerText = target;
        }
    };

    update();
});

const reviews = [
    "Ushqimi ishte fantastik dhe ambienti perfekt.",
    "Shërbimi më i mirë që kam provuar ndonjëherë.",
    "Restorant elegant me staf shumë profesional.",
    "Do të rikthehem përsëri me familjen time."
];

let index = 0;

setInterval(() => {

    index++;

    if(index >= reviews.length){
        index = 0;
    }

    document.getElementById("review").textContent =
    reviews[index];

}, 3000);