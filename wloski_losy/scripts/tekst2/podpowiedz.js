/*
Author: Stanisław Marchwiński
Date: 22.03.2024
Description: Srypty z podpowiedziami dla projektu "Język Włoski - Pytania"
*/

document.querySelector('.podp').addEventListener('click', function() {
    var pytanie = document.getElementById('pytanie').textContent;
    var podpowiedz;
    switch(pytanie) {
        case 'Quante stanze ci sono nell’appartamento della famiglia Marchetti?':
            podpowiedz = 'Nell’apartamento della famiglia...';
            break;
        case 'Che cosa si trova di fronte dell’ingresso?':
            podpowiedz = 'Di fronte all’ingresso...';
            break;
        case 'Dov’è la cucina e il bagno?':
            podpowiedz = 'La cucina e il bagno ci sono...';
            break;
        case 'Che cosa c’è vicino all’ingresso?Qunati anni ha?':
            podpowiedz = 'Vicino all’ingresso...';
            break;
        case 'Di che colore è il divano nel soggiorno?':
            podpowiedz = 'In soggiorno c’è...';
            break;
        case 'Che cosa c’è dietro al divano?':
            podpowiedz = 'Dietro al divano c’è...';
            break;
        case 'Dove sono le sedie?':
            podpowiedz = 'Intorno al tavolo...';
            break;
        case 'Che cosa c’è davanti al bagno?':
            podpowiedz = 'La camera da letto è...';
            break;
        case 'Dov’è il letto matrimoniale?':
            podpowiedz = 'In camera da letto c’è...';
            break;
        case 'Che cosa c’è sulla parete?':
            podpowiedz = 'Sulla parete c’è...';
            break;
        }
    document.getElementById('podpowiedz').textContent = podpowiedz;
    document.getElementById('podpowiedz').style.display = 'block';
    document.getElementById('odpowiedz').style.display = 'none';
});