// FOOTER

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
