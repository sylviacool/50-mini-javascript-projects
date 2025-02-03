const showValue = document.querySelector('.show-color');
const btns = document.querySelectorAll('.btn');


let count = 0;

btns.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
    const btnSelect = event.currentTarget.classList;

    if (btnSelect.contains("decrease")) {
      count--;
    } else if (btnSelect.contains("increase")) {
      count++;
    } else if (btnSelect.contains("reset")) {
      count = 0;
    }
     setColor(count);
    showValue.textContent = count;
    });
});

  function setColor (count) {
      showValue.style.color = count > 0 ? "blue" : count < 0 ? "red" : "black";
  }