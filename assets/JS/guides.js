// Alternar visibilidad de las categorías
const categoriaBtns = document.querySelectorAll('.categoria-btn');

categoriaBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        const itemsList = this.nextElementSibling;
        const arrow = this.querySelector('.flechaDesplegable');

        if (itemsList.style.display === "none") {
            itemsList.style.display = "block";
            arrow.innerHTML = '&#9660;'; // Triángulo apuntando a la derecha
        } else {
            itemsList.style.display = "none";
            arrow.innerHTML = '&#9658;'; // Triángulo apuntando hacia abajo
        }
    })
});

//cambio de secciones 

function mostrarSeccion(seccion) {
    const secciones = document.querySelectorAll('.secciones');
    const noVendido = document.querySelectorAll('.noVendido');

    secciones.forEach(sec => {
        sec.style.display = 'none';
    });

    if (seccion === 'all') {
        secciones.forEach(sec => {
            sec.style.display = 'block';
        });
        noVendido.forEach(article => {
            article.style.display = 'none';
        });
    } else {
        const seccionSeleccionada = document.querySelector(`.${seccion}`);
        seccionSeleccionada.style.display = 'block';

        const articulosNoVendidos = seccionSeleccionada.querySelectorAll('.noVendido');
        articulosNoVendidos.forEach(article => {
            article.style.display = 'block';
            article.style.backgroundImage = 'block';
        });
    }
}
mostrarSeccion('all');


//zoom en imagen

const contenedores = document.querySelectorAll(".imgZoom");

contenedores.forEach(imgZoom => {
    imgZoom.addEventListener("mousemove", function (movimiento) {
        const rect = imgZoom.getBoundingClientRect();
        const x = movimiento.clientX - rect.left;
        const y = movimiento.clientY - rect.top;

        imgZoom.style.backgroundSize = "120%";
        imgZoom.style.backgroundPosition = `${(x / rect.width) * 100}% ${(y / rect.height) * 100}%`;
    });

    imgZoom.addEventListener("mouseleave", function () {
        imgZoom.style.backgroundSize = "contain";
        imgZoom.style.backgroundPosition = "center";
    });
});


//ventana Emergente

function abrirModal(id) {
    const modal = document.getElementById("modal");
    const contenido = document.getElementById("contenido");

    const articulo = document.getElementById(id);
    contenido.innerHTML = articulo.innerHTML;

    modal.style.display = "flex";

    configurarCarrusel(contenido);
}
//carrusel

function configurarCarrusel(contenido) {
    const imagenGrande = contenido.querySelector(".imagenGrande");
    const imagenesPequeñas = contenido.querySelectorAll(".imagenPequeña");

    imagenesPequeñas.forEach((imagenPequeña) => {
        imagenPequeña.removeEventListener("click", cambiarImagen);
        imagenPequeña.addEventListener("click", cambiarImagen);
    });

    function cambiarImagen() {
        const nuevaImagen = this.getAttribute("data-imagen");
        imagenGrande.src = nuevaImagen;

        imagenesPequeñas.forEach(img => img.classList.remove("activa"));
        this.classList.add("activa");
    }
}

const closeModal = document.querySelector(".close");
closeModal.addEventListener("click", () => {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
    location.reload(); 
});

window.addEventListener("click", (e) => {
    const modal = document.getElementById("modal");
    if (e.target === modal) {
        modal.style.display = "none";
        location.reload(); 
    }
});

 //selección cantidad

 const selects = document.querySelectorAll('.cantidad');

 selects.forEach((select) => {
   for (let i = 1; i <= 20; i++) {
     const option = document.createElement('option');
     option.value = i;
     option.textContent = i;
     select.appendChild(option);
   }
 });