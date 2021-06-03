const startQuiz = document.querySelector(".start-quiz");

quiz = () => {
	location.replace("/html/quiz.html");
};

startQuiz.addEventListener("click", quiz);
