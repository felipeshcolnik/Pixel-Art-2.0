window.onload = function() {
  createColorOptions(numberOfColors);
};

numberOfColors = 5;

// const createColorOptions = (numberOfColors) => {
//   for (let i = 0; i < numberOfColors; i =+ 1) {
//     const divMae = document.getElementById('color-palette');
//     const div = document.createElement('div');
//     div.className = 'color-palette';
//     divMae.appendChild(div);
//   };
// };

function createColorOptions(numberOfColors) {
  const divMae = document.getElementById('color-palette');  
  for (let i = 0; i < numberOfColors; i += 1) {
    const div = document.createElement('div');
    div.className = 'color-palette';
    divMae.appendChild(div);
  };
  console.log(divMae.innerHTML);
};
