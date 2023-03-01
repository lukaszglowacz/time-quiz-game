const urlParams = new URLSearchParams(window.location.search);
const elapsedTime = urlParams.get('time');

const finalScoreText = document.getElementById("final-score");
finalScoreText.innerText = elapsedTime.toString().padStart(2, "0") + "s";