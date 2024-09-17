/*
Author: Stanisław Marchwiński
Date: 22.03.2024
Description: Srypty z odpowiedziami dla projektu "Język Włoski - Pytania"
*/

document.querySelector('.odp').addEventListener('click', function() {
    var pytanie = document.getElementById('pytanie').textContent;
    var odpowiedz;
    switch(pytanie) {
        case 'Qual è città italiana è meravigliosa per il nostro protagonista?':
            odpowiedz = 'La città meravigliosa in Italia per Roberto è Roma - Città Eterna.';
            break;
        case 'Quanti anni aveva quando era a Città Eterna?':
            odpowiedz = 'Lui aveva 21 anni quando era a Roma.';
            break;
        case 'Dov’è abitava?':
            odpowiedz = 'Abitava in un monolocale vicino al Colosseo.';
            break;
        case 'Che cosa faceva ogni giorno durante il suo soggiorno?':
            odpowiedz = 'Ogni giorni Roberto ammirava i posti più belli della città.';
            break;
        case 'Che cosa Roberto faceva di sera a Roma?':
            odpowiedz = 'Di sera Roberto si sedeva sul terazzo, osservava il Colosseo.';
            break;
        case 'Perché a Roberto piace Roma così tanto?':
            odpowiedz = 'A Roberto piace Roma perché ha una magia, ha un’atmosfera speciale.';
            break;
        case 'Come era il soggiorno nella Città Eterna per Roberto?':
            odpowiedz = 'Per Roberto il viaggio a Roma era bellissimo.';
            break;
    }
    document.getElementById('odpowiedz').textContent = odpowiedz;
    document.getElementById('odpowiedz').style.display = 'block';
    document.getElementById('podpowiedz').style.display = 'none';
    document.getElementById('podpowiedz').textContent = '';
});