/*
Author: Stanisław Marchwiński
Date: 22.03.2024
Description: Srypty z odpowiedziami dla projektu "Język Włoski - Pytania"
*/

document.querySelector('.odp').addEventListener('click', function() {
    var pytanie = document.getElementById('pytanie').textContent;
    var odpowiedz;
    switch(pytanie) {
        case 'Come si chiamano i protagonisti di qesto dialogo?':
            odpowiedz = 'I protagonisti di questo dialogo si chiamano Enrico e Alberto.';
            break;
        case 'Cosa farà Alberto nel fine settimana?':
            odpowiedz = 'Alberto andrà al mare.';
            break;
        case 'Che cosa farà Enrico?':
            odpowiedz = 'Enrico forse primarra a casa.';
            break;
        case 'Dove adnranno gli amici?':
            odpowiedz = 'Gli amici andranno al mare a Rosetto.';
            break;
        case 'Questa tempo ci vuole a Rosetto?':
            odpowiedz = 'A Rosetto ci vogilono massimo tre ore.';
            break;
        case 'Che cosa faranno a Rosetto?':
            odpowiedz = 'Faranno una bella nuotata e mangeranno pesce fresco.';
            break;
        case 'A che ora si incontreranno?':
            odpowiedz = 'Alle sette sotto a casa di Enrico.';
            break;
    }
    document.getElementById('odpowiedz').textContent = odpowiedz;
    document.getElementById('odpowiedz').style.display = 'block';
    document.getElementById('podpowiedz').style.display = 'none';
    document.getElementById('podpowiedz').textContent = '';
});