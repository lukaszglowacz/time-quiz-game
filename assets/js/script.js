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

// Game page

const questionEl = document.getElementById("question");
const choices = document.getElementsByClassName("choice-text");
console.log(choices);