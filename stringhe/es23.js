/*
  ESERCIZIO RIASSUNTIVO 9 - Parola

  Data la stringa "Programmazione":
  - stampa il primo carattere
  - stampa l'ultimo carattere
  - stampa la lunghezza
  - estrai le prime sei lettere

  Restituisci: { primo: "P", ultimo: "e", lunghezza: 14, primeSei: "Progra" }
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es23() {
  const parola = "Programmazione";
  // TODO: scrivi qui la tua soluzione
  var primo = parola.at(0)
  var ultimo = parola.at(-1)
  var lunghezza = parola.length
  var primeSei = parola.slice(0, 6) 
  return{primo, ultimo, lunghezza, primeSei}
}

// --- NON MODIFICARE SOTTO ---
export { es23 };
