window.onload = function() {
  createColorOptions(numberOfColors);
  randomizeRGB();
  changePaletteColors();
  selectedColor();
  paintingBoard();
  createSizeofBoard(numbOfFrames);
  changeBoardSize();
  clearBoard();
};

numberOfColors = 5;
numbOfFrames = 15;

function createColorOptions(numberOfColors) {
  const divMae = document.getElementById('color-palette-list');  
  for (let i = 0; i < numberOfColors; i += 1) {
    const div = document.createElement('div');
    div.className = 'color-palette';
    div.style.backgroundColor = randomizeRGB();
    divMae.appendChild(div);
  };
  document.querySelector('.color-palette').classList.add('active-color');
};

const randomizeRGB = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const changePaletteColors = () => {
  const changePaletteColorsButton = document.getElementById('change-colors-button');
  changePaletteColorsButton.addEventListener('click', () => {
    const paleteColorsList = document.getElementsByClassName('color-palette');
    for (let i = 0; i < paleteColorsList.length; i += 1) {
      paleteColorsList[i].style.backgroundColor = randomizeRGB();
    };
  });
};

const selectedColor = () => {
  const colorList = document.getElementsByClassName('color-palette');
  for (let i = 0; i < colorList.length; i += 1) {
    colorList[i].addEventListener('click', () => {
      const activeColor = document.getElementsByClassName('active-color');
      activeColor[0].classList.remove('active-color');
      colorList[i].classList.add('active-color');
    });
  };
};

function createSizeofBoard(numbOfFrames) {
  const divMae = document.getElementsByClassName('board-area')[0];
  for (let i = 0; i < numbOfFrames; i += 1) {
    const pCol = document.createElement('p');
    pCol.className = 'board-frame';
    divMae.appendChild(pCol);
    for (let i = 0; i < numbOfFrames - 1; i += 1) {
      const pLin = document.createElement('p');
      pLin.className = 'board-frame';
      divMae.appendChild(pLin);
    };
    const br = document.createElement('br');
    divMae.appendChild(br);
  };
};

const deleteBoard = () => {
  const board = document.getElementsByClassName('board-area')[0];
  for (let i = 0; i < board.childNodes.length; i +=0) {
    board.removeChild(board.childNodes[0]);
  }
}

const paintingBoard = () => {
  const pixel = document.getElementsByClassName('board-frame');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', () => {
      pixel[i].style.backgroundColor = document.querySelector('.active-color').style.backgroundColor;
      const classSelectedColor = window.querySelector('.active-color').style.backgroundColor;
      this.style.backgroundColor = classSelectedColor;
    });
  }
}

const changeBoardSize = () => {
  const changeBoardSizeButton = document.getElementById('change-board-size');
  const inputSize = document.getElementById('pixel-area-range');
  changeBoardSizeButton.addEventListener('click', () => {
    deleteBoard();
    createSizeofBoard(inputSize.value);
    inputSize.value = '';
  });
};

const clearBoard = () => {
  const boardButton = document.getElementById('clear-pixel-area');
  boardButton.addEventListener('click', () => {
    const boardFramesList = document.getElementsByClassName('board-frame');
    console.log(boardFramesList.length);
    for (let i = 0; i < boardFramesList.length; i += 1) {
      boardFramesList[i].style.backgroundColor = 'white';
    }
  })
};
