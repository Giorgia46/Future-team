document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
      perPage: 5, 
      rewind: true, // Abilita il riavvolgimento infinito
      breakpoints: {
        576: {
          perPage: 1, 
        },

        768: {
          perPage: 2, 
        },

        992: {
          perPage: 3, 
        },

        1024: {
          perPage: 3, 
        },

        1320: {
          perPage: 4, 
        },


      }
    }).mount();
  });