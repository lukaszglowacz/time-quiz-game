// Get DOM elements
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressBarFull = document.getElementById("progressBarFull");
const loader = document.getElementById("loader");
const game = document.getElementById("game");
const progressTimerContainer = document.getElementById("progress-timer-container");
const progressBarContainer = document.getElementById("progress-bar-container");
const timerContainer = document.getElementById("timer-container");

// Define variables to track state
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Define an empty array to hold questions
let questions = [];

// Fetch the questions from the API
fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple")
    .then(res => res.json())
    .then(loadedQuestions => {
        // Format the questions and add them to the questions array
        questions = loadedQuestions.results.map(loadedQuestion => {
            const formattedQuestion = {
                question: loadedQuestion.question.replace(/&quot;/g, '"')
            };

            const answerChoices = loadedQuestion.incorrect_answers.map(answer => answer.replace(/&quot;/g, '"'));
            formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
            answerChoices.splice(formattedQuestion.answer - 1, 0, loadedQuestion.correct_answer.replace(/&quot;/g, '"'));

            answerChoices.forEach((choice, index) => {
                formattedQuestion["choice" + (index + 1)] = choice;
            });

            return formattedQuestion;
        });

        startGame(); // Start the game
    })
    .catch(err => console.error(err));

// Define some constants
const INCORRECT_FAILED = 10;
const MAX_QUESTIONS = 10;

let elapsedTime = 0; // Initialize the elapsed time to 0

// Start the game function
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion(); 
    game.classList.remove("hidden");
    loader.classList.add("hidden");
    startTimer(); // start the timer
};

// Get the first question
getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {

        clearInterval(timer); // stop the timer

        // go to the end page and pass the elapsed time as a parameter
        return window.location.assign(`end.html?time=${elapsedTime}`);
    }
    questionCounter++;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerHTML = currentQuestion.question;

    // Set the answer choices for the current question
    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];

    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

// Add event listeners to the answer choices
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        // Determine whether the answer is correct or incorrect and update the score
        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply == "incorrect") {
            elapsedTime += INCORRECT_FAILED; // Penalize the user for an incorrect answer
        }

        // Add and remove CSS class to the parent element of the selectedChoice element. 
        selectedChoice.parentElement.classList.add(classToApply);

        // Delay of 1s to clear background color (correct or incorrect) between questions, so next one display with neutral background.
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);

            // Update progressbar
            progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

            getNewQuestion();
        }, 1000);
    });
});

//stopwatch functions

startTimer = () => {
    const timerElement = document.getElementById("timer");
    let minutes = 0;
    let seconds = 0;
    timer = setInterval(() => {
        elapsedTime++;
        minutes = Math.floor(elapsedTime / 60);
        seconds = elapsedTime % 60;
        timerElement.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
};