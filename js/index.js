const questionNum = document.querySelector(".question-num");
const askQuestion = document.querySelector(".ask-question");
const displayScore = document.querySelector(".display-score");
const answer1 = document.querySelector(".answer1");
const answer2 = document.querySelector(".answer2");
const answer3 = document.querySelector(".answer3");
const answer4 = document.querySelector(".answer4");
const answerA = document.querySelector(".answerA");
const answerB = document.querySelector(".answerB");
const answerC = document.querySelector(".answerC");
const answerD = document.querySelector(".answerD");
const removeA = document.querySelector(".button-A");
const removeB = document.querySelector(".button-B");
const removeC = document.querySelector(".button-C");
const removeD = document.querySelector(".button-D");
const next = document.querySelector(".next-question");
const homePage = document.querySelector(".home-page");
var percent = 0;

const numQs = [
	"(2 of 10)",
	"(3 of 10)",
	"(4 of 10)",
	"(5 of 10)",
	"(6 of 10)",
	"(7 of 10)",
	"(8 of 10)",
	"(9 of 10)",
	"(10 of 10)",
	"",
];
const questions = [
	'What is the correct JavaScript syntax to change the content of the HTML element below? ﹤p﹥ id="demo"﹥This is a demonstration.﹤/p﹥',
	'What is the correct syntax for referring to an external script called "xxx.js"?',
	'How do you write "Hello World" in an alert box?',
	"How do you create an arrow function in JavaScript?",
	'How do you call a function named "myFunction"?',
	"How to write an IF statement in JavaScript?",
	"How does a WHILE loop start?",
	"How does a FOR loop start?",
	"What is the correct way to write a JavaScript array?",
	"",
];
const As = [
	'document.getElement("p").innerHTML = "Hello World!";',
	'﹤script src="xxx.js"/﹥',
	'alertBox("Hello World!")',
	"myfunction = ( ) => { }",
	"call(myfunction)",
	"if var=1 console.log(var)",
	"loop( while i < 10 )",
	"for( let i = 0; i < 5; i++ )",
	"const numbers = { 1, 2, 3 }",
	"",
];
const Bs = [
	'#demo.innerHTML = "Hello World!";',
	'﹤script name="xxx.js"/﹥',
	'setAlert("Hello World!")',
	"function = myFunction( )",
	"call.myfunction",
	"if (var=1) { console.log(var) }",
	"while.loop( i < 10 )",
	"for( let i = 0; i++ )",
	"const numbers = [ 1, 2, 3 ]",
	"",
];
const Cs = [
	'document.getElementByName("p").innerHTML = "Hello World!";',
	'﹤script href="xxx.js"/﹥',
	'alert("Hello World!")',
	"arrowFunction = myFunction( )",
	"run(myfunction)",
	"if [var=1] { console.log(var) }",
	"while i < 10",
	"for( let i = 0; i < 5)",
	"const numbers = ( 1, 2, 3 )",
	"",
];
const Ds = [
	'document.getElementById("demo").innerHTML = "Hello World!";',
	'﹤script link="xxx.js"/﹥',
	'alertPage("Hello World!")',
	"myfunction( ) => { }",
	"myfunction( )",
	"if var=1 then console.log(var)",
	"while ( i < 10 )",
	"for.loop( i )",
	"const numbers = 1, 2, 3;",
	"",
];

startTimer = (duration, display) => {
	var timer = duration,
		minutes,
		seconds;

	const clock = setInterval(() => {
		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		display.textContent = minutes + ":" + seconds;
		--timer;

		if (timer <= 0 || next.value == 0) {
			clearInterval(clock);
			display.textContent = "";
			setNextQuestion(numQs[9], questions[9], As[9], Bs[9], Cs[9], Ds[9]);
			endQuiz();
		}
	}, 1000);

	nextQuestion = (e) => {
		const num = e.target.value;

		if (num == 0) {
			homePage.setAttribute("href", "/codeQuiz");
			return;
		}

		next.setAttribute("disabled", "disabled");
		const userAnswer = getSelectedAnswer("answers");

		if (num == 1) {
			if (userAnswer === "B") {
				percent += 10;
			} else {
				timer -= 30;
			}
			setNextQuestion(numQs[0], questions[0], As[0], Bs[0], Cs[0], Ds[0]);
			next.value = 2;
			resetBtns();
		}
		if (num == 2) {
			if (userAnswer === "D") {
				percent += 10;
			} else {
				timer -= 30;
			}
			setNextQuestion(numQs[1], questions[1], As[1], Bs[1], Cs[1], Ds[1]);
			next.value = 3;
			resetBtns();
		}
		if (num == 3) {
			if (userAnswer === "A") {
				percent += 10;
			} else {
				timer -= 30;
			}
			setNextQuestion(numQs[2], questions[2], As[2], Bs[2], Cs[2], Ds[2]);
			next.value = 4;
			resetBtns();
		}
		if (num == 4) {
			if (userAnswer === "C") {
				percent += 10;
			} else {
				timer -= 30;
			}
			setNextQuestion(numQs[3], questions[3], As[3], Bs[3], Cs[3], Ds[3]);
			next.value = 5;
			resetBtns();
		}
		if (num == 5) {
			if (userAnswer === "A") {
				percent += 10;
			} else {
				timer -= 30;
			}
			setNextQuestion(numQs[4], questions[4], As[4], Bs[4], Cs[4], Ds[4]);
			next.value = 6;
			resetBtns();
		}
		if (num == 6) {
			if (userAnswer === "D") {
				percent += 10;
			} else {
				timer -= 30;
			}
			setNextQuestion(numQs[5], questions[5], As[5], Bs[5], Cs[5], Ds[5]);
			next.value = 7;
			resetBtns();
		}
		if (num == 7) {
			if (userAnswer === "B") {
				percent += 10;
			} else {
				timer -= 30;
			}
			setNextQuestion(numQs[6], questions[6], As[6], Bs[6], Cs[6], Ds[6]);
			next.value = 8;
			resetBtns();
		}
		if (num == 8) {
			if (userAnswer === "D") {
				percent += 10;
			} else {
				timer -= 30;
			}
			setNextQuestion(numQs[7], questions[7], As[7], Bs[7], Cs[7], Ds[7]);
			next.value = 9;
			resetBtns();
		}
		if (num == 9) {
			if (userAnswer === "A") {
				percent += 10;
			} else {
				timer -= 30;
			}
			setNextQuestion(numQs[8], questions[8], As[8], Bs[8], Cs[8], Ds[8]);
			next.value = 10;
			resetBtns();
		}
		if (num == 10) {
			if (userAnswer === "B") {
				percent += 10;
			} else {
				timer -= 30;
			}
			setNextQuestion(numQs[9], questions[9], As[9], Bs[9], Cs[9], Ds[9]);
			endQuiz();
		}
	};

	endQuiz = () => {
		next.value = 0;
		removeA.remove();
		removeB.remove();
		removeC.remove();
		removeD.remove();
		askQuestion.remove();
		enableBtn();
		next.innerHTML = "Go Home";
		displayScore.innerHTML = `You score a ${percent} on the quiz!`;
	};

	getSelectedAnswer = (name) => {
		let values = "";
		const selected = document.querySelectorAll(`input[name="${name}"]:checked`);
		selected.forEach((answer) => {
			values = answer.value;
		});
		return values;
	};

	resetBtns = () => {
		answerA.checked = false;
		answerB.checked = false;
		answerC.checked = false;
		answerD.checked = false;
	};

	enableBtn = () => {
		next.removeAttribute("disabled");
	};

	setNextQuestion = (qNum, q, a, b, c, d) => {
		questionNum.innerHTML = qNum;
		askQuestion.innerHTML = q;
		answer1.innerHTML = a;
		answer2.innerHTML = b;
		answer3.innerHTML = c;
		answer4.innerHTML = d;
	};

	next.addEventListener("click", nextQuestion);
	answerA.addEventListener("change", enableBtn);
	answerB.addEventListener("change", enableBtn);
	answerC.addEventListener("change", enableBtn);
	answerD.addEventListener("change", enableBtn);
};

var fiveMinutes = 60 * 5,
	display = document.querySelector(".countdown");
startTimer(fiveMinutes, display);
