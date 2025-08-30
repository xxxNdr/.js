/*
Esempio: Calcolare il MCD(5292, 2544) 
5292 ÷ 2544 = 2 con resto 204
2544 ÷ 204 = 12 con resto 96
204 ÷ 96 = 2 con resto 12
96 ÷ 12 = 8 con resto 0
L'ultimo resto non nullo è 12, quindi MCD(5292, 2544) = 12
*/

// algoritmo di Euclide
function mcd(a, b) {
  // trova il maggiore e il minore fra due numeri
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  // se il resto della divisione tra max e min è uguale a 0 allora min è il MCD
  c = max % min;
  if (c === 0) {
    return min;
  } else {
    /*
    altrimenti: applica ricorsivamente mcd quindi dividi min per il resto della divisione,
    c e min si aggiornano ogni volta che si applica ricorsivamente mcd finché il resto della
    divisione non è 0 */
    return mcd(min, c);
  }
}

console.log(mcd(5292, 2544));
console.log(mcd(336, 360));
