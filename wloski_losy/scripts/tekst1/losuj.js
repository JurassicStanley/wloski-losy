/*
Author: Stanisław Marchwiński
Date: 22.03.2024
Description: Srypty losujące dla projektu "Język Włoski - Pytania"
*/

document.querySelector('.los').addEventListener('click', function() {
    var pytania = [
        'Come si chiama il protagonista di questa storia?',
        'Di che nazionalità è? Da dove viene?',
        'Che lavoro fa?',
        'Qunati anni ha?',
        'Descrivi il suo aspetto esteriore.',
        'Racconta com’è il suo aspetto interiore?',
        'Come si chiama la ragazza di Marco?',
        'Di che nazionalità è Giulia?',
        'Dove studia?',
        'Descrivi il suo aspetto esteriore?',
        'Racconta com’è il suo aspetto interiore?',
        'Com’è la ragazza di Marco?',
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