var gioca = document.getElementById("gioca");

// 1. Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
gioca.addEventListener("click",
  function () {
    var numGiocatore = Math.floor(Math.random() * 6) + 1;
    document.getElementById("numero_giocatore").innerHTML = numGiocatore;

    var numComputer = Math.floor(Math.random() * 6) + 1;
    document.getElementById("numero_computer").innerHTML = numComputer;

    if (numGiocatore > numComputer) {
      document.getElementById("winner").innerHTML = "GIOCATORE";
    } else if (numGiocatore < numComputer) {
      document.getElementById("winner").innerHTML = "COMPUTER";
    } else {
      document.getElementById("winner").innerHTML = "PAREGGIO!";
    }
  }
);
// 2. Stabilire il vincitore, in base a chi fa il punteggio più alto.
