/*
Author: Stanisław Marchwiński
Date: 22.03.2024
Description: Srypty z odpowiedziami dla projektu "Język Włoski - Pytania"
*/

document.querySelector('.odp').addEventListener('click', function() {
    var pytanie = document.getElementById('pytanie').textContent;
    var odpowiedz;
    switch(pytanie) {
        case 'Come si chiama la ragazza, che racconta questa storia?':
            odpowiedz = 'La ragazza che raconta questa storia si chiama Graziana.';
            break;
        case 'Quando e da chi Graziana è andata alla festa?':
            odpowiedz = 'Graziana è andata alla festa da Silvia il 18 febraio.';
            break;
        case 'Che cosa Silvia non amava, quando era piccola?':
            odpowiedz = 'Quando Silvia era piccola non amava festeggiare.';
            break;
        case 'Dove era questa festa?':
            odpowiedz = 'Le festa era in un locale molto bello con vista panoramica sul mare.';
            break;
        case 'Qual è il colore preferito di Silvia?':
            odpowiedz = 'A Silvia piace il colore blu.';
            break;
        case 'Qual è il tuo colore preferito?':
            odpowiedz = 'Il mio colore preferito giallo/azzuro/rosso/verde/bianco/arancione/etc.';
            break;
        case 'Che cosa Graziana ha comprato per la festa?':
            odpowiedz = 'Per il compleano Graziana ha comprato il vestito nuovo e scarpe alte.';
            break;
        case 'Che cosa è successo quando Graziana entrava nella sala?':
            odpowiedz = 'Quando Graziana entrava nella sala è inciamapta.';
            break;
        case 'Perché tutti hanno dimenticato la sua caduta?':
            odpowiedz = 'Tutti hanno dimenticato la sua coduta perché il DJ ha messo la musica.';
            break;
        case 'Come era la festa per Graziana?':
            odpowiedz = 'Per Graziana una festa era straordinaria.';
            break;
    }
    document.getElementById('odpowiedz').textContent = odpowiedz;
    document.getElementById('odpowiedz').style.display = 'block';
    document.getElementById('podpowiedz').style.display = 'none';
    document.getElementById('podpowiedz').textContent = '';
});