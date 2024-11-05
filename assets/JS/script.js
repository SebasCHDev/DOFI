function toggleDescripcion() {
  var contenido = document.getElementById("contenidoInspiracion");
  if (contenido.classList.contains("oculto")) {
    contenido.classList.remove("oculto");
    contenido.classList.add("visible");
  } else {
    contenido.classList.remove("visible");
    contenido.classList.add("oculto");
  }
}
