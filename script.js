
//CONTATTI

function inviaModulo(event) {
    // Impedisci il comportamento predefinito dell'evento di invio del modulo
    event.preventDefault();

    // Assicurati di avere tutti i campi del modulo correttamente selezionati
    var nomeInput = $("#formNome");
    var cognomeInput = $("#formCognome");
    var emailInput = $("#inputEmail4");
    var telefonoInput = $("#Telefono");
    var aziendaInput = $("#Azienda");
    var messaggioInput = $("#exampleFormControlTextarea1");
    var successMessage = $("#successMessage");

    // Verifica se tutti i campi sono stati compilati correttamente
    if (nomeInput.val() && cognomeInput.val() && emailInput.val() && telefonoInput.val() && messaggioInput.val()) {
        // Puoi aggiungere qui la logica per l'invio delle informazioni del modulo
        // Ad esempio, puoi utilizzare AJAX per inviare i dati al server

        // Una volta inviato con successo, visualizza il messaggio di ringraziamento
        successMessage.text("Grazie per averci scritto, il nostro team le risponderà presto");

        // Dopo l'invio del modulo, puoi anche resettare i valori dei campi
        nomeInput.val("");
        cognomeInput.val("");
        emailInput.val("");
        telefonoInput.val("");
        aziendaInput.val("");
        messaggioInput.val("");
    } else {
        // Se non tutti i campi sono compilati, puoi gestire questo caso qui
        // Ad esempio, puoi visualizzare un messaggio di errore o far lampeggiare i campi mancanti
        // In alternativa, puoi lasciare questa parte vuota se non desideri un feedback aggiuntivo
    }
}

// Aggiungi un listener per l'evento di invio del modulo
$(".form-contatti").submit(inviaModulo);


/////////////////////////////// FOOTER ///////////////////////////////

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