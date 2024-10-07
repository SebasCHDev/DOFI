let zoom = document.querySelector(".zoom");
let imgNormal = document.querySelectorAll(".imgNormal");
let imgGrande = document.getElementById("imgGrande");
let cerrarBtn = document.querySelector(".cerrar");

imgNormal.forEach(function(img){
    img.onclick = function (){
        zoom.style.display = "flex";
        imgGrande.src = this.src;
    }
})

cerrarBtn.onclick = function(){
    zoom.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == zoom) {
        zoom.style.display = "none";
    }
}
