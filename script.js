document.addEventListener("DOMContentLoaded", () => {

    const header = document.getElementById("main-header");
    const btnAbrirHeader = document.getElementById("btn-abrir-header");
    let headerMinimizadoPeloScroll = false;

   
    const animar = document.querySelectorAll(".animar");
    animar.forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    });

   
    const observador = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            } else {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(50px)';
            }
        });
    }, { threshold: 0.6 });

    animar.forEach((el) => observador.observe(el));

    window.addEventListener('scroll', () => {
        const section = document.getElementById('transicao-jogo');
        const painelPreto = document.getElementById('paine');

        if (!section || !painelPreto) return;

        const rect = section.getBoundingClientRect();
        let progresso = -rect.top / window.innerHeight;
        progresso = Math.min(Math.max(progresso, 0), 1);

       
        painelPreto.style.transform = `translateY(${100 - progresso * 100}%)`;

        
        if (progresso > 0.1) {
            if (header && !headerMinimizadoPeloScroll) {
                header.classList.add("header-circulo");
                headerMinimizadoPeloScroll = true;
            }
        } else {
            if (header) {
                header.classList.remove("header-circulo");
                headerMinimizadoPeloScroll = false;
            }
        }
    });

    
    if (header) {
        header.addEventListener("click", (e) => {
            if (header.classList.contains("header-circulo")) {
                e.stopPropagation();
                header.classList.remove("header-circulo");
            }
        });
    }

    
    document.addEventListener("click", (e) => {
        if (!headerMinimizadoPeloScroll || !header) return;

        const ehInterativo = e.target.closest("a, button, img, h1, h2, h3, p, span, details, input");

        if (!ehInterativo && !header.contains(e.target)) {
            header.classList.add("header-circulo");
        }
    });
});