/*
  ESERCIZIO RIASSUNTIVO 4 - Nome

  Data la stringa "   mattia   ":
  - rimuovi gli spazi
  - metti il nome in maiuscolo
  - stampa la lunghezza

  Restituisci: { pulito: "MATTIA", lunghezza: 6 }
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es18() {
  const nome = "   mattia   ";
  // TODO: scrivi qui la tua soluzione
  var pulito = nome.trim().toUpperCase();
  return {pulito, lunghezza: pulito.length};
}

// --- NON MODIFICARE SOTTO ---
export { es18 };
