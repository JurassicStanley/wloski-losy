/*
Author: Stanisław Marchwiński
Date: 22.03.2024
Description: Srypty z podpowiedziami dla projektu "Język Włoski - Pytania"
*/

document.querySelector('.podp').addEventListener('click', function() {
    var pytanie = document.getElementById('pytanie').textContent;
    var podpowiedz;
    switch(pytanie) {
        case 'Come si chiamano i protagonisti di qesto dialogo?':
            podpowiedz = 'I protagonisti di questo dialogo si...';
            break;
        case 'Cosa farà Alberto nel fine settimana?':
            podpowiedz = 'Alberto andrà...';
            break;
        case 'Che cosa farà Enrico?':
            podpowiedz = 'Enrico forse...';
            break;
        case 'Dove adnranno gli amici?':
            podpowiedz = 'Gli amici andranno...';
            break;
        case 'Questa tempo ci vuole a Rosetto?':
            podpowiedz = 'A Rosetto ci vogilono...';
            break;
        case 'Che cosa faranno a Rosetto?':
            podpowiedz = 'Faranno una bella...';
            break;
        case 'A che ora si incontreranno?':
            podpowiedz = 'Alle sette...';
            break;
        }
    document.getElementById('podpowiedz').textContent = podpowiedz;
    document.getElementById('podpowiedz').style.display = 'block';
    document.getElementById('odpowiedz').style.display = 'none';
});