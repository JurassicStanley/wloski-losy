/*
Author: Stanisław Marchwiński
Date: 22.03.2024
Description: Srypty losujące dla projektu "Język Włoski - Pytania"
*/

document.querySelector('.los').addEventListener('click', function() {
    var pytania = [
        'Qual è città italiana è meravigliosa per il nostro protagonista?',
        'Quanti anni aveva quando era a Città Eterna?',
        'Dov’è abitava?',
        'Che cosa faceva ogni giorno durante il suo soggiorno?',
        'Che cosa Roberto faceva di sera a Roma?',
        'Perché a Roberto piace Roma così tanto?',
        'Come era il soggiorno nella Città Eterna per Roberto?',
    ];
    var losowePytanie = pytania[Math.floor(Math.random() * pytania.length)];
    document.getElementById('pytanie').textContent = losowePytanie;
    document.getElementById('pytanie').style.display = 'block';
    document.querySelector('.podp').style.display = 'inline-block';
    document.querySelector('.odp').style.display = 'inline-block';
    document.getElementById('podpowiedz').style.display = 'none';
    document.getElementById('odpowiedz').style.display = 'none';
    document.getElementById('podpowiedz').textContent = '';
    document.getElementById('odpowiedz').textContent = '';
});