var startQuiz = document.querySelector(".start");
var intro = document.querySelector(".intro");
var question = document.querySelector(".title");
var start = document.querySelector(".start");
var a = document.querySelector(".answerA");
var b = document.querySelector(".answerB");
var c = document.querySelector(".answerC");
var d = document.querySelector(".answerD");
var answers = document.querySelector(".answers")
var result = document.querySelector(".result")
var timeEl = document.querySelector(".timeEl")
var secondsLeft = 90;

function quizStarted() {
  intro.textContent = "";
  start.style.display="none";
  a.style.display="block";
  b.style.display="block";
  c.style.display="block";
  d.style.display="block";
  question1();
}

function question1() {
  question.innerHTML = "What does HTML stand for?";
  a.textContent = "A: Hyper Text Markup Language";
  b.textContent = "B: Hyper Type Move Language";
  c.textContent = "C: Hyper Type Make Language";
  d.textContent = "D: Hyper Text MakeUp Language";
    
  answers.addEventListener("click", function(event) {
    const element = event.target;
    if (element.matches(".answerA")) {
      result.textContent="Correct";
    }
    else{
      result.textContent="Wrong";
      secondsLeft-=5;
    }
    setTimeout(question2, 500)
  });
}

function question2() {
  result.textContent="";
  question.innerHTML = "What does CSS stand for?";
  a.textContent = "A: Condense Sign Styles";
  b.textContent = "B: Cascading Sign Sheets";
  c.textContent = "C: Cascading Style Sheets ";
  d.textContent = "D: Condense Short Style";

  answers.addEventListener("click", function(event) {
    const element = event.target;
    if (element.matches(".answerC")) {
      result.textContent="Correct";
    }
    else {
      result.textContent="Wrong";
      secondsLeft-=5;
    }
    setTimeout(question3, 500)
  });
}

function question3() {
  result.textContent="";
  question.innerHTML = "What does JS stand for?";
  a.textContent = "A: JavaStyle";
  b.textContent = "B: JavaScript";
  c.textContent = "C: JavaScreen ";
  d.textContent = "D: JavaSign";

  answers.addEventListener("click", function(event) {
    const element = event.target;
    if (element.matches(".answerB")) {
      result.textContent="Correct";
    }
    else {
      result.textContent="Wrong";
      secondsLeft-=5;
    }
    setTimeout(question4, 500)
  });
}

function question4() {
  result.textContent="";
  question.innerHTML = "What is a true and false statement?";
  a.textContent = "A: Boolen";
  b.textContent = "B: String";
  c.textContent = "C: Array";
  d.textContent = "D: Object";

  answers.addEventListener("click", function(event) {
    const element = event.target;
    if (element.matches(".answerA")) {
      result.textContent="Correct";
    }
    else {
      result.textContent="Wrong";
      secondsLeft-=5;
    }
    setTimeout(question5, 500)
  });
}

function question5() {
  result.textContent="";
  question.innerHTML = "What is the term called when an event triggers other events?";
  a.textContent = "A: String";
  b.textContent = "B: React";
  c.textContent = "C: Effect";
  d.textContent = "D: Bubbling";

  answers.addEventListener("click", function(event) {
    const element = event.target;
    if (element.matches(".answerD")) {
      result.textContent="Correct";
    }
    else {
      result.textContent="Wrong";
      secondsLeft-=5;
    }
    setTimeout(End, 500)
  });
}

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    if(secondsLeft < 0) {
      timeEl.textContent= "0";
      clearInterval(timerInterval);
      End();
    }
  }, 1000);
}

function End() {
  a.style.display="none";
  b.style.display="none";
  c.style.display="none";
  d.style.display="none";
}

startQuiz.addEventListener("click", quizStarted);
startQuiz.addEventListener("click", setTime);