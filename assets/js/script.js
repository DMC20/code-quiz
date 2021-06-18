//  quiz questions/choices/answerts variable
var quizQuestions = [ 
  {
    question: "What is an array?",
    answers: [
       "A single variable that stores multiple events",
         "It is a feature",
       "A button",
        "IDK",
    ],
    correctAnswer: "A single variable that stores multiple events",
},
{
  question: "What are the two values of a Boolean?",
  answers: [
       "Yes and No",
       "Now and later",
       "True and False",
       "IDK",
  ],
  correctAnswer: "True and False",
},
{
  question: "What is a string?",
  answers: [
       "It is a shoelace ",
       "Stores and manipulates text",
       "A Guitar note",
       "IDK",
  ],
  correctAnswer: "Stores and manipulates text",
},
{
  questions: "What does console.log do",
  answers: [
       "Creates an arguement",
       "Creates an pnject",
       "Writes a message to the console",
       "IDK",
  ],
  correctAnswer: "Writes a message to the console",
},
{
  questions: "What is a function?",
  answers: [
       "A building block in JS",
       "An expression",
       "A debugger",
       "IDK",
  ],
  correctAnswer: "A building block in JS",
}
];
// variables for targeting html elements/atrrtibutes
var timerEl = document.getElementById('countdownTimer');
var startBtnEl = document.getElementById("startTimer");
var startScreen = document.getElementById('startScreen');
var choices = document.getElementById("choices");
var resultsContainerEl = document.getElementById("results");
var containerEl = document.getElementById('container');
var quizArea = document.getElementById('quizArea');
var questArea = document.getElementById('questions');

// quiz start score of 0 
var score = 0;
// start on first question
var currentQuestion = 0

// timer ***change back to 15sec***
var timeLeft = 15;
var holdTime = 0;

var btn;

function checkAnswer(){
  // console.log('test', this.value);
  var choice = this.value;
  var correctAn = quizQuestions[currentQuestion].correctAnswer;
  if(choice === correctAn ){
    alert('correct')
   
  } else{
    alert('wrong')
  }

  currentQuestion++;
  
  startQuiz();
}

// start quiz function 
function startQuiz () {

 //render question
  var quest = quizQuestions[currentQuestion].question;
  questArea.textContent = quest;
  // console.log(quest);

 //render choices as buttons
 var options = quizQuestions[currentQuestion].answers;
//  console.log('currentQuestion = ', currentQuestion);
//  console.log('options = ', options);

// console.log(options.length);

 for (let i = 0; i < options.length; i++) {
   btn = document.createElement('button');
   btn.value = options[i];
   btn.textContent = options[i];
  //  console.error(options[i]);
   btn.onclick = checkAnswer;
   choices.appendChild(btn);
  }
 //     -- create a button
 //     --assign it value
 //     --assign it context
 //     --assign it an onclick function
 //         ..check if user answered correctly or not
  
};

// show quiz result function 
function quizResults () {

};

// timer function
startBtnEl.addEventListener("click", function(){

  //      --hide start screen
startScreen.className = 'hide';
//      --show quizArea
quizArea.className = 'show';

  startQuiz();


  if (holdTime === 0) {
    holdTime = setInterval(function() {
      timeLeft--;
      holdTime.textContent = "You have " + timeLeft;
      timerEl.textContent = timeLeft

      if (timeLeft < 0) {
        clearInterval(holdTime);
        //timesUp();
        timerEl.textContent = "You have ran out of time!";
      }
    }, 1000);
    
  }
})