/*
Author: Stanisław Marchwiński
Date: 22.03.2024
Description: Srypty z podpowiedziami dla projektu "Język Włoski - Pytania"
*/

document.querySelector('.podp').addEventListener('click', function() {
    var pytanie = document.getElementById('pytanie').textContent;
    var podpowiedz;
    switch(pytanie) {
        case 'Come si chiama il protagonista di questa storia? (Discrevere una persona)':
            podpowiedz = 'Il protagonista di questa storia si chiama Marco Giusti.';
            break;
        case 'Di che nazionalità è? Da dove viene? (Discrevere una persona)':
            podpowiedz = 'Marco Giusti è italiano.';
            break;
        case 'Che lavoro fa?':
            podpowiedz = 'Marco Giusti fa cameriere. (Discrevere una persona)';
            break;
        case 'Qunati anni ha?':
            podpowiedz = 'Lui ha diciannove anni. (Discrevere una persona)';
            break;
        case 'Descrivi il suo aspetto esteriore. (Discrevere una persona)':
            podpowiedz = 'Lui ha i capelli neri, corti e ricci. Lui ha gli occhi verdi scurie a mandorla.';
            break;
        case 'Racconta com’è il suo aspetto interiore? (Discrevere una persona)':
            podpowiedz = 'Lui è simpatico, socievole e amo fare amicizia con le persone solari.';
            break;
        case 'Come si chiama la ragazza di Marco? (Discrevere una persona)':
            podpowiedz = 'La ragazza di Marco si chiama Giulia.';
            break;
        case 'Di che nazionalità è Giulia? (Discrevere una persona)':
            podpowiedz = 'Giulia è spagnola.';
            break;
        case 'Dove studia? (Discrevere una persona)':
            podpowiedz = 'Giulia studia a Roma.';
            break;
        case 'Descrivi il suo aspetto esteriore? (Discrevere una persona)':
            podpowiedz = 'Giulia ha i capelli lunghi, biondi e lisci. È alta e ha gli occhi grandi e scuri. Ha le labbra sottili e la fronte alta. Le orecchie sono piccole e il naso è all’insù…';
            break;
        case 'Racconta com’è il suo aspetto interiore? (Discrevere una persona)':
            podpowiedz = 'Lei è estroversa, gentile, allegra e generosa.';
            break;
        case 'Com’è la ragazza di Marco? (Discrevere una persona)':
            podpowiedz = 'Giulia per Marco è una ragazza ideale!';
            break;
        }
    document.getElementById('podpowiedz').textContent = podpowiedz;
    document.getElementById('podpowiedz').style.display = 'block';
    document.getElementById('odpowiedz').style.display = 'none';
});