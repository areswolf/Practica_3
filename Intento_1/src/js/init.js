/**
 * Created by Javier on 19/07/2016.
 */
var $ = require('jquery');
var apiStorage = require('./storage-api');
var commentsListManager = require('./comments-list-manager');

commentsListManager.load();

var elementos = $('.likes');
for (var i=1; i<10; i++) {
    var idelement = "#idlike" + i + '-' + i;
    var idelement2 = "idlike" + i;
    var elementoId = $(idelement);

    var dataStored = apiStorage.load('local',idelement2,function () {
        console.log("Almacenado Ok");
    }, function () {
        console.log("Almacenado Error");
    });

    if (dataStored == null) {
        elementoId.html("0");

        apiStorage.save('local',[idelement2, "0"],function () {
            console.log("Almacenado Ok");
        }, function () {
            console.log("Almacenado Error");
        });

    }
    else {
        elementoId.html(dataStored);
    }
}

