function facto(x){
    /*
    Ogni volta che viene chiamata facto() Js mette la chiamata sullo stack di esecuzione
    memorizza il valore corrente di x e le istruzioni da seguire dopo return
    */
    if(x === 0 || x === 1){
        return 1
    }
    return x *= facto(x-1)
    /*
    quando la funzione fa la chiamata facto(x-1) questa è una nuova istanza
    della funzione con un nuovo valore decresciuto di 1
    Continua fino al caso base x === 0
    Ogni chiamata in sospeso sullo stack riprende da dove è stata interrotta
    moltiplicando il valore corrente di x per il risultato restituito dalla chiamata successiva */
}

/*
Lo stack in programmazione è una struttura di memoria che permette di ricordare da dove una funzione
deve ripartire a eseguire istruzioni dopo il suo return
Quando una funzione viene chiamata, i suo dati (parametri, variabili, return)
vengono memorizzati nello stack, quando termina la funzione si libera la memoria
e il controllo torna alla funzione chiamante
*/

console.log(facto(5))

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('ris').innerHTML = facto(5)
})
/*
Per non usare defer nello script, avvolgo la mia funzione in un evento
che aspetta che il DOM sia pronto prima di maniporarlo'
*/