/*
  ESERCIZIO RIASSUNTIVO 9 - Calcolatrice base

  Dati due numeri a e b e un operatore ("+", "-", "*", "/"):
  - esegui l'operazione corrispondente
  - restituisci il risultato

  Esempio: es23(10, 5, "+") → 15
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es23(a, b, operatore) {
  // TODO: scrivi qui la tua soluzione
 /* if (operatore == "+") {
    return a + b;
  }
  if (operatore == "-") {
    return a - b;    
  }
  if (operatore == "*") {
    return a * b;
  }
  if (operatore == "/") {
    return a / b;    
  }  
    */
  switch (operatore) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "operatore non valido"
  }
    
  
}

// --- NON MODIFICARE SOTTO ---
export { es23 };
