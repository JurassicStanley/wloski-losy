/*
Author: Stanisław Marchwiński
Date: 22.03.2024
Description: Srypty losujące dla projektu "Język Włoski - Pytania"
*/

document.querySelector('.los').addEventListener('click', function() {
    var pytania = [
        'Come si chiama il protagonista di questa storia?',
        'Perché Michele è in Italia?',
        'Da dove viene Michele? Di che nazionalità è?',
        'Di dov’è? (La città)',
        'In quale città ha l’intenzione di studiare?',
        'Come si chiama la ragazza che parla con Michele?',
        'Come si chiama il fratello della ragazza?',
        'Come si chiama la mamma dei ragazzi?',
        'Michele è stanco. Spiega il perché?',
        'Che cosa vuole far vedere a Michele la signora Bossi?',
        'Quale città italiane conosci?',
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