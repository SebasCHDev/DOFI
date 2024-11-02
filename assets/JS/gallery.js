const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const images = document.querySelectorAll(".gallery-image");
const closeModal = document.querySelector(".close");

images.forEach(image => {
  image.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImage.src = image.src;
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

function showSection(sectionId) {
  const sections = document.querySelectorAll(".gallery-section");
  sections.forEach(section => {
    section.classList.remove("active");
  });

  const activeSection = document.getElementById(sectionId);
  activeSection.classList.add("active");
}

window.onload = () => {
  showSection('general');
};
