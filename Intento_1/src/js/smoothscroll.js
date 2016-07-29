/**
 * Created by Javier on 29/07/2016.
 */
var $ = require('jquery');


    $('.navbar-up').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $('#id-section-init');

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    $('.scroll-down').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $('#section-form');

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
    
