/*
Author: Stanisław Marchwiński
Date: 22.03.2024
Description: Srypty z odpowiedziami dla projektu "Język Włoski - Pytania"
*/

document.querySelector('.odp').addEventListener('click', function() {
    var pytanie = document.getElementById('pytanie').textContent;
    var odpowiedz;
    switch(pytanie) {
        case 'Come si chiama il protagonista di questa storia?':
            odpowiedz = 'Il protagonista di questa storia si chiama Marco Giusti.';
            break;
        case 'Di che nazionalità è? Da dove viene?':
            odpowiedz = 'Marco Giusti è italiano.';
            break;
        case 'Che lavoro fa?':
            odpowiedz = 'Marco Giusti fa cameriere.';
            break;
        case 'Qunati anni ha?':
            odpowiedz = 'Lui ha diciannove anni.';
            break;
        case 'Descrivi il suo aspetto esteriore.':
            odpowiedz = 'Lui ha i capelli neri, corti e ricci. Lui ha gli occhi verdi scurie a mandorla.';
            break;
        case 'Racconta com’è il suo aspetto interiore?':
            odpowiedz = 'Lui è simpatico, socievole e amo fare amicizia con le persone solari.';
            break;
        case 'Come si chiama la ragazza di Marco?':
            odpowiedz = 'La ragazza di Marco si chiama Giulia.';
            break;
        case 'Di che nazionalità è Giulia?':
            odpowiedz = 'Giulia è spagnola.';
            break;
        case 'Dove studia?':
            odpowiedz = 'Giulia studia a Roma.';
            break;
        case 'Descrivi il suo aspetto esteriore?':
            odpowiedz = 'Giulia ha i capelli lunghi, biondi e lisci. È alta e ha gli occhi grandi e scuri. Ha le labbra sottili e la fronte alta. Le orecchie sono piccole e il naso è all’insù…';
            break;
        case 'Racconta com’è il suo aspetto interiore?':
            odpowiedz = 'Lei è estroversa, gentile, allegra e generosa.';
            break;
        case 'Com’è la ragazza di Marco?':
            odpowiedz = 'Giulia per Marco è una ragazza ideale!';
            break;
    }
    document.getElementById('odpowiedz').textContent = odpowiedz;
    document.getElementById('odpowiedz').style.display = 'block';
    document.getElementById('podpowiedz').style.display = 'none';
    document.getElementById('podpowiedz').textContent = '';
});