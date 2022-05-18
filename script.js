window.onload = function() {
  createColorOptions(numberOfColors);
};

numberOfColors = 5;

function createColorOptions(numberOfColors) {
  const divMae = document.getElementById('color-palette-list');  
  for (let i = 0; i < numberOfColors; i += 1) {
    const div = document.createElement('div');
    div.className = 'color-palette';
    divMae.appendChild(div);
  };
  console.log(divMae.innerHTML);
};
