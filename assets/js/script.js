// Home page hidden paragraph popup window
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

