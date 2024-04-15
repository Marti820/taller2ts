import { series } from './data.js';
var seriesTableBody = document.getElementById('cuerpoTabla');
var tarjetaContainer = document.getElementById('tarjeta container');
poblarTabla(series);
function poblarTabla(series) {
    var avg = 0;
    var tot = 0;
    var tot2 = 0;
    series.forEach(function (serie) {
        var row = document.createElement('tr');
        //let tit = `<p class="serieTituloText>${serie.titulo}</p>`;
        row.innerHTML = "\n            <th scope=\"row\">".concat(serie.id, "</th>\n            <td class=\"serieTitulo\" style=\"text-color: blue;\">").concat(serie.titulo, "</td>\n            <td>").concat(serie.canal, "</td>\n            <td>").concat(serie.temporadas, "</td>");
        var titleText = row.querySelector('.serieTitulo');
        titleText.addEventListener('click', function () {
            displayCard(serie.titulo);
        });
        seriesTableBody.appendChild(row);
        tot += serie.temporadas;
        tot2 += 1;
    });
    avg = tot / tot2;
    var row = document.createElement('tr');
    row.innerHTML = "\n        <td scope=\"row\" colspan=\"4\" id= avg>El numero promedio de temporadas es ".concat(avg, "</td>");
    seriesTableBody.appendChild(row);
}
function displayCard(title) {
    var serie = (series.filter(function (serie) { return serie.titulo === title; }))[0];
    if (serie) {
        var card = "\n            <div class=\"card\" style=\"width: 18rem;\">\n                <a href=\"".concat(serie.urlImagen, "\" target=\"_blank\">\n                    <img class=\"card-img-top\" src=\"").concat(serie.urlImagen, "\" alt=\"Card image cap\">\n                </a>\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">").concat(serie.titulo, "</h5>\n                    <p class=\"card-text\">").concat(serie.descripcion, "</p>\n                    <a href=\"").concat(serie.sitioWeb, "\" class=\"btn btn-primary\">Link a la pagina</a>\n                </div>\n            </div>");
        tarjetaContainer.innerHTML = card;
    }
}
