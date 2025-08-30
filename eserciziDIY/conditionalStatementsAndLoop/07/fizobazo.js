for (x = 1; x <= 100; x++) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("FizzBuzz");
    // se condizione1 è vera
  } else if (x % 5 === 0) {
    console.log("Buzz");
    // se condizione1 è falsa e condizione2 è vera
  } else if (x % 3 === 0) {
    console.log("Fizz");
    // se condizione2 è falsa e condizione3 è vera
  } else {
    console.log(x);
    // se nessuna condizione precedente è vera
  }
}
