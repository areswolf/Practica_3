/**
 * Created by Javier on 19/07/2016.
 */
var $ = require('jquery');

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
                if (typeof(Storage) !== "undefined") {
                    localStorage.setItem(idelement2, numOfLikes);   //  Almacenamos el par this.id-num-of-likes
                }
            }
            return false;
        }
    }
});


