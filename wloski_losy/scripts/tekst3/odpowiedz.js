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
            odpowiedz = 'Il protagonista di questa storia si chiama Michał, in italiano si dice Michele.';
            break;
        case 'Perché Michele è in Italia?':
            odpowiedz = 'Lui è in Italia per studiare l’italiano.';
            break;
        case 'Da dove viene Michele? Di che nazionalità è?':
            odpowiedz = 'Michele è dalla Polonia, è polacco.';
            break;
        case 'Di dov’è? (La città)':
            odpowiedz = 'Lui è di Varsavia.';
            break;
        case 'In quale città ha l’intenzione di studiare?':
            odpowiedz = 'Lui ha intenzione di studiare a Siena.';
            break;
        case 'Come si chiama la ragazza che parla con Michele?':
            odpowiedz = 'La ragazza che parla con Michele si chiama Francesca.';
            break;
        case 'Come si chiama il fratello della ragazza?':
            odpowiedz = 'Il fratello di Francesca si chiama Paolo.';
            break;
        case 'Come si chiama la mamma dei ragazzi?':
            odpowiedz = 'La mamma di Francesca e Paolo si chiama signora Bossi.';
            break;
        case 'Michele è stanco. Spiega il perché?':
            odpowiedz = 'Michele è stanco dopo molte ore di viaggio.';
            break;
        case 'Che cosa vuole far vedere a Michele la signora Bossi?':
            odpowiedz = 'La signora Bossi vuole far vedere a Michele la sua camera, che è già pronta.';
            break;
        case 'Quale città italiane conosci?':
            odpowiedz = 'Io conosco: Roma, Napoli, Milano, Verona, Termoli, Siena, Bari, Firenze…ect.';
            break;
    }
    document.getElementById('odpowiedz').textContent = odpowiedz;
    document.getElementById('odpowiedz').style.display = 'block';
    document.getElementById('podpowiedz').style.display = 'none';
    document.getElementById('podpowiedz').textContent = '';
});