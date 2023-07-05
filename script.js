let boardWidth = 16;
let boardHeight = boardWidth;

const board = document.querySelector('#board');

for (let i = 0; i < boardHeight; i++) {
  let row = document.createElement('div');
  row.setAttribute('class', 'row');
  for (let j = 0; j < boardWidth; j++) {
    let cell = document.createElement('span');
    cell.setAttribute('class', 'cell');
    row.appendChild(cell);
  }
  board.appendChild(row);
}

const cells = document.querySelectorAll('.cell');
function fillCell(event) {
  let cell = event.target;
  cell.classList.add('full');
}
cells.forEach(cell => cell.addEventListener('mouseover', fillCell));

