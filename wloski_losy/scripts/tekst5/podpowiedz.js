/*
Author: Stanisław Marchwiński
Date: 22.03.2024
Description: Srypty z podpowiedziami dla projektu "Język Włoski - Pytania"
*/

document.querySelector('.podp').addEventListener('click', function() {
    var pytanie = document.getElementById('pytanie').textContent;
    var podpowiedz;
    switch(pytanie) {
        case 'Come si chiama la ragazza, che racconta questa storia?':
            podpowiedz = 'La ragazza che raconta...';
            break;
        case 'Quando e da chi Graziana è andata alla festa?':
            podpowiedz = 'Graziana è andata alla festa...';
            break;
        case 'Che cosa Silvia non amava, quando era piccola?':
            podpowiedz = 'Quando Silvia era...';
            break;
        case 'Dove era questa festa?':
            podpowiedz = 'Le festa era in un locale...';
            break;
        case 'Qual è il colore preferito di Silvia?':
            podpowiedz = 'A Silvia piace...';
            break;
        case 'Qual è il tuo colore preferito?':
            podpowiedz = 'Il mio colore...';
            break;
        case 'Che cosa Graziana ha comprato per la festa?':
            podpowiedz = 'Per il compleano Graziana ha comprato...';
            break;
        case 'Che cosa è successo quando Graziana entrava nella sala?':
            podpowiedz = 'Quando Graziana entrava...';
            break;
        case 'Perché tutti hanno dimenticato la sua caduta?':
            podpowiedz = 'Tutti hanno dimenticato la sua coduta perché...';
            break;
        case 'Come era la festa per Graziana?':
            podpowiedz = 'Per Graziana...';
            break;
    }
    document.getElementById('podpowiedz').textContent = podpowiedz;
    document.getElementById('podpowiedz').style.display = 'block';
    document.getElementById('odpowiedz').style.display = 'none';
});