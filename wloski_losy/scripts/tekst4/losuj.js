/*
Author: Stanisław Marchwiński
Date: 22.03.2024
Description: Srypty losujące dla projektu "Język Włoski - Pytania"
*/

document.querySelector('.los').addEventListener('click', function() {
    var pytania = [
        'Come si chiamano i protagonisti di questa storia?',
        'Dove Gino ha cercato il numero di telefono di Paolo?',
        'Che cosa hanno comprato i due amici?',
        'Chi hanno incontrato all’angolo?',
        'Che cosa hanno voluto fare i ragazzi con i fumetti?',
        'Quanti soldi Umberto ha pagato per i fumetti?',
        'Come ha reagito la mamma di Umberto?',
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