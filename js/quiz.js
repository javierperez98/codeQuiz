let questionNum = document.querySelector(".question-num");
let askQuestion = document.querySelector(".ask-question");
let answer1 = document.querySelector(".answer1");
let answer2 = document.querySelector(".answer2");
let answer3 = document.querySelector(".answer3");
let answer4 = document.querySelector(".answer4");
const answerA = document.querySelector("#answerA");
const answerB = document.querySelector("#answerB");
const answerC = document.querySelector("#answerC");
const answerD = document.querySelector("#answerD");
const next = document.querySelector(".next-question");

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
];
const questions = [
	'What is the correct JavaScript syntax to change the content of the HTML element below? ﹤p﹥ id="demo"﹥This is a demonstration.﹤/p﹥',
];
const As = ['document.getElement("p").innerHTML = "Hello World!";'];
const Bs = ['#demo.innerHTML = "Hello World!";'];
const Cs = ['document.getElementByName("p").innerHTML = "Hello World!";'];
const Ds = ['document.getElementById("demo").innerHTML = "Hello World!";'];

nextQuestion = (e) => {
	let num = e.target.value;
	next.setAttribute("disabled", "disabled");
	const userAnswer = getSelectedAnswer("answers");
	if (num == 1) {
		if (userAnswer === "B") {
			console.log("correct");
		} else {
			console.log("wrong");
		}
		setNextQuestion(numQs[0], questions[0], As[0], Bs[0], Cs[0], Ds[0]);
		next.value = 2;
		resetBtns();
	}
	if (num == 2) {
		next.value = 3;
		resetBtns();
	}
	if (num == 3) {
		next.value = 4;
		resetBtns();
	}
	if (num == 4) {
		next.value = 5;
		resetBtns();
	}
	if (num == 5) {
		next.value = 6;
		resetBtns();
	}
	if (num == 6) {
		next.value = 7;
		resetBtns();
	}
	if (num == 7) {
		next.value = 8;
		resetBtns();
	}
	if (num == 8) {
		next.value = 9;
		resetBtns();
	}
	if (num == 9) {
		next.value = 10;
		resetBtns();
	}
	if (num == 10) {
		console.log("Done");
	}
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
	console.log("enable");
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
