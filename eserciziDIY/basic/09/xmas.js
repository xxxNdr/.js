let oggi = new Date();

console.log(oggi)

let natale = new Date(oggi.getFullYear(), 11, 25)

let giorniRimanenti = (natale - oggi) / (1000 * 60 * 60 * 24)

let decimale = giorniRimanenti - Math.floor(giorniRimanenti)

let ore = decimale * 24

let oreOk = ore.toFixed(1)
let rimanenti = Math.trunc(giorniRimanenti)

console.log(rimanenti)
console.log(decimale)
console.log(oreOk)

document.getElementById('ris').innerHTML = `Giorni rimanenti a Natale: ${rimanenti} e ${oreOk} ore`