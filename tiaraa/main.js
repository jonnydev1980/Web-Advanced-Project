function showMessage(service) {
    alert("Keni zgjedhur shërbimin: " + service);
}

// Efekt i vogël kur faqja hapet
window.addEventListener("load", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(() => {
            card.style.transition = "0.5s";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 200);
    });
});