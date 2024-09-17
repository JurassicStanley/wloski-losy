/*
Author: Stanisław Marchwiński
Date: 22.03.2024
Description: Srypty losujące dla projektu "Język Włoski - Pytania"
*/

document.querySelector('.los').addEventListener('click', function() {
    var pytania = [
        'Come si chiama la ragazza, che racconta questa storia?',
        'Quando e da chi Graziana è andata alla festa?',
        'Che cosa Silvia non amava, quando era piccola?',
        'Dove era questa festa?',
        'Qual è il colore preferito di Silvia?',
        'Qual è il tuo colore preferito?',
        'Che cosa Graziana ha comprato per la festa?',
        'Che cosa è successo quando Graziana entrava nella sala?',
        'Perché tutti hanno dimenticato la sua caduta?',
        'Come era la festa per Graziana?',
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