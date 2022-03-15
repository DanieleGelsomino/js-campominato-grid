// console check
console.log("JS OK!");

/*
 Consegna:
 creare una griglia di gioco quadrata,
 in cui ogni cella contiene un numero tra quelli compresi in un range compreso tra 1 e 100
 Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

// creo griglia 10x10
const grid = document.getElementById("grid");

const columns = 10;
const rows = 10;
// calcolo il totale delle celle da generare
const allCells = columns * rows;

// vado ad applicare il ciclo per ogni cella
for (let i = 1; i < allCells + 1; i++) {
  // creo cella
  const cell = newCell();
  // aggiungo i numeri all'interno delle singole celle
  numbers = generateRange(i);
  cell.innerText = numbers;
  cell.id = numbers;
  // aggiungo la cella nella griglia
  grid.appendChild(cell);
}

// funzione per creare cella
function newCell() {
  const square = document.createElement("div");
  square.classList.add("cell");
  return square;
}

function generateRange(num) {
  const range = num;
  return range;
}
