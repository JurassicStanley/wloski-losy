/*
Author: Stanisław Marchwiński
Date: 22.03.2024
Description: Srypty losujące dla projektu "Język Włoski - Pytania"
*/

document.querySelector('.los').addEventListener('click', function() {
    var pytania = [
        'Come si chiama il protagonista di questa storia? (Discrevere una persona)',
        'Di che nazionalità è? Da dove viene? (Discrevere una persona)',
        'Che lavoro fa? (Discrevere una persona)',
        'Qunati anni ha? (Discrevere una persona)',
        'Descrivi il suo aspetto esteriore. (Discrevere una persona)',
        'Racconta com’è il suo aspetto interiore? (Discrevere una persona)',
        'Come si chiama la ragazza di Marco? (Discrevere una persona)',
        'Di che nazionalità è Giulia? (Discrevere una persona)',
        'Dove studia? (Discrevere una persona)',
        'Descrivi il suo aspetto esteriore? (Discrevere una persona)',
        'Racconta com’è il suo aspetto interiore? (Discrevere una persona)',
        'Com’è la ragazza di Marco? (Discrevere una persona)',
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