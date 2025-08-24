

ris = "";

for (let anno = 2014; anno <= 2050; anno++) {
  let g = new Date(anno, 0, 1);
  if (g.getDay() === 0) {
    ris += "Il primo gennaio dell'anno " + anno + " è domenica<br>";
  }
}

document.getElementById('ris').innerHTML = ris;

// ALTERNATIVA NON PIU COMPATTA

const r  = Array.from({length: 2050 - 2014 + 1}, (x,i) => 2014 + i)
.filter(anno => new Date(anno, 0, 1).getDay() === 0)
.map(anno => `Quest'anno ${anno} il primo gennaio è domenica<br>`)
.join('');
document.getElementById('ris').innerHTML = r

/*
creo un array vuoto di 37 elementi:
2050 - 2014 + 1 è la lunghezza dell'array, arco di anni inclusi gli estremi
poi c'è la funzione arrow che prende due parametri, il primo corrisponde a ogni
singolo elemento indefinito dell'array che viene creato e il secondo è il suo indice
corrispondente, quindi per ogni elemento e indice farà l'operazione di sommare a 2014
un indice fino ad arrivare a + 36, creando così tutti gli anni da 2014 a 2050
*/

/*
filter seleziona solo quegli anni in cui il primo giorno del mese è domenica:
per ogni anno viene creata una data impostata a primo gennaio, 0 è gennaio e 1
è il primo del mese
poi con getDay controllo che il primo del mese sia proprio domenica cioè 0 il primo
giorno della settimana
*/

/*
map converte ogni anno in una array di stringhe che dicono quanto scritto sopra
e va a capo per ogni anno filtrato
*/

/*
join trasforma l'array in una sola stringa concatenata senza spazi
*/

/* inserisco il risultato nell'elemento HTML con id ris
    qui verrà tenuto conto dei br scritti in map per andare a capo nel risultato finale
    */