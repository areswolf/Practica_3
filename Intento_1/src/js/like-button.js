/**
 * Created by Javier on 19/07/2016.
 */
var $ = require('jquery');
var apiStorage = require('./storage-api');

$('.btnstar').on("before click",function () {
    var elemento = '#' + this.firstElementChild.id;

    $(elemento).click();
    return false;
});

$('.starstyle').on("before click", function() {
    for (var i=1; i<10; i++) {
        var idelement ="#idlike"+i;
        var idelement2 ="idlike"+i;
        if (this.id == idelement2) {
            //debugger;
            if ($(idelement)[0].className=="starstyle") {
                $(idelement).toggleClass("starstyle").toggleClass("star-checked");
                idelement=idelement+'-'+i;
                var numOfLikes = $(idelement).html();
                var nolikes = Number(numOfLikes);
                nolikes = nolikes + 1;
                numOfLikes = String(nolikes);
                $(idelement).html(numOfLikes);
                //if (typeof(Storage) !== "undefined") {
                    //localStorage.setItem(idelement2, numOfLikes);   //  Almacenamos el par this.id-num-of-likes
                    apiStorage.save('local',[idelement2, numOfLikes],function () {
                        console.log("Almacenado Ok");
                    }, function () {
                        console.log("Almacenado Error");
                    });
                //}
            }
            return false;
        }
    }
});


