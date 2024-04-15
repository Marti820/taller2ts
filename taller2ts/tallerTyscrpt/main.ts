import { series } from './data.js';
import { Serie } from './serie.js';


let seriesTableBody: HTMLElement = document.getElementById('cuerpoTabla')!;
let tarjetaContainer: HTMLElement = document.getElementById('tarjeta container')!;


poblarTabla(series);
function poblarTabla(series: Serie[]):void {
    let avg = 0;
    let tot = 0;
    let tot2 = 0;
    series.forEach(serie => {
        const row = document.createElement('tr');
        //let tit = `<p class="serieTituloText>${serie.titulo}</p>`;

        row.innerHTML = `
            <th scope="row">${serie.id}</th>
            <td class="serieTitulo" style="text-color: blue;">${serie.titulo}</td>
            <td>${serie.canal}</td>
            <td>${serie.temporadas}</td>`;
        const titleText = row.querySelector('.serieTitulo')!;
        titleText.addEventListener('click', () => {
                displayCard(serie.titulo);
            });
        seriesTableBody.appendChild(row);
        tot += serie.temporadas;
        tot2 += 1;
    });
    avg = tot/tot2;
    const row = document.createElement('tr');
    row.innerHTML = `
        <td scope="row" colspan="4" id= avg>El numero promedio de temporadas es ${avg}</td>`
    seriesTableBody.appendChild(row);
}

function displayCard(title: string): void {

    const serie = (series.filter((serie: { titulo: string; }) => serie.titulo === title))[0];
    if (serie) {

        const card = `
            <div class="card" style="width: 18rem;">
                <a href="${serie.urlImagen}" target="_blank">
                    <img class="card-img-top" src="${serie.urlImagen}" alt="Card image cap">
                </a>
                <div class="card-body">
                    <h5 class="card-title">${serie.titulo}</h5>
                    <p class="card-text">${serie.descripcion}</p>
                    <a href="${serie.sitioWeb}" class="btn btn-primary">Link a la pagina</a>
                </div>
            </div>`;
        tarjetaContainer.innerHTML = card;
    }
}