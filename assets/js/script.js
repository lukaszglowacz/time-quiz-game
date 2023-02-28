// Home page popup window
document.addEventListener('DOMContentLoaded', () => {
    let myButton = document.querySelector('#myButton');
    let popupContainer = document.querySelector('#popupContainer');

    myButton.addEventListener('click', () => {
        popupContainer.classList.add('show');
    });

    popupContainer.addEventListener('click', () => {
        popupContainer.classList.remove('show');
    });
});

// Making a blur when click the read instructions button

var hideButton = document.getElementById('myButton');
hideButton.addEventListener('click', function() {
  var boxes = document.querySelectorAll('.box');
  for (var i = 0; i < boxes.length; i++) {
    // use a condition to target only the first and third .box elements
    if (i === 0 || i === 2) {
      boxes[i].style.display = 'none';
    }
  }
});