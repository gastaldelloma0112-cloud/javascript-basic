/*
  ESERCIZIO RIASSUNTIVO 8 - Nome e cognome

  Data la stringa "Mario Rossi":
  dividila in nome e cognome utilizzando i metodi studiati.

  Restituisci: { nome: "Mario", cognome: "Rossi" }
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es22() {
  const persona = "Mario Rossi";
  // TODO: scrivi qui la tua soluzione
  var nome = persona.slice(0, persona.indexOf(" "))
  var cognome = persona.slice(persona.indexOf(" ")+1)
  return {nome, cognome}
}

// --- NON MODIFICARE SOTTO ---
export { es22 };
