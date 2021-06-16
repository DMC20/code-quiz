var quizContainerEl = Array.from(document.getElementById("question"));
var timerEl = document.getElementById('countdown');
var startBtnEl = document.getElementById("start");
var prevBtnEl = document.getElementById('previous')
var nextBtnEl = document.getElementById("next");
var resultsContainerEl = document.getElementById("results");
// quiz questions, choices, and answers
var quizQuestions = [ {
    question: "What is an array?",
    answers: {
        a: "A single variable that stores multiple events",
        b: "",
        c: "",
        d: "IDK",
    },
    correctAnswer: "a",
},
{
    question: "What are the two values of a Boolean?",
    answers: {
        a: "Yes and No",
        b: "Now and later",
        c: "True and False",
        d: "IDK",
    },
    correctAnswer: "c",
},
{
    question: "What is a string?",
    answers: {
        a: "It is a shoelace ",
        b: "Stores and manipulates text",
        c: "A Guitar note",
        d: "IDK",
    },
    correctAnswer: "b",
},
{
    questions: "What does console.log do",
    answers: {
        a: "Creates an arguement",
        b: "Creates an pnject",
        c: "Writes a message to the console",
        d: "IDK",
    },
    correctAnswer: "c",
},
{
    questions: "What is a function?",
    answers: {
        a: "A building block in JS",
        b: "An expression",
        c: "A debugger",
        d: "IDK",
    },
    correctAnswer: "a",
}
];
// quiz start score of 0
var score = 0;
var currentQuestion = 0
var ask = []
var responses = []

// start quiz function 
function startQuiz () {
 
};

// question prompt function
function testQuestions () {
  responses = quizQuestions[currentQuestion].responses;
  ask = quizQuestions[currentQuestion].ask;
};

// show quiz result function 
function quizResults () {

};

// timer function
function countdown() {
    // change back to 15sec
    var timeLeft = 2;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayMessage();
      }
    }, 1000);
  }


// // end message after clicking start
// var message = "Let's see how you did!";
// var words = message.split (' ');

// start quiz function
//startQuiz();

nextBtnEl.addEventListener('click', next);
prevBtnEl.addEventListener("click", previous);
startBtnEl.addEventListener("click", submit);