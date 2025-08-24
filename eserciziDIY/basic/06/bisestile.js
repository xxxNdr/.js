function bise(anno) {
  if (anno % 4 === 0) {
    if (anno % 100 === 0) {
      if (anno % 400 === 0) {
        return true;            // se è divisibile per 4 100 e 400 è bisestile...
      } else {
        return false;           // ...sennò no
      }
    } else {                    // se è divisibile per 4 ma non per 100 è bisestile
      return true;
    }
  } else {
    return false;               // se è divisibile solo per 4 non è bisestile
  }
}

console.log(bise(2025))
console.log(bise(2024))
console.log(bise(2026))
console.log(bise(2027))
console.log(bise(2028))
console.log(bise(100))


function bise2(anno){
    return (anno % 4 === 0 && (anno % 100 !== 0) || (anno % 400 === 0))
}

console.log(null)
console.log(bise2(2025))
console.log(bise2(2024))
console.log(bise2(2026))
console.log(bise2(2027))
console.log(bise2(2028))
console.log(bise2(100))