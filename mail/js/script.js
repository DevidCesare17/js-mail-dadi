var email = ["aaa", "bbb", "ccc", "ddd", "eee", "fff", "ggg", "hhh"];
var validator = false;

// 1. Chiedi all’utente la sua email
var emailUtente = prompt("Inserisci la tua email");

// 2. controlla che sia nella lista di chi può accedere
for (var i = 0; i < email.length; i++) {
  if (emailUtente === email[i]) {
    validator = true;
  }
}

// 3. stampa un messaggio appropriato sull’esito del controllo
if (validator == true) {
  alert("Ben fatto!");
} else {
  alert("Email errata, riprovare");
}
