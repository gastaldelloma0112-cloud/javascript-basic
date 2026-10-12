/*
  ESERCIZIO RIASSUNTIVO 10 (Sfida) - Email

  Data una email "utente@example.com":
  - ricava il nome utente ("utente")
  - ricava il dominio ("example.com")
  - verifica che il dominio termini con ".com"

  Restituisci: { utente: "utente", dominio: "example.com", endsWithCom: true }
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es24() {
  const email = "utente@example.com";
  // TODO: scrivi qui la tua soluzione
  var utente = email.slice(0, email.indexOf("@"))
  var dominio = email.slice(email.indexOf("@")+1)
  var endsWithCom = email.endsWith(".com")
  return { utente, dominio, endsWithCom }
}

// --- NON MODIFICARE SOTTO ---
export { es24 };
