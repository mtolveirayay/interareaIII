let animar = document.querySelectorAll(".animar");

animar.forEach((el) => {
    el.style.opacity = '0'; 
    
    el.style.transform = 'translateY(50px)';
   
    el.style.transition = 'opacity 2.5s ease-out, transform 2.5s ease-out';
}); 


let observador = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            
            entry.target.style.transform = 'translateY(0)';
        }

        else {

            entry.target.style.opacity = '0'
            entry.target.style.transform = 'translateY(50px)'
        }
    }); 
}, { threshold: 0.6 }); 

animar.forEach((el) => observador.observe(el));

// relembrar o que cada coisad aqui faz
// adicionar animacao para que toda vez que o elemento saia da tela (pare de ser observado), aconteca uma animacao oposta a atual