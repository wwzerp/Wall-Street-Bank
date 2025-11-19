// Espera que o documento carregue
document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio real para não recarregar a página
            
            const nome = document.getElementById('nome').value;
            
            // Simples alerta de sucesso
            alert(`Obrigado, ${nome}! A sua mensagem foi enviada para a NYSE. Entraremos em contacto brevemente.`);
            
            form.reset(); // Limpa o formulário
        });
    }
});