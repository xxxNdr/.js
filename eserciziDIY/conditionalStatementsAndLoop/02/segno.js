let dati = [];
let input;

while ((input = prompt("inserisci un numero positivo o negativo"))) {
  dati.push(input);
}

addEventListener("DOMContentLoaded", function () {
  ris = "";
  segmento = "";
  for (x = 0; x < dati.length; x++) {
    val = Number(dati[x]);
    if (val > 0) {
      segmento = `il segno di ${val} è +`;
    } else if (val < 0) {
      segmento = `il segno di ${val} è -`;
    }
    if (x < dati.length -1) {
      ris += segmento + ", ";
    } if (x === dati.length -1) {
        ris = ris.replace(/, $/, "") + " e " + segmento
        // la regex racchiusa in Js è racchiusa tra /
        // ordina di cercare (, ) e di sostituire con stringa vuota ("")
    }
  }
  document.getElementById("r").innerHTML = ris;
});
