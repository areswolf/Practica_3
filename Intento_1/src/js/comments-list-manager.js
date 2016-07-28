/**
 * Created by Javier on 21/07/2016.
 */
var $ = require('jquery');
var apiClient = require('./api-client');
var utils = require("./utils");

function restafechas(f1,f2)
{
    var diasSemana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
    var aFecha1 = f1.split('-');
    var aFecha2 = f2.split('-');
    var fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]);
    var fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]);
    var dif = fFecha2 - fFecha1;
    var days = Math.floor(dif / (1000 * 60 * 60 * 24));

    var tiempo1 = new Date(aFecha1[2],aFecha1[1]-1,aFecha1[0], aFecha1[3], aFecha1[4], aFecha1[5], 0);
    var tiempo2 = new Date(aFecha2[2],aFecha2[1]-1,aFecha2[0], aFecha2[3], aFecha2[4], aFecha2[5], 0);
    var dife = (tiempo2.getTime() - tiempo1.getTime());
    var seconds = Math.floor(dife)/1000;

    var diasem = diasSemana[tiempo1.getDay()];

    
    return [days,seconds,diasem];
}


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
                var datecreated = response[i].datecreated || "";
                var hoy = new Date();
                //var months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
                var date = new Date();
                var day = date.getDate();
                var month = date.getMonth() + 1;
                var yy = date.getYear();
                var year = (yy < 1000) ? yy + 1900 : yy;
                var ahora = day + "-" + month + "-" + year + "-" + date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds(); // DD-MM-AAAA-HH-mm
                var textoFecha = "";

                var diasdif = restafechas(datecreated,ahora)[0];
                var secsdif = restafechas(datecreated,ahora)[1];
                var diasem = restafechas(datecreated,ahora)[2];

                if (diasdif >=7) {
                    textoFecha = "Escrito el " + datecreated;
                }
                else {
                    if (secsdif<60) {
                        if (secsdif==1) {
                            textoFecha = "Escrito hace " + secsdif.toString() + " segundo";
                        }
                        else {
                            textoFecha = "Escrito hace " + secsdif.toString() + " segundos";
                        }
                    }
                    else{
                        if (secsdif<3600) {
                            var minutosPasados = parseInt(secsdif/60);
                            if (minutosPasados == 1) {
                                textoFecha = "Escrito hace " + minutosPasados.toString() + " minuto";
                            }
                            else {
                                textoFecha = "Escrito hace " + minutosPasados.toString() + " minutos";
                            }

                        }
                        else {
                            if (secsdif<86400) {
                                diasPasados = parseInt(secsdif/86400);
                                if (diasPasados==0) {
                                    var horaspasadas = parseInt(secsdif/3600);
                                    var minutospasados = parseInt((secsdif%3600)/60);
                                    if (horaspasadas == 1) {
                                        textoFecha = "Escrito hace " + horaspasadas.toString() + " hora y " + minutospasados.toString() + " minutos"
                                    }
                                    else {
                                        textoFecha = "Escrito hace " + horaspasadas.toString() + " horas y " + minutospasados.toString() + " minutos"
                                    }
                                }
                                else if (diasPasados==1) {
                                    textoFecha = "Escrito hace " + diasPasados.toString() + " dia"
                                }
                                else {
                                    textoFecha = "Escrito hace " + diasPasados.toString() + " dias"
                                }

                            }
                            else {
                                textoFecha = "Escrito el pasado " + diasem;
                            }
                        }
                    }
                }
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
                html += '<p class="comment-footer">' + textoFecha + '</p>';
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
