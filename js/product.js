$(document).ready(function() {
    
    // Funzione per cambiare il colore del prodotto
    function changeProductColor(variant, productName, container) {
        var basePath = 'img/product-pages/';
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

        // Aggiornamento dell'immagine del prodotto
        container.find('.product-img').attr('srcset', imageUrl);
    }

    // Evento click lick sui colori disponibili
    $('#product-presentation').on('click', '.variant-option', function() {
        var variant = $(this).data('variant');
        var productName = $(this).data('product');
        var container = $(this).closest('#product-presentation');
        
        // Chiamata alla funzione per cambiare il colore dell'immagine
        changeProductColor(variant, productName, container);
        
        // Rimozione della classe 'active' da tutte le opzioni di colore 
        container.find('.variant-option').removeClass('active');
        
        // Aggiunta della classe 'active' all'opzione di colore selezionata 
        $(this).addClass('active');
    });
});




