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
  var Correct = ".answerA";
    
  answers.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches(Correct)) {
      result.textContent="Correct";
    }
    else{
      result.textContent="Wrong";
    }
    setTimeout(question2, 1000)
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
    var element = event.target;
    if (element.matches(".answerC")) {
      result.textContent="Correct";
    }
    else {
      result.textContent="Wrong";
    }
    setTimeout(question3, 1000)
  });
}

function question3() {
  result.textContent="";
  question.innerHTML = "What does CSS stand for?";
  a.textContent = "A: CSS";
  b.textContent = "B: CSS";
  c.textContent = "C: Cascading Style Sheets ";
  d.textContent = "D: CSS";

  answers.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches(".answerC")) {
      result.textContent="Correct";
    }
    else {
      result.textContent="Wrong";
    }
    setTimeout(question4, 1000)
  });
}

function question4() {
  result.textContent="";
  question.innerHTML = "What does CSS stand for?";
  a.textContent = "A: CSS";
  b.textContent = "B: CSS";
  c.textContent = "C: Cascading Style Sheets ";
  d.textContent = "D: CSS";

  answers.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches(".answerC")) {
      result.textContent="Correct";
    }
    else {
      result.textContent="Wrong";
    }
    setTimeout(question5, 1000)
  });
}

function question5() {
  result.textContent="";
  question.innerHTML = "What does CSS stand for?";
  a.textContent = "A: CSS";
  b.textContent = "B: CSS";
  c.textContent = "C: Cascading Style Sheets ";
  d.textContent = "D: CSS";

  answers.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches(".answerC")) {
      result.textContent="Correct";
    }
    else {
      result.textContent="Wrong";
    }
    setTimeout(End, 1000)
  });
}

function End() {
  alert("Game Over")
}

startQuiz.addEventListener("click", quizStarted);