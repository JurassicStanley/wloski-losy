/*
Author: Stanisław Marchwiński
Date: 22.03.2024
Description: Srypty losujące dla projektu "Język Włoski - Pytania"
*/

document.querySelector('.los').addEventListener('click', function() {
    var pytania = [
        'Quante stanze ci sono nell’appartamento della famiglia Marchetti?',
        'Che cosa si trova di fronte dell’ingresso?',
        'Dov’è la cucina e il bagno?',
        'Che cosa c’è vicino all’ingresso?Qunati anni ha?',
        'Di che colore è il divano nel soggiorno?',
        'Che cosa c’è dietro al divano?',
        'Dove sono le sedie?',
        'Che cosa c’è davanti al bagno?',
        'Dov’è il letto matrimoniale?',
        'Che cosa c’è sulla parete?',
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