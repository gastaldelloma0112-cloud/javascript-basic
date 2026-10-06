/*
  ESERCIZIO RIASSUNTIVO 10 (Sfida) - Analisi numerica

  Dato un numero n passato come parametro:
  - verifica se è positivo (> 0)
  - verifica se è pari
  - calcola il valore assoluto
  - calcola la radice quadrata (se negativo arrotonda a 2 decimali)

  Restituisci: { positivo: true, pari: false, assoluto: 25, radice: 5 }
  Per n = -25: { positivo: false, pari: false, assoluto: 25, radice: NaN }
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es24(n) {
  // TODO: scrivi qui la tua soluzione
  var radice = Math.sqrt(n)
  if (radice < 0){
    radice = Math.round(n, 2)
  }
  return {positivo: n > 0, pari: n % 2 == 0, assoluto: Math.abs(n), radice }
}

// --- NON MODIFICARE SOTTO ---
export { es24 };
