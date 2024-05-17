document.addEventListener("DOMContentLoaded", function () {

    // Bottone e rettangolo 1

    const featuresBtn1C = document.getElementById("featuresBtn1C");
    const rect1C = document.getElementById("rect1C");
    const closeBtn1C = document.getElementById("closeBtn1C");

    featuresBtn1C.addEventListener("click", function () {
        featuresBtn1C.style.display = "none"; // Nasconde il bottone quando viene cliccato
        rect1C.style.display = "block"; // Mostra il rettangolo
        rect1C.classList.add("visible");

    });

    closeBtn1C.addEventListener("click", function () {
        featuresBtn1C.style.display = "block"; // Riappare il bottone quando viene chiuso il rettangolo
        rect1C.style.display = "none"; // Nasconde il rettangolo
        rect1C.classList.remove("visible");
    });

    // Bottone e rettangolo 2

    const featuresBtn2C = document.getElementById("featuresBtn2C");
    const rect2C = document.getElementById("rect2C");
    const closeBtn2C = document.getElementById("closeBtn2C");

    featuresBtn2C.addEventListener("click", function () {
        featuresBtn2C.style.display = "none"; // Nasconde il bottone quando viene cliccato
        rect2C.style.display = "block"; // Mostra il rettangolo
        rect2C.classList.add("visible");

    });

    closeBtn2C.addEventListener("click", function () {
        featuresBtn2C.style.display = "block"; // Riappare il bottone quando viene chiuso il rettangolo
        rect2C.style.display = "none"; // Nasconde il rettangolo
        rect2C.classList.remove("visible");
    });

    // Bottone e rettangolo 3

    const featuresBtn3C = document.getElementById("featuresBtn3C");
    const rect3C = document.getElementById("rect3C");
    const closeBtn3C = document.getElementById("closeBtn3C");

    featuresBtn3C.addEventListener("click", function () {
        featuresBtn3C.style.display = "none"; // Nasconde il bottone quando viene cliccato
        rect3C.style.display = "block"; // Mostra il rettangolo
        rect3C.classList.add("visible");

    });

    closeBtn3C.addEventListener("click", function () {
        featuresBtn3C.style.display = "block"; // Riappare il bottone quando viene chiuso il rettangolo
        rect3C.style.display = "none"; // Nasconde il rettangolo
        rect3C.classList.remove("visible");
    });

});




