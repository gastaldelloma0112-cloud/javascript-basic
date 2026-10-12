/*
  ESERCIZIO RIASSUNTIVO 1 - Email

  Data la stringa "   MARIO.ROSSI@GMAIL.COM   ":
  - rimuovi gli spazi iniziali e finali
  - converti tutto in minuscolo
  - verifica che contenga "@"

  Restituisci un oggetto: { pulita: "mario.rossi@gmail.com", valida: true }
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es15() {
  const email = "   MARIO.ROSSI@GMAIL.COM   ";
  var pulita = email.trim().toLowerCase();
  return {
    pulita,
    valida: pulita.includes("@")
  };
}
// --- NON MODIFICARE SOTTO ---
export { es15 };
