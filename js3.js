
function openImg(img){
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");

    popup.style.display = "flex";
    popupImg.src = img.src;
}

function closeImg(){
    document.getElementById("popup").style.display = "none";
}

document.addEventListener("keydown", function(e){
    if(e.key === "Escape"){
        closeImg();
    }
});