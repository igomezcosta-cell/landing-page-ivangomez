// Este archivo maneja la interactividad de la página.

console.log("¡La página de Iván Gómez está cargada y lista para el breakthrough!");

document.addEventListener('DOMContentLoaded', () => {
    // Manejo del scroll suave para los enlaces internos (como el CTA del header)
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Verifica que el enlace no sea solo una URL placeholder (#)
            if (link.getAttribute('href') !== "#" && link.getAttribute('href').length > 1) {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Realiza el scroll suave
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    
                    if (targetId === '#comunidad') {
                        console.log("El usuario hizo clic para unirse a CASA.");
                    }
                }
            }
        });
    });
});
