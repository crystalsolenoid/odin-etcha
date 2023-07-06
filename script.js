let boardWidth = 16;
let boardHeight = boardWidth;

const board = document.querySelector('#board');

function styleIfCorner(cell, i, j) {
    switch (`${i}${j}`) {
      case '00':
        cell.classList.add('LT', 'corner');
        break;
      case `${boardWidth-1}0`:
        cell.classList.add('LB', 'corner');
        break;
      case `0${boardHeight-1}`:
        cell.classList.add('RT', 'corner');
        break;
      case `${boardWidth-1}${boardHeight-1}`:
        cell.classList.add('RB', 'corner');
        break;
    }
}

for (let i = 0; i < boardHeight; i++) {
  let row = document.createElement('div');
  row.setAttribute('class', 'row');
  for (let j = 0; j < boardWidth; j++) {
    let cell = document.createElement('span');
    cell.classList.add('cell');
    styleIfCorner(cell, i, j);
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
