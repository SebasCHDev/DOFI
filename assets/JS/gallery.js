let zoom = document.querySelector(".zoom");
let imgNormal = document.querySelectorAll(".imgNormal");
let imgGrande = document.getElementById("imgGrande");
let cerrarBtn = document.querySelector(".cerrar");
let simboloZoom = document.querySelectorAll(".simboloZoom");

simboloZoom.forEach(function(icon, index){
    icon.onclick = function (){
        let img = imgNormal[index];
        zoom.style.display = "flex";
        imgGrande.src = img.src;
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
