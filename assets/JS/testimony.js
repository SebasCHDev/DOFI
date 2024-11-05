document.addEventListener("DOMContentLoaded", function () {
  const testimonies = document.querySelectorAll(".testimony");
  const prevButton = document.getElementById("before");
  const nextButton = document.getElementById("after");
  let currentTestimony = 0;

  testimonies[currentTestimony].classList.add("testimony--show");

  function showTestimony(index) {
    testimonies.forEach((testimony, i) => {
      testimony.classList.remove("testimony--show");
      if (i === index) {
        testimony.classList.add("testimony--show");
      }
    });
  }

  nextButton.addEventListener("click", () => {
    currentTestimony = (currentTestimony + 1) % testimonies.length;
    showTestimony(currentTestimony);
  });

  prevButton.addEventListener("click", () => {
    currentTestimony =
      (currentTestimony - 1 + testimonies.length) % testimonies.length;
    showTestimony(currentTestimony);
  });
});
