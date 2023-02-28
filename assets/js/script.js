// Home page popup window
document.addEventListener('DOMContentLoaded', () => {
    const myButton = document.querySelector('#myButton');
    const popupContainer = document.querySelector('#popupContainer');

    myButton.addEventListener('click', () => {
        popupContainer.classList.add('show');
    });

    popupContainer.addEventListener('click', () => {
        popupContainer.classList.remove('show');
    });
});