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
const choices = Array.from(document.getElementsByClassName("choice-text"));


let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Do you know?",
        choice1: "Yeah",
        choice2: "Nope",
        choice3: "What?",
        choice4: "No",
        answer: 3
    },
    {
        question: "Do you feel",
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
const CORRECT_BONUS = 10;
const INCORRECT_FAILED = 20;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [ ... questions];
    console.log(availableQuestions);
};

startGame();