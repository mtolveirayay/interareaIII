let animar = document.querySelectorAll(".animar");
animar.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
  el.style.transition = "opacity 0.5s ease-out, transform 0.5 ease-out";
});

let observador = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    } else {
      entry.target.style.opacity = "0";
      entry.target.style.transform = "translateY(50px)";
    }
  });
}, {threshold: 0.1});


animar.forEach((el) => observador.observe(el))
