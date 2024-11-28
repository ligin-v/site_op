$(document).ready(function() {
    // Captura o clique no item "Mapa"
    $('#menu li:contains("Mapa")').on('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        
        // Esconde todos os elementos da página com esmaecimento
        $('body').children().not('#background-index, #btn-voltar').fadeOut(1000, function() {
            // Adiciona o botão de voltar apenas se ele não existir
            if ($('#btn-voltar').length === 0) {
                $('body').append('<button id="btn-voltar" style="position: fixed; bottom: 20px; right: 20px; padding: 10px 20px; font-size: 16px; cursor: pointer;">Voltar</button>');
            }
        });
    });

    // Captura o clique no botão "Voltar"
    $(document).on('click', '#btn-voltar', function() {
        // Restaura todos os elementos da página com esmaecimento
        $('body').children().fadeIn(1000);
        // Remove o botão de voltar
        $('#btn-voltar').remove();
    });
});