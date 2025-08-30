var num1, num2;

num1 = prompt("Inserisci un numero");
num2 = prompt("Inserisci un altro numero");

var num1 = parseInt(num1);
var num2 = parseInt(num2);

addEventListener("DOMContentLoaded", function () {
  if (num1 > num2) {
    document.getElementById(
      "ris"
    ).innerHTML = `Il numero più grande fra i due è: ${num1}`;
  } else if (num1 < num2) {
    document.getElementById(
      "ris"
    ).innerHTML = `Il numero più grande fra i due è: ${num2}`;
  }else if (num1 === num2){
    document.getElementById('ris').innerHTML = `I due numeri sono uguali`;
  }
  
});
