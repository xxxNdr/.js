document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", async (e) => {
    /* imposta un evento di tipo submit sul form ed esegui le istruzioni
    che seguono sapendo che possono restare in attesa quando incontrano
    await */
    e.preventDefault();

    const dati = e.target.querySelector('input[name="dati"]').value;
    /* target identifica esattamente l'elemento che ha scatenato l'evento,
  query selector seleziona l'input con attributo name = dati e poi prendi il suo valore */

    try {
      // tenta la richiesta POST all'API
      const response = await fetch(
        /* aspetta la risposta dall'API
        e invia l'input come json decodificato da oggetto nel corpo della richiesta */
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
          credentials: "include",
          // invia i cookie al server

          body: JSON.stringify({ dati }),
        }
      );

      if (!response.ok) throw new Error("Errore nella rispsota server");
      // nuovo oggetto di tipo Error

      const output = await response.json();
      // aspetta la conversione da json a oggetto js...

      const div = document.createElement("div");
      div.textContent = JSON.stringify(output, null, 2);
      // ...mettila in un div che si vede nel browser
      document.body.append(div);
    } catch (error) {
      const p = document.createElement("p");
      p.textContent = "Errore nelal richiesta: " + error.message;
      // oppure manda un messaggio di errore incapsulato in un p
      document.body.append(p);
    }
  });
});
