


let num = Math.floor(Math.random() * 10 + 1);
// math.floor arrotonda per difetto un float a intero
/*
math.random genera un numero randomico tra 0 incluso e 1 escluso
 l'intervallo viene determinato dalla moltiplicazione e somma dopo il metodo
 (max - min + 1) per includere il valore massimo
 + min per includere anche il minimo
 */
let indo = prompt("Indovina un numero da 0 a 10")

const ris = document.getElementById('ris')

if (indo == num){
    ris.innerText = `C'hai preso`;
}else{
    ris.innerText = `Non c'hai preso, il numero era ${num}`;
    }

    /* In alternativa invece che usare defer nella head posso racchiudere
    questo blocco di codice in questa funzione:

    document.addEventListener("DOMContentLoaded", function() {
    ...codice qui...

    così il codice sarà eseguito solo quando il DOM è caricato completamente
*/