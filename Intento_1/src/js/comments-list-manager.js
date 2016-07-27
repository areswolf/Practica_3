/**
 * Created by Javier on 21/07/2016.
 */
var $ = require('jquery');
var apiClient = require('./api-client');
var utils = require("./utils");

module.exports = {

    load: function(){
        apiClient.list(function(response) {
            $('.comments-list').html(''); // vaciamos la lista
            for (var i in response) {
                var comment = response[i];

                var nombre = comment.nombre || "";
                var email = comment.email || "";
                var comentario = comment.comentario || "";
                var startComment = comentario.substring(0,10) + "...";
                
                var html = '<section id="id-comments" class="chats-detail comment">';
                html += '<div class="container">';
                html += '<div class="panel panel-primary">';
                html += '<div class="panel-heading">';
                html += '<h3 class="panel-title">' + nombre + ' escribió: <strong>' + startComment + '</strong></h3>';
                html += '</div>';
                html += '<div class="panel-body">';
                html += '<p>' + comentario + '</p>';
                html += '</div>';
                html += '<div class="panel-footer">';
                html += '<table class="table-responsive">';
                html += '<tbody>';
                html += '<td>';
                html += '<button  type="button" class="btnstar btn btn-default btn-sm">';
                html += '<span id="idlike' + "2" + '" class="starstyle">&#9733</span> Like <span id="idlike1-'+ "2" + '" class="likes">0</span>';
                html += '</button>';
                html += '</td>';
                html += '<td>';
                html += '<p class="comment-footer">Escrito el 21 de Julio a las 18:40</p>';
                html += '</td>';
                html += '<td>';
                html += '<a class="comment-footer" href="#id-section-init"><i class="fa fa-upload fa-align-left" aria-hidden="true"></i></a>';
                html += '</td>';
                html += '</tbody>';
                html += '</table>';
                html += '</div>';
                html += '</div>';
                html += '</div>';
                html += '</section>';                

                $('.comments-list').append(html);

            }
            i++;
            if (isNaN(i)) {
                $("#num-of-chats").text("0");
            }
            else {
                $("#num-of-chats").text((i).toString());
            }

        }, function(response){
            console.error("ERROR", response);
        });
    }
};
