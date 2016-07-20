/**
 * Created by Javier on 20/07/2016.
 */
var $ = require('jquery');

$(function() {
    $('.pagination').pagination({
        items: 100,
        itemsOnPage: 10,
        cssStyle: 'light-theme'
    });

});