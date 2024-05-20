document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
      perPage: 5, 
      rewind: true, // Abilita il riavvolgimento infinito
      breakpoints: {
       992: {
          perPage: 2, 
        },

        768: {
          perPage: 1, 
        }, 

      }
    }).mount();
  });
