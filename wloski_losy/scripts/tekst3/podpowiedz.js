/*
Author: Stanisław Marchwiński
Date: 22.03.2024
Description: Srypty z podpowiedziami dla projektu "Język Włoski - Pytania"
*/

document.querySelector('.podp').addEventListener('click', function() {
    var pytanie = document.getElementById('pytanie').textContent;
    var podpowiedz;
    switch(pytanie) {
        case 'Come si chiama il protagonista di questa storia?':
            podpowiedz = 'Il protagonista di questa storia...';
            break;
        case 'Perché Michele è in Italia?':
            podpowiedz = 'Lui è in Italia per...';
            break;
        case 'Da dove viene Michele? Di che nazionalità è?':
            podpowiedz = 'Michele è dalla...';
            break;
        case 'Di dov’è? (La città)':
            podpowiedz = 'Lui è...';
            break;
        case 'In quale città ha l’intenzione di studiare?':
            podpowiedz = 'Lui ha intenzione...';
            break;
        case 'Come si chiama la ragazza che parla con Michele?':
            podpowiedz = 'La ragazza che parla...';
            break;
        case 'Come si chiama il fratello della ragazza?':
            podpowiedz = 'Il fratello di Francesca...';
            break;
        case 'Come si chiama la mamma dei ragazzi?':
            podpowiedz = 'La mamma di Francesca e Paolo...';
            break;
        case 'Michele è stanco. Spiega il perché?':
            podpowiedz = 'Michele è stanco dopo...';
            break;
        case 'Che cosa vuole far vedere a Michele la signora Bossi?':
            podpowiedz = 'La signora Bossi vuole...';
            break;
        case 'Quale città italiane conosci?':
            podpowiedz = 'Io conosco: Roma...';
            break;
        }
    document.getElementById('podpowiedz').textContent = podpowiedz;
    document.getElementById('podpowiedz').style.display = 'block';
    document.getElementById('odpowiedz').style.display = 'none';
});