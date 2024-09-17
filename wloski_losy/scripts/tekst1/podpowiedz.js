/*
Author: Stanisław Marchwiński
Date: 22.03.2024
Description: Srypty z podpowiedziami dla projektu "Język Włoski - Pytania"
*/

document.querySelector('.podp').addEventListener('click', function() {
    var pytanie = document.getElementById('pytanie').textContent;
    var podpowiedz;
    switch(pytanie) {
        case 'Come si chiama il protagonista di questa storia?':
            podpowiedz = 'Il protagonista di questa storia si chiama...';
            break;
        case 'Di che nazionalità è? Da dove viene?':
            podpowiedz = 'Marco Giusti è...';
            break;
        case 'Che lavoro fa?':
            podpowiedz = 'Marco Giusti fa...';
            break;
        case 'Qunati anni ha?':
            podpowiedz = 'Lui ha...';
            break;
        case 'Descrivi il suo aspetto esteriore.':
            podpowiedz = 'Lui ha i capelli...';
            break;
        case 'Racconta com’è il suo aspetto interiore?':
            podpowiedz = 'Lui è';
            break;
        case 'Come si chiama la ragazza di Marco?':
            podpowiedz = 'La ragazza di Marco si chiama...';
            break;
        case 'Di che nazionalità è Giulia?':
            podpowiedz = 'Giulia è...';
            break;
        case 'Dove studia?':
            podpowiedz = 'Giulia studia a...';
            break;
        case 'Descrivi il suo aspetto esteriore?':
            podpowiedz = 'Giulia ha i capelli...';
            break;
        case 'Racconta com’è il suo aspetto interiore?':
            podpowiedz = 'pLei è...';
            break;
        case 'Com’è la ragazza di Marco?':
            podpowiedz = 'Giulia per Marco è...';
            break;
        }
    document.getElementById('podpowiedz').textContent = podpowiedz;
    document.getElementById('podpowiedz').style.display = 'block';
    document.getElementById('odpowiedz').style.display = 'none';
});