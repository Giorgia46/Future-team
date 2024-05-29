$(document).ready(function() {
    
    // Funzione per cambiare il colore della preview del prodotto
    function changeProductPreviewColor(card, variant, productName) {
        var basePath = 'img/furniture/';
        var imageUrl;

        switch (variant) {
            case 'red':
                imageUrl = basePath + productName + '-red';
                break;
            case 'orange':
                imageUrl = basePath + productName + '-orange';
                break;
            case 'yellow':
                imageUrl = basePath + productName + '-yellow';
                break;
            case 'green':
                imageUrl = basePath + productName + '-green';
                break;
            case 'blue':
                imageUrl = basePath + productName + '-blue';
                break;
            case 'white':
                imageUrl = basePath + productName + '-white';
                break;
            case 'multicolor':
                imageUrl = basePath + productName + '-multicolor';
                break;
        }

        // Aggiunta della dimensione corretta in base alla larghezza dello schermo
        var screenWidth = $(window).width();
        var imageSize;

        if (screenWidth < 576) {
            imageSize = '-sm';
        } else if (screenWidth < 992) {
            imageSize = '-md';
        } else {
            imageSize = '-lg';
        }

        imageUrl += imageSize + '.png';

        // Aggiornamento dell'immagine nella card
        card.find('.card-img-top').attr('srcset', imageUrl);
    }

    // Evento click sui colori disponibili
    $(document).on('click', '.variant-option', function() {
        var variant = $(this).data('variant');
        var card = $(this).closest('.card');
        var productName = card.attr('id');
        
        // Chiamata alla funzione per cambiare il colore della preview del prodotto
        changeProductPreviewColor(card, variant, productName);
        
        // Rimozione della classe 'active' da tutte le opzioni di colore
        card.find('.variant-option').removeClass('active');
        
        // Aggiunta della classe 'active' all'opzione di colore selezionata
        $(this).addClass('active');
    });
});