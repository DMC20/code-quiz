//  quiz questions/choices/answerts variable
var quizQuestions = [ 
  {
    question: "What is an array?",
    answers: [
        "A single variable that stores multiple events",
        "It is a feature",
        "A button",
        "I Don't Know",
    ],
    correctAnswer: "A single variable that stores multiple events",
},
{
  question: "What are the two values of a Boolean?",
  answers: [
       "Yes and No",
       "Now and later",
       "True and False",
       "I Don't Know",
  ],
  correctAnswer: "True and False",
},
{
  question: "What is a string?",
  answers: [
       "It is a shoelace ",
       "Stores and manipulates text",
       "A Guitar note",
       "I Don't Know",
  ],
  correctAnswer: "Stores and manipulates text",
},
{
  question: "What does console.log do",
  answers: [
       "Creates an arguement",
       "Creates an object",
       "Writes a message to the console",
       "I Don't Know!",
  ],
  correctAnswer: "Writes a message to the console",
},
{
  question: "What is a function?",
  answers: [
       "A building block in JS",
       "An expression",
       "A debugger",
       "I Don't Know!",
  ],
  correctAnswer: "A building block in JS",
}
];
// variables for targeting html elements/atrrtibutes
var timerEl = document.getElementById('countdownTimer');
var startBtnEl = document.getElementById("startTimer");
var startScreen = document.getElementById('startScreen');
var choices = document.getElementById("choices");
var containerEl = document.getElementById('container');
var quizArea = document.getElementById('quizArea');
var questArea = document.getElementById('questions');
var results = document.getElementById('endDiv');
var score = document.getAnimations('results');

// quiz start score of 0 
var score = 0;
// start on first question
var currentQuestion = 0

// timer ***change back to 15sec***
var timeLeft = 20;
var holdTime = 0;
var penalty = 3;
var btn;

function checkAnswer(){
  // console.log('test', this.value);
  var choice = this.value;
  var correctAn = quizQuestions[currentQuestion].correctAnswer;
  if(choice === correctAn ){
    score++;
    // alert('Correct')  
  } else{
    // alert('Incorrect, you have lost 3 seoconds')
    // 3 sec deducted for incorrect answer
    timeLeft = timeLeft - penalty;
  }

  document.getElementById('choices').innerHTML = ''

  currentQuestion++;
  if (currentQuestion === quizQuestions.length) {
    showResult();
  } else {
    startQuiz();
  }
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

// console.log(options.length);

 for (let i = 0; i < options.length; i++) {
   btn = document.createElement('button');
   btn.value = options[i];
   btn.textContent = options[i];
  //  console.error(options[i]);
   btn.onclick = checkAnswer;
   choices.appendChild(btn);
  }
};


function showResult () {
  timerEl.textContent = '';
        clearInterval(holdTime);
        //timesUp();
        alert("All done!");
        alert("You got " + score + '/' + quizQuestions.length);

        // hide quiz screen
        quizArea.className = 'hide';

        // show resukts button
        results.className = 'show';
        //console.log(results.className);
}

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
        showResult();
      }
    }, 1000);
    
  }
}
)

results.addEventListener('click',function() {
  window.location.replace('./end.html')
  
} )
