// Funzione per inviare il modulo
function inviaModulo(event) {
    // Impedisci il comportamento predefinito dell'evento di invio del modulo
    event.preventDefault();

    // Assicurati di avere tutti i campi del modulo correttamente selezionati
    var form = $(this);
    var nomeInput = $("#formName");
    var cognomeInput = $("#formSurname");
    var emailInput = $("#formEmail");
    var telefonoInput = $("#formPhone");
    var aziendaInput = $("#formCompany");
    var messaggioInput = $("#formMessage");
    var successMessageForm = $("#successMessageForm");
    var errorMessageForm = $("#errorMessageForm");

    // Nascondi eventuali messaggi di errore
    errorMessageForm.addClass("d-none");

    // Verifica se tutti i campi sono stati compilati correttamente
    if (form[0].checkValidity() === false) {
        event.stopPropagation();
        form.addClass('was-validated');
        return;
    }

    // Visualizza il messaggio di ringraziamento
    successMessageForm.removeClass("d-none").text("Grazie per averci scritto, il nostro team le risponderà presto.");

    // Resetta i valori dei campi del modulo
    nomeInput.val("");
    cognomeInput.val("");
    emailInput.val("");
    telefonoInput.val("");
    aziendaInput.val("");
    messaggioInput.val("");

    // Fai scomparire il messaggio gradualmente dopo 3 secondi
    setTimeout(function() {
        successMessageForm.fadeOut(1000, function() {
            successMessageForm.addClass("d-none").show(); // Nasconde il messaggio e lo riporta visibile per future necessità
        });
    }, 3000);

    form.removeClass('was-validated');
}

// Aggiungi un listener per l'evento di invio del modulo
$(document).ready(function() {
    $(".needs-validation").submit(inviaModulo);
});
