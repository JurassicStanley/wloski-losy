/*
Author: Stanisław Marchwiński
Date: 22.03.2024
Description: Srypty z odpowiedziami dla projektu "Język Włoski - Pytania"
*/

document.querySelector('.odp').addEventListener('click', function() {
    var pytanie = document.getElementById('pytanie').textContent;
    var odpowiedz;
    switch(pytanie) {
        case 'Quante stanze ci sono nell’appartamento della famiglia Marchetti?':
            odpowiedz = 'Nell’apartamento della famiglia Marchetti ci sono tre stanze.';
            break;
        case 'Che cosa si trova di fronte dell’ingresso?':
            odpowiedz = 'Di fronte all’ingresso c’e il coridoio.';
            break;
        case 'Dov’è la cucina e il bagno?':
            odpowiedz = 'La cucina e il bagno ci sono a sinistra dell’ingresso.';
            break;
        case 'Che cosa c’è vicino all’ingresso?Qunati anni ha?':
            odpowiedz = 'Vicino all’ingresso c’è il soggiorno.';
            break;
        case 'Di che colore è il divano nel soggiorno?':
            odpowiedz = 'In soggiorno c’è un divano blu.';
            break;
        case 'Che cosa c’è dietro al divano?':
            odpowiedz = 'Dietro al divano c’è una lampada e un tavolo.';
            break;
        case 'Dove sono le sedie?':
            odpowiedz = 'Intorno al tavolo ci sono le sedie.';
            break;
        case 'Che cosa c’è davanti al bagno?':
            odpowiedz = 'La camera da letto è davanti al bagno.';
            break;
        case 'Dov’è il letto matrimoniale?':
            odpowiedz = 'In camera da letto c’è un letto matrimoniale.';
            break;
        case 'Che cosa c’è sulla parete?':
            odpowiedz = 'Sulla parete c’è un bel quadro.';
    }
    document.getElementById('odpowiedz').textContent = odpowiedz;
    document.getElementById('odpowiedz').style.display = 'block';
    document.getElementById('podpowiedz').style.display = 'none';
    document.getElementById('podpowiedz').textContent = '';
});