const colorsArray = ["red", "blue", "purple", "yellow"];
const button = document.querySelector('.js-button');
const color = document.querySelector(".color");


button.addEventListener('click', function() {
  let randomNumber = Math.floor(Math.random() * colorsArray.length);

  document.body.style.backgroundColor = colorsArray[randomNumber];
  color.textContent = colorsArray[randomNumber];
});
  


