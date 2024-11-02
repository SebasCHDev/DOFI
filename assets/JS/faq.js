document.addEventListener("DOMContentLoaded", function() {
    const faqSections = document.querySelectorAll(".faq-section h2");
    faqSections.forEach(section => {
        section.addEventListener("click", function() {
            const answer = this.nextElementSibling;
            const arrow = this.querySelector(".arrow");

            // Alterna la visibilidad del párrafo
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                answer.classList.remove("open");
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
                answer.classList.add("open");
            }

            // Alterna la rotación de la flecha
            arrow.classList.toggle("rotate");
        });
    });
});