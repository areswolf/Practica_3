/**
 * Created by Javier on 19/07/2016.
 */
var $ = require('jquery');


var elementos = $('.likes');
for (var i=1; i<10; i++) {
    var idelement = "#idlike" + i + '-' + i;
    var idelement2 = "idlike" + i;
    var elementoId = $(idelement);

    if (typeof(Storage) !== "undefined") {
        var dataStored = localStorage.getItem(idelement2);
    }
    //debugger;
    if (dataStored == null) {
        elementoId.html("0");
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem(idelement2, "0");   //  Almacenamos el par this.id-num-of-likes
        }
    }
    else {
        elementoId.html(dataStored);
    }
}

