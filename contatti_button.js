document.addEventListener("DOMContentLoaded", function () {


    // Bottone e rettangolo 1

    const specificheBtn1 = document.getElementById("specificheBtn1");
    const rect1 = document.getElementById("rect1");
    const closeBtn1 = document.getElementById("closeBtn1");

    specificheBtn1.addEventListener("clickC", function () {
        specificheBtn1.style.display = "none"; // Nasconde il bottone quando viene cliccato
        rect1.style.display = "block"; // Mostra il rettangolo
        rect1.classList.add("visible");

    });

    closeBtn1.addEventListener("clickC", function () {
        specificheBtn1.style.display = "block"; // Riappare il bottone quando viene chiuso il rettangolo
        rect1.style.display = "none"; // Nasconde il rettangolo
        rect1.classList.remove("visible");
    });

});




