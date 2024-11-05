const categoriaBtns = document.querySelectorAll(".categoria-btn");

categoriaBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const itemsList = this.nextElementSibling;
    const arrow = this.querySelector(".flechaDesplegable");

    if (itemsList.style.display === "none") {
      itemsList.style.display = "block";
      arrow.innerHTML = "&#9660;";
    } else {
      itemsList.style.display = "none";
      arrow.innerHTML = "&#9658;";
    }
  });
});

function mostrarSeccion(seccion) {
  const secciones = document.querySelectorAll(".secciones");
  secciones.forEach((sec) => {
    sec.style.display = "none";
  });

  const seccionesGenerales = document.querySelectorAll(".seccionesGenerales");
  seccionesGenerales.forEach((gen) => {
    gen.style.display = "none";
  });

  if (seccion === "masVendidos") {
    secciones.forEach((sec) => {
      sec.style.display = "block";
    });
  } else {
    const seccionSeleccionada = document.querySelector(`.${seccion}`);
    if (seccionSeleccionada) seccionSeleccionada.style.display = "block";

    const seccionGeneral = document.querySelector(
      `.seccionesGenerales.${seccion}`
    );
    if (seccionGeneral) seccionGeneral.style.display = "block";
  }
}

mostrarSeccion("masVendidos");

const contenedores = document.querySelectorAll(".imgZoom");

contenedores.forEach((imgZoom) => {
  imgZoom.addEventListener("mousemove", function (movimiento) {
    const rect = imgZoom.getBoundingClientRect();
    const x = movimiento.clientX - rect.left;
    const y = movimiento.clientY - rect.top;

    imgZoom.style.backgroundSize = "120%";
    imgZoom.style.backgroundPosition = `${(x / rect.width) * 100}% ${
      (y / rect.height) * 100
    }%`;
  });

  imgZoom.addEventListener("mouseleave", function () {
    imgZoom.style.backgroundSize = "contain";
    imgZoom.style.backgroundPosition = "center";
  });
});

function abrirModal(id) {
  const modal = document.getElementById("modal");
  const contenido = document.getElementById("contenido");

  const articulo = document.getElementById(id);
  contenido.innerHTML = articulo.innerHTML;

  modal.style.display = "flex";

  configurarCarrusel(contenido);
}

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

    imagenesPequeñas.forEach((img) => img.classList.remove("activa"));
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

const selects = document.querySelectorAll(".cantidad");

selects.forEach((select) => {
  for (let i = 1; i <= 20; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    select.appendChild(option);
  }
});
