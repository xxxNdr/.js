document.addEventListener("DOMContentLoaded", () => {
  const campo = document.querySelector("#campo");
  const form = document.querySelector("form");

  campo.addEventListener("input", () => {
    const valore = campo.value;
    const pattern = /^[\w\s]*$/;

    if (pattern.test(valore)) {
      // test verifica che una stringa corrisponda a un certo pattern
      campo.style.backgroundColor = "green";
    } else {
      campo.style.backgroundColor = "red";
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
});
