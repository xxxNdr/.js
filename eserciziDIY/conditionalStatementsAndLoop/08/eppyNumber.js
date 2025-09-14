function hapy(n) {
  let cifre = n.toString();
  let somma = 0;
  
  for (let x of cifre) {
    let cifraNumero = parseInt(x);
    let pow = Math.pow(cifraNumero, 2);
    somma += pow;
  }
  if (somma === 1) {
    return somma;
  } else if (somma === 4) {
    // 4,16,37,58,89,145,42,20,4,... loop of a not happy number
    return " Non sono un numero felice";
  } else {
    return hapy(somma);
  }
}

console.log(hapy(80));

function hapyR(n) {
  if (n === 1) {
    return 1;
  } else if (n === 4) {
    return "Non sono un numero felice";
  }
  
  function sumSqr(toString, index = 0) {
    // index contatore inizializzato a zero
    if (index >= toString.length) {
      /* se index è uguale o maggiore del numero di cifre 
      di cui è composto il numero
      hai finito di spezzettare il numero in cifre di cui calcolare il quadrato
      e sommare i prodotti per poi ricominciare da capo col nuovo risultato
      */
      return 0;
    }
    /* qui funziona un po' come un else perché se index è < del numero di cifre
    si esegue questo codice: */
    let cifra = parseInt(toString[index]);
    // trasformo in numero ogni cifra del numero
    return cifra * cifra + sumSqr(toString, index + 1);
    /* calcolo il quadrato di una e poi l'altra cifra
    e aumento di 1 l'index in modo da fare il calcolo sulla cifra seguente*/
  }
  // esco dal ciclo interno
  let str = n.toString();
  // converto a stringa il numero
  let somma = sumSqr(str);
  // applico la funzione ricorsiva alla stringa e salvo il risultato
  return hapyR(somma);
  // applcio la funzione ricorsiva al nuovo risultato
}

const inizio = performance.now();
  hapy(80);
const fine = performance.now();
console.log(`Tempo di esecuzione: ${fine - inizio} ms`);

const inizio2 = performance.now();
  hapyR(80);
const fine2 = performance.now();
console.log(`Tempo di esecuzione: ${fine - inizio} ms`);
