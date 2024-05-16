document.addEventListener("DOMContentLoaded", function () {

    // Bottone e rettangolo 1

    const specificheBtn1C = document.getElementById("specificheBtn1C");
    const rect1C = document.getElementById("rect1C");
    const closeBtn1C = document.getElementById("closeBtn1C");

    specificheBtn1C.addEventListener("click", function () {
        specificheBtn1C.style.display = "none"; // Nasconde il bottone quando viene cliccato
        rect1C.style.display = "block"; // Mostra il rettangolo
        rect1C.classList.add("visible");

    });

    closeBtn1C.addEventListener("click", function () {
        specificheBtn1C.style.display = "block"; // Riappare il bottone quando viene chiuso il rettangolo
        rect1C.style.display = "none"; // Nasconde il rettangolo
        rect1C.classList.remove("visible");
    });

});




