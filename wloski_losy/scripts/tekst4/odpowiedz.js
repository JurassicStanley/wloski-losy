/*
Author: Stanisław Marchwiński
Date: 22.03.2024
Description: Srypty z odpowiedziami dla projektu "Język Włoski - Pytania"
*/

document.querySelector('.odp').addEventListener('click', function() {
    var pytanie = document.getElementById('pytanie').textContent;
    var odpowiedz;
    switch(pytanie) {
        case 'Come si chiamano i protagonisti di questa storia?':
            odpowiedz = 'I protagonisti di questa storia si chiamano Paolo, Gino e Umberto.';
            break;
        case 'Dove Gino ha cercato il numero di telefono di Paolo?':
            odpowiedz = 'Gino a cercato il numero di telefono Paolo sotto il letto, sotto le sedie, andare in cucina maniente.';
            break;
        case 'Che cosa hanno comprato i due amici?':
            odpowiedz = 'Il due amici hanno coprato due fumetti a 4€.';
            break;
        case 'Chi hanno incontrato all’angolo?':
            odpowiedz = 'All’angolo loro hanno inconcrato Umberto - un tipo buffo.';
            break;
        case 'Che cosa hanno voluto fare i ragazzi con i fumetti?':
            odpowiedz = 'I ragazzi hanno voluto vendere i fumetti ad un prezzo più alto.';
            break;
        case 'Quanti soldi Umberto ha pagato per i fumetti?':
            odpowiedz = 'Umberto ha pagato i fumetti a 20€.';
            break;
        case 'Come ha reagito la mamma di Umberto?':
            odpowiedz = 'La mamma ha gridato suo figlio e ha detto.';
            break;
    }
    document.getElementById('odpowiedz').textContent = odpowiedz;
    document.getElementById('odpowiedz').style.display = 'block';
    document.getElementById('podpowiedz').style.display = 'none';
    document.getElementById('podpowiedz').textContent = '';
});