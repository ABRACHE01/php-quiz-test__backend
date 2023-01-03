
//  document.getElementById("valueInput").innerHTML = inputValue;
const questionNumber = document.querySelector(".qustion-number");
const questionText = document.querySelector(".qustion-text");
const optionContainer = document.querySelector(".option-container");
const answerIndecatorContainer = document.querySelector(".answers-indicator");
const quizBox = document.querySelector(".quiz-Box");
const resultBox = document.querySelector(".result-Box");



let questionCounter = 0;
let currentQuestion;
let availableQestions = [];
let availableOptions = [];
var correntAnswers = 0;
let attempt = 0;
var wrongAnswers = 0;
let timer;
let ans = [];
let question;
let quiz;



getData();

function getData(){

  var ajax = new XMLHttpRequest();
var method = "GET";
var url = "./question&answers.php";
var asynchoronous = true;

ajax.open(method, url, asynchoronous);

ajax.send();

ajax.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
     
    quiz = data;

  }
};


}

//set quistions available in the data app
function setAvailableQuestions() {
  const totalQuestion = quiz.length;

  for (let i = 0; i < totalQuestion; i++) {
    availableQestions.push(quiz[i]);
  }
}

function getNewQuestion() {
  //counter of quistiond
  questionNumber.innerHTML =
    "Question " + (questionCounter + 1) + " of " + quiz.length;
  const questionIndex =
    availableQestions[Math.floor(Math.random() * availableQestions.length)];

  currentQuestion = questionIndex;
  // console.log(currentQuestion);
  questionText.innerHTML = currentQuestion.q;
  const index1 = availableQestions.indexOf(questionIndex);
  // console.log(index1);
  availableQestions.splice(index1, 1);

  //get the length of options
  const optionLen = currentQuestion.option.length;
  for (let i = 0; i < optionLen; i++) {
    availableOptions.push(i);
  }

  // console.log(availableOptions)
  document.querySelector(".option-container").innerHTML = "";
  for (let i = 0; i < optionLen; i++) {
    const option = document.createElement("button");
    option.innerHTML = currentQuestion.option[i];
    option.id = currentQuestion.optionId[i];
    option.className = "carts";
    optionContainer.appendChild(option);
    option.setAttribute("type", "button");
    option.setAttribute("onclick", "getResult(this); ");
  }
  questionCounter++;
}

//get the answer of current attempt question
function getResult(element) {
  attempt++;
  const id = parseInt(element.id);

  ans.push(id);

  // console.log(ans)

  updateAnswerIndecator("progress");
  unclickableOption();
  clearInterval(timer);
  next();
  timeCount();

  // const id = parseInt(element.id);
  //get the answer by compiring the id of clicked option

  // if (id === currentQuestion.answer){
  //   //set the green color to the current option
  //   element.classList.add("correct");
  // updateAnswerIndecator("correct");
  //   correntAnswers++;
  // } else {
  //   //set the red color to inccorect options
  //   element.classList.add("wrong");
  //   updateAnswerIndecator("wrong");
  //   wrongAnswers++;

  //   //showing the wright anwswer after choosing a wrong one
  // const optionLen = optionContainer.children.length;
  // for (let i = 0; i < optionLen; i++) {
  //   if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
  //     optionContainer.children[i].classList.add("correct");
  //   }
  // }
  // }
  // attempt++;
  // unclickableOption();
  // clearInterval(timer);
  // setTimeout(function () {
  //   next();
  //   timeCount();
  // }, 2000);
}

// make the buttons unclicble after the choice
function unclickableOption() {
  const optinLen = optionContainer.children.length;

  for (let i = 0; i < optinLen; i++) {
    optionContainer.children[i].classList.add("allready_answered");
  }
}

//ceat cercle indecators
function answerIndecator() {
  const totalQuestion = quiz.length;

  for (let i = 0; i < totalQuestion; i++) {
    const indicator = document.createElement("div");
    answerIndecatorContainer.appendChild(indicator);
  }
}

//this function adds to the the button answers the style eather wrong or correct
// marktype: correct or wrong
function updateAnswerIndecator(marktype) {
  answerIndecatorContainer.children[questionCounter - 1].classList.add(
    marktype
  );
}

//functin to move to the next quistion
function next() {
  if (questionCounter === quiz.length) {
    quizOver();
  } else {
    getNewQuestion();
    clearInterval(timer);
  }
}

// i used this to show the result page
function quizOver() {
  //hide quiz page
  quizBox.classList.add("hide");
  //show quiz page
  resultBox.classList.add("remove");

  reciveData();
}

function reciveData() {
 

  $.post(
    "Correctanswers.php",
    function (answers) {
      
      //stop counter 
      clearInterval(timer);
      document.getElementById("timer").innerHTML = "time over";
      //looping the answers 
      for (let i = 0; i < ans.length; i++) {
        
        correcting = ans.includes(answers[i]);
        console.log(correcting);
        if (correcting == true) {
          correntAnswers++;
          // updateAnswerIndecator("correct");
          // console.log(correntAnswers);
        } else {
          wrongAnswers++;
          // updateAnswerIndecator("wrong");
          // console.log(wrongAnswers);
        }

      }
      quizResult();
    },
    "json"
  );
}

//this function is responsible of showing the result statistics
function quizResult() {
  //showing the stepper result
  const element = document.getElementById("Resault");
  element.setAttribute("class", "active");

  // result
  resultBox.querySelector(".total-score").innerHTML =
    correntAnswers * 20 + " pts";

  const percentage = (correntAnswers / quiz.length) * 100;

  let per = (resultBox.querySelector(".total-percentage").innerHTML =
    percentage.toFixed() + "%");

  d = parseInt(per);
  if (d < 50) {
    resultBox.querySelector(".feedback").innerHTML =
      "you need a bit more documentations";
  } else if (d >= 90) {
    resultBox.querySelector(".feedback").innerHTML = "exllent !!";
  } else {
    resultBox.querySelector(".feedback").innerHTML = "good !!";
  }

  resultBox.querySelector(".total-correct").innerHTML = correntAnswers;
  resultBox.querySelector(".total-wrong").innerHTML = wrongAnswers;
  // document.getElementById("valueInput").innerHTML = fullname; 

}

//counts the timming of eache quistion starting from 30s
function timeCount() {
  let sec = 30;

  timer = setInterval(function () {
    document.getElementById("timer").innerHTML = sec + " s";
    sec--;

    if (sec == -1) {

      clearInterval(timer);
      wrongAnswers++;
      // console.log(wrongAnswers);
      updateAnswerIndecator("wrong");
      
      next();
      timeCount();
    }
  }, 1000);
}




// execute js fanctions
if ( window.location.href == "http://localhost/k2/quizPage.php" ) {
  window.onload = function () {

    timeCount();

    setAvailableQuestions();

    getNewQuestion();
  
    answerIndecator();
    
  };

}else{
  const quizstart = document.querySelector(".quiz-start");
  const username = document.querySelector(".user-name");
 

  function showStart() {
      //hide quiz page
      username.classList.add("remove");
      //show quiz page
      quizstart.classList.add("hide");
     
  }



 
}

