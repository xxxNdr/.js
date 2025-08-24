

// SPIEGAZIONE FUNZIONE

function anima(id) {
    // prende come parametro un id

  let elemento = document.getElementById(id);
  /*
  cerca un elemento nella pagina html con l'attributo id il valore dato alla funzione anima
  e lo assegna a elemento
  */

  let testoNodo = elemento.childNodes[0];
  // accedo al primo nodo figlio di elemento, cioè il testo contenuto nell'elemento

  let testo = testoNodo.data;
  // prendo il testo vero e proprio contenuto nel nodo

  setInterval(function () {
    // eseguo una funzione interna ogni 150 millisecondi (15 volte al secondo)

    testo = testo[testo.length - 1] + testo.substring(0, testo.length - 1);
    // prendo l'ultimo carattere del testo e lo concateno davanti la stringa senza l'ultimo carattere del testo
    // substring serve a estrarre una sottostringa da una stringa partendo da un indice fino a un indice finale
    // string.substring(inizio, fine)

    testoNodo.data = testo;
    // aggiorna il nodo di testo con la nuova versione di testo, l'utente vede un testo che sembra muoversi

  }, 200);
}

/*

LA FUNZIONE SI RIPETE IN LOOP grazie a setInterval
una volta aggiornato testoNodo comincia d'accapo e ripete la funzione che modifica la stringa

*/