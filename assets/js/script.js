var quizContainer = document.getElementById("quix");
var resultsContainer = document.getElementById("results");
var submitBtn = document.getElementById("submit");
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

var quizQuestions = [ {
    question: "What is an array?",
    answers: {
        a: "",
        b: "",
        c: "",
        d: "IDK",
    },
    correctAnswer: "",
},
{
    question: "What are the two values of a Boolean?",
    answers: {
        a: "",
        b: "",
        c: "",
        d: "IDK",
    },
    correctAnswer: "",
},
{
    question: "What is a string?",
    answers: {
        a: "",
        b: "",
        c: "",
        d: "IDK",
    },
    correctAnswer: "",
},
{
    questions: "What does console.log do",
    answers: {
        a: "",
        b: "",
        c: "",
        d: "IDK",
    },
    correctAnswer: "",
},
{
    questions: "What is a function?",
    answers: {
        a: "",
        b: "",
        c: "",
    },
    correctAnswer: "",
}
];

// game start score of 0
var score = 0;

// end message after clicking start
var message = "Let's see how you did!";
var words = message.split (' ');



// timer function
function countdown () {
    // 15sec timer 
    // change back to 15sec
    var timeLeft = 2;

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
          // display the end message
          displayMessage();
        }
      }, 1000);
    }

    function displayMessage() {
        var wordCount = 0;
      
        // Uses the `setInterval()` method to call a function to be executed every 300 milliseconds
        var msgInterval = setInterval(function() {
          if (words[wordCount] === undefined) {
            clearInterval(msgInterval);
          } else {
            mainEl.textContent = words[wordCount];
            wordCount++;
          }
        }, 400);
      }

// start game 
//startQuiz();

// start button function
startBtn.onclick = countdown

// click event listeners for button, show results
submitBtn.addEventListener('click', showResults);

// show total score 
alert("You got " + score + '/' + quizQuestions.length);