document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            const nome = document.getElementById('nome').value;
            
            alert(`Obrigado, ${nome}! A sua mensagem foi enviada para a NYSE. Entraremos em contacto brevemente.`);
            
            form.reset();
        });
    }
});