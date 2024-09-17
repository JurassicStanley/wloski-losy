/*
Author: Stanisław Marchwiński
Date: 22.03.2024
Description: Srypty z podpowiedziami dla projektu "Język Włoski - Pytania"
*/

document.querySelector('.podp').addEventListener('click', function() {
    var pytanie = document.getElementById('pytanie').textContent;
    var podpowiedz;
    switch(pytanie) {
        case 'Qual è città italiana è meravigliosa per il nostro protagonista?':
            podpowiedz = 'La città meravigliosa...';
            break;
        case 'Quanti anni aveva quando era a Città Eterna?':
            podpowiedz = 'Lui aveva...';
            break;
        case 'Dov’è abitava?':
            podpowiedz = 'Abitava in un...';
            break;
        case 'Che cosa faceva ogni giorno durante il suo soggiorno?':
            podpowiedz = 'Ogni giorni Roberto...';
            break;
        case 'Che cosa Roberto faceva di sera a Roma?':
            podpowiedz = 'Di sera Roberto si sedeva...';
            break;
        case 'Perché a Roberto piace Roma così tanto?':
            podpowiedz = 'A Roberto piace Roma...';
            break;
        case 'Come era il soggiorno nella Città Eterna per Roberto?':
            podpowiedz = 'Per Roberto il viaggio...';
            break;
        }
    document.getElementById('podpowiedz').textContent = podpowiedz;
    document.getElementById('podpowiedz').style.display = 'block';
    document.getElementById('odpowiedz').style.display = 'none';
});