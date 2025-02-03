const color = document.querySelector('.color');
const button = document.querySelector('.js-button');

const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

button.addEventListener('click', function() {

  let hex = '#';
  for(let i = 0; i < 6; i++) {
    hex += hexArray[setRandomNum()];
  }
  
    document.body.style.backgroundColor = hex;
    color.textContent = hex;
});


function setRandomNum() {
  let randomNumber = Math.floor(Math.random() * hexArray.length);
  return randomNumber;
};

