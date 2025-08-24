// definisco tre lati di un triangolo
let a = 5;
let b = 6;
let c = 7;

// calcolo il semi-perimetro del triangolo
let semi = (a + b + c) / 2;

// formula di Heron per l'area
heron = (semi * ((semi - a) * (semi - b) + (semi - c))) ** (1 / 2);
heron = Math.sqrt(semi * ((semi - a) * (semi - b) * (semi - c)));
heron = heron.toFixed(3)
console.log(heron)

// trova altezza

hC = heron * 2 / 7
hC = hC.toFixed(3)
console.log(hC)

area = hC * c / 2
area = area.toFixed(3)
console.log(area)