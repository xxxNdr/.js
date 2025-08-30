let dati = [];
let input;

while ((input = prompt("inserisci un numero positivo o negativo"))) {
  dati.push(input);
}

addEventListener("DOMContentLoaded", function () {
  ris = "";
  for (x = 0; x < dati.length; x++) {
    val = Number(dati[x]);
    if (val > 0) {
      ris += `il segno di ${val} è +`;
    } else if (val < 0) {
      ris += ` e il segno di ${val} è -`;
    }
    if (x < dati.length - 2) {
      ris += ", ";
    }
  }
  document.getElementById("r").innerHTML = ris;
});
