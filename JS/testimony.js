document.addEventListener("DOMContentLoaded", function() {
    const testimonies = document.querySelectorAll('.testimony');
    const prevButton = document.getElementById('before');
    const nextButton = document.getElementById('after');
    let currentTestimony = 0;
  
    // Mostrar solo el primer testimonio al cargar la página
    testimonies[currentTestimony].classList.add('testimony--show');
  
    // Función para cambiar testimonios
    function showTestimony(index) {
      testimonies.forEach((testimony, i) => {
        testimony.classList.remove('testimony--show');
        if (i === index) {
          testimony.classList.add('testimony--show');
        }
      });
    }
  
    // Función para el botón "Next"
    nextButton.addEventListener('click', () => {
      currentTestimony = (currentTestimony + 1) % testimonies.length;
      showTestimony(currentTestimony);
    });
  
    // Función para el botón "Prev"
    prevButton.addEventListener('click', () => {
      currentTestimony = (currentTestimony - 1 + testimonies.length) % testimonies.length;
      showTestimony(currentTestimony);
    });
  });
  