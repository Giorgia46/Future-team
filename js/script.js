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

    // Evento click sulle opzioni di colore
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

    // Salva l'ordine originale dei prodotti
    var originalOrder = $('.products-container').html();
    
    // Funzione per filtrare e ordinare i prodotti
    function filterAndSortProducts() {
        var sortBy = $('#sort-by').val();
        var selectedCollection = $('#collection').val();
        var priceRange = $('#price-range').val();
        var selectedFurniture = $('#furniture-type').val();
        var selectedColor = $('#color').val();

        // Nasconde tutti i prodotti
        $('.product-card').css('display', 'none');

        // Filtra i prodotti in base ai criteri selezionati
        $('.product-card').each(function() {
            var productPrice = parseInt($(this).data('price'));
            var productCollection = $(this).data('collection');
            var productColors = $(this).data('color').split(',');
            var productType = $(this).data('type');

            // Mostra i prodotti che soddisfano i criteri di filtro
            if ((selectedCollection === 'default' || selectedCollection === productCollection) &&
                (priceRange === 'default' || isPriceInRange(productPrice, priceRange)) &&
                (selectedFurniture === 'default' || selectedFurniture === productType) &&
                (selectedColor === 'default' || productColors.includes(selectedColor))) {
                $(this).css('display', 'block');
            }
        });

        // Ordina i prodotti
        if (sortBy === 'price-asc') {
            $('.product-card:visible').sort(function(a, b) {
                return $(a).data('price') - $(b).data('price');
            }).appendTo('.products-container');
        } else if (sortBy === 'price-desc') {
            $('.product-card:visible').sort(function(a, b) {
                return $(b).data('price') - $(a).data('price');
            }).appendTo('.products-container');
        }
    }

    // Funzione per verificare se il prezzo è compreso nell'intervallo specificato
    function isPriceInRange(price, range) {
        switch (range) {
            case 'under-500':
                return price < 500;
            case '500-1500':
                return price >= 500 && price < 1500;
            case '1500-2500':
                return price >= 1500 && price < 2500;
            case '2500-3500':
                return price >= 2500 && price < 3500;
            case '3500-4500':
                return price >= 3500 && price < 4500;
            case 'over-4500':
                return price >= 4500;
            default:
                return false;
        }
    }

    // Gestione dei filtri e dell'ordinamento
    $('#sort-by, #collection, #price-range, #furniture-type, #color').change(filterAndSortProducts);

    // Evento click sul pulsante di reset dei filtri
    $('#reset-filters').click(function() {
        // Reimposta i valori dei filtri ai valori predefiniti
        $('#sort-by').val('default');
        $('#collection').val('default');
        $('#price-range').val('default');
        $('#furniture-type').val('default');
        $('#color').val('default');
        
        // Riporta tutti i prodotti allo stato originale
        $('.products-container').html(originalOrder);

        // Filtra e ordina i prodotti
        filterAndSortProducts();
        
        // Nasconde tutti gli elementi con indice maggiore di 11
        $('.product-card:gt(11)').hide();

        // Mostra il pulsante "Carica Altri" se ci sono ancora elementi nascosti
        if ($('.product-card:hidden').length > 0) {
            $('#load-more').show();
        }
        
        // Riassegna l'evento click al pulsante "Carica Altri"
        $('#load-more').off('click').on('click', function() {
            $('.product-card:hidden').slice(0, 12).slideDown(); // Mostra i successivi 12 elementi nascosti
            if ($('.product-card:hidden').length === 0) { // Nasconde il pulsante se non ci sono più elementi nascosti
                $('#load-more').hide();
            }
        });
    });

    // Filtra e ordina i prodotti all'avvio della pagina
    filterAndSortProducts();

    //////////////////////// CARICA ALTRI PRODOTTI //////////////////////

    $('.product-card:gt(11)').hide(); // Nasconde tutti gli elementi con indice maggiore di 11

    $('#load-more').on('click', function() {
        $('.product-card:hidden').slice(0, 12).slideDown(); // Mostra i successivi 12 elementi nascosti
        if ($('.product-card:hidden').length === 0) { // Nasconde il pulsante se non ci sono più elementi nascosti
            $('#load-more').hide();
        }
    });
});







//////////////////////////////////////// FOOTER //////////////////////////////////////////////

// Newsletter 
function subscribe() {
    var emailInput = $(".form-control"); 
    var successMessage = $("#successMessage");

    emailInput.val("");

    successMessage.removeClass("d-none").fadeIn(300);
    setTimeout(function() {
        successMessage.fadeOut(500, function() {
            successMessage.addClass("d-none");
        });
    }, 3000);
}