

// ottieni la data odierna
let oggi = new Date()
console.log(oggi)

// ottieni il giorno del mese

let gg = oggi.getDate()
console.log(gg)

// ottieni il mese (aggiungendo 1 perchè hanno base zero)

let mm = oggi.getMonth() + 1
console.log(mm)

// ottieni l'anno

let aaaa = oggi.getFullYear();
console.log(aaaa)

// aggiungere zero davanti a un mese minore di 10

if (mm < 10){
    mm = "0" + mm
}
console.log(mm)

// formatta la data come d/m/y
oggi = gg + '/' + mm + '/' + aaaa
console.log(oggi)

// formatta la data come m/d/y
oggi = mm + '-' + gg + '-' + aaaa
console.log(oggi) 