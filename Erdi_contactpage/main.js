const form = document.getElementById("contactForm");
const button = document.querySelector(".send-btn");

form.addEventListener("submit", function(e){

    e.preventDefault();

    button.innerHTML = "✓ Mesazhi u dërgua";
    button.style.background = "#22c55e";

    setTimeout(() => {
        button.innerHTML = "Dërgo Kërkesën";
        button.style.background = "red";
        form.reset();
    }, 3000);

});