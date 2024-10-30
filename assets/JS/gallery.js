// Selecciona el modal y sus elementos
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const images = document.querySelectorAll(".gallery-image");
const closeModal = document.querySelector(".close");

// Abre el modal cuando se hace clic en una imagen
images.forEach(image => {
  image.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImage.src = image.src;
  });
});

// Cierra el modal al hacer clic en la 'X'
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cierra el modal al hacer clic fuera de la imagen
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

// Mostrar solo la sección seleccionada
function showSection(sectionId) {
  // Oculta todas las secciones
  const sections = document.querySelectorAll(".gallery-section");
  sections.forEach(section => {
    section.classList.remove("active");
  });

  // Muestra la sección seleccionada
  const activeSection = document.getElementById(sectionId);
  activeSection.classList.add("active");
}

window.onload = () => {
  showSection('general');
};
