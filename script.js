const board = document.querySelector('#board');
const sizeButton = document.querySelector('#sizeCycle');
const colorButton = document.querySelector('#colorMode');

let sizeIndex = 0;
const boardSizes = [16, 32, 8];
sizeButton.addEventListener('click', cycleBoardSize);
colorButton.addEventListener('click', e => alert("Color mode switching is not yet implemented."))

updateBoardSize();

function cycleBoardSize() {
  sizeIndex++;
  updateBoardSize();
}

function removeOldCells() {
  board.replaceChildren();
}

function updateBoardSize() {
  let length = boardSizes[sizeIndex%boardSizes.length];
  let boardWidth = length;
  let boardHeight = boardWidth; 

  removeOldCells();

  for (let i = 0; i < boardHeight; i++) {
    let row = document.createElement('div');
    row.setAttribute('class', 'row');
    for (let j = 0; j < boardWidth; j++) {
      let cell = document.createElement('span');
      cell.classList.add('cell');
      styleIfCorner(cell, i, j, boardWidth, boardHeight);
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
}

function styleIfCorner(cell, i, j, boardWidth, boardHeight) {
    switch (`${i} ${j}`) {
      case '0 0':
        cell.classList.add('LT', 'corner');
        break;
      case `${boardWidth-1} 0`:
        cell.classList.add('LB', 'corner');
        break;
      case `0 ${boardHeight-1}`:
        cell.classList.add('RT', 'corner');
        break;
      case `${boardWidth-1} ${boardHeight-1}`:
        cell.classList.add('RB', 'corner');
        break;
    }
}

