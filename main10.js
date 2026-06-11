// Like Button

const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        let count = btn.querySelector("span");

        if(!btn.classList.contains("active")){
            count.textContent = Number(count.textContent) + 1;
            btn.classList.add("active");
        }else{
            count.textContent = Number(count.textContent) - 1;
            btn.classList.remove("active");
        }

    });

});


// Scroll Reveal Animation

const reveals = document.querySelectorAll(".reveal");

function revealCards(){

    reveals.forEach(card => {

        const windowHeight = window.innerHeight;
        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < windowHeight - 100){
            card.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealCards);
revealCards();