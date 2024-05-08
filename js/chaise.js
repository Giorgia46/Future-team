//PAGINA PRODOTTO

//Funzione per cambiare colore al prodotto
function changeProductColor(color) {
    var image = document.getElementById("chaiselounge");

    switch (color) {
        case "red":
            image.src = "img/pink-chair-lg.png";
            break;
        case "blue":
            image.src = "img/blue-chair-lg.png";
            break;
        case "orange":
            image.src = "img/orange-chair-lg.png";
            break;
        default:
            image.src = "img/orange-chair-lg.png";
            break;
    }
}

//CAROSELLO SHOWROOM SM
document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        perPage: 3,
        rewind: true, // Abilita il riavvolgimento infinito
        breakpoints: {
            992: {
                perPage: 4,
            },

            768: {
                perPage: 3,
            },

        }
    }).mount();
});

//FORM PAGINA PRODOTTO
         (function () {
        'use strict';

        var forms = document.querySelectorAll('.needs-validation');

        Array.prototype.slice.call(forms)
        .forEach(function (form) {
        form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    }

        form.classList.add('was-validated');
    }, false);
    });
    })();
