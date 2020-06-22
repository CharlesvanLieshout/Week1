let name = prompt('Welkom! Wat is jouw naam?');
alert('Hey ' + name);


let min = 0;
let max = 25;
let gok = prompt('Voer een nummer in van 0 tot 25 om te beginnen met raden...');



function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
};

while (Math.random != gok) {
    // if (Math.random > gok) {
    let gok = prompt('Dat is niet goed. Probeer het nog een keer');
}
/* else if (Math.random < gok) {
    let gok = prompt('Dat is te laag. Probeer het nog een keer');
} */

alert('Gefeliciteerd je hebt gewonnen');
alert('Dag ' + [naam] + '. Tot de volgende keer');
