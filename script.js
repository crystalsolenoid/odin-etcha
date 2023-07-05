let boardWidth = 16;
let boardHeight = boardWidth;

const board = document.querySelector('#board');

for (let i = 0; i < boardHeight; i++) {
  let row = document.createElement('div');
  row.setAttribute('class', 'row');
  for (let j = 0; j < boardWidth; j++) {
    let cell = document.createElement('span');
    cell.textContent = '_';
    cell.setAttribute('class', 'cell');
    row.appendChild(cell);
  }
  board.appendChild(row);
}
