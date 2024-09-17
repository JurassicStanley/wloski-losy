/*
Author: Stanisław Marchwiński
Date: 22.03.2024
Description: Srypty z podpowiedziami dla projektu "Język Włoski - Pytania"
*/

document.querySelector('.podp').addEventListener('click', function() {
    var pytanie = document.getElementById('pytanie').textContent;
    var podpowiedz;
    switch(pytanie) {
        case 'Come si chiamano i protagonisti di questa storia?':
            podpowiedz = 'I protagonisti di questa storia...';
            break;
        case 'Dove Gino ha cercato il numero di telefono di Paolo?':
            podpowiedz = 'Gino a cercato il numero di telefono Paolo sotto...';
            break;
        case 'Che cosa hanno comprato i due amici?':
            podpowiedz = 'Il due amici hanno coprato...';
            break;
        case 'Chi hanno incontrato all’angolo?':
            podpowiedz = 'All’angolo loro hanno...';
            break;
        case 'Che cosa hanno voluto fare i ragazzi con i fumetti?':
            podpowiedz = 'I ragazzi hanno voluto...';
            break;
        case 'Quanti soldi Umberto ha pagato per i fumetti?':
            podpowiedz = 'Umberto ha pagato...';
            break;
        case 'Come ha reagito la mamma di Umberto?':
            podpowiedz = 'La mamma ha...';
            break;
        }
    document.getElementById('podpowiedz').textContent = podpowiedz;
    document.getElementById('podpowiedz').style.display = 'block';
    document.getElementById('odpowiedz').style.display = 'none';
});