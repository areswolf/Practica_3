var $ = require('jquery');
var apiClient = require('./api-client');
var commentsListManager = require('./comments-list-manager');


var newCommentFormButton = $('.new-comment-form button');
var inputs = $(".new-comment-form input");

function setLoading(){ // antes de enviar la petición
    $(inputs).attr("disabled", true); // deshabilito todos los inputs
    // Cambio el texto del botón y lo deshabilito
    newCommentFormButton.text("Guardando...").attr("disabled", true);
}

function unsetLoading(){
    $(inputs).attr("disabled", false); // habilito todos los inputs
    // Cambio el texto del botón y lo habilito
    newCommentFormButton.text("Publicar").attr("disabled", false);
}


// al enviar formulario pulsando enter o haciendo click en el botón
// enviamos una petición AJAX para almacenar el comentario
$('.new-comment-form').on("submit", function(){
    // Validación de inputs
    
    var inputs = $(".new-comment-form input");
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        if (input.checkValidity() == false) {
            alert(input.validationMessage);
            input.focus();
            return false;
        }
    }

    // comentario que quiero crear
    var comment = {
        nombre: $("#nombre").val(),
        email: $("#email").val(),
        comentario: $("#comentario").val()
    };

    setLoading(); // deshabilito el formulario

    apiClient.save(comment, function(response) {
        $(".new-comment-form")[0].reset(); // borro todos los campos del formulario
        $("#nombre").focus(); // pongo el foco en el campo nombre
        commentsListManager.load();

        texto = $("#num-of-chats").text().trim();
        texto = (parseInt(texto) + 1).toString();

        $("#num-of-chats").text(texto);
        unsetLoading();
    }, function() {
        console.error("ERROR", arguments);
        unsetLoading();
    });

    return false; // == e.preventDefault();
});


