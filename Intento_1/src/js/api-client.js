var $ = require('jquery');

module.exports = {

    save: function(comment, successCallback, errorCallback) {
        var formData = new FormData();
        formData.append("nombre", comment.nombre);
        formData.append("email", comment.email);
        formData.append("comentario", comment.comentario);
        formData.append("datecreated", comment.datecreated);

        $.ajax({
            url: "/api/comments/",
            method: "post",
            data: formData,
            processData: false,
            contentType: false,
            success: successCallback,
            error: errorCallback
        });
    },

    list: function(successCallback, errorCallback) {
        $.ajax({
            url: "/api/comments/",
            method: "get",
            success: successCallback,
            error: errorCallback
        });
    }

};
