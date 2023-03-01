const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


let questions = [{
        question: "Do you know?",
        choice1: "Yeah",
        choice2: "Nope",
        choice3: "What?",
        choice4: "No",
        answer: 3
    },
    {
        question: "Do you feel?",
        choice1: "Yeah",
        choice2: "Nope",
        choice3: "What?",
        choice4: "No",
        answer: 1
    },
    {
        question: "Do you learn?",
        choice1: "Yeah",
        choice2: "Nope",
        choice3: "What?",
        choice4: "No",
        answer: 1
    }
];

// Constans
const INCORRECT_FAILED = 10;
const MAX_QUESTIONS = 3;

let elapsedTime = 0;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
    // start the timer
    startTimer();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        // go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply == "incorrect") {
            elapsedTime += INCORRECT_FAILED;
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);

            // Update progressbar
            progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

            getNewQuestion();
        }, 1000);
    });
});

//stopwatch function



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


startGame();