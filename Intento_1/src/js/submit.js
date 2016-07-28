/**
 * Created by Javier on 28/07/2016.
 */
var $ = require('jquery');


$('.new-comment-form-signin').on("submit", function() {
    // Validación de inputs

    var inputs = $(".new-comment-form-signin input");
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        if (input.checkValidity() == false) {
            if (input.id == "accept-terms") {
                alert("Debe aceptar los términos de servicio");
            }
            else if (input.id == "email") {
                alert(input.validationMessage);
            }
            else {
                alert("Completa todos los campos");
            }

            input.focus();
            return false;
        }
    }
});