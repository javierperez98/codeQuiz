const questionNum = document.querySelector(".question-num");
const askQuestion = document.querySelector(".ask-question");
const answerA = document.querySelector("#answerA");
const answerB = document.querySelector("#answerB");
const answerC = document.querySelector("#answerC");
const answerD = document.querySelector("#answerD");
const next = document.querySelector(".next-question");

nextQuestion = (e) => {
	let num = e.target.value;
	next.setAttribute("disabled", "disabled");
	console.log(next.value);
	console.log(getSelectedAnswer("answers"));
	if (num == 1) {
		next.value = 2;
	}
	if (num == 2) {
		next.value = 3;
	}
	if (num == 3) {
		next.value = 4;
	}
	if (num == 4) {
		next.value = 5;
	}
	if (num == 5) {
		next.value = 6;
	}
	if (num == 6) {
		next.value = 7;
	}
	if (num == 7) {
		next.value = 8;
	}
	if (num == 8) {
		next.value = 9;
	}
	if (num == 9) {
		next.value = 10;
	}
	if (num == 10) {
		console.log("Done");
	}
};

getSelectedAnswer = (name) => {
	let values = [];
	const selected = document.querySelectorAll(`input[name="${name}"]:checked`);
	selected.forEach((answer) => {
		values.push(answer.value);
	});
	return values;
};

enableBtn = () => {
	console.log("enable");
	next.removeAttribute("disabled");
};

next.addEventListener("click", nextQuestion);
answerA.addEventListener("change", enableBtn);
answerB.addEventListener("change", enableBtn);
answerC.addEventListener("change", enableBtn);
answerD.addEventListener("change", enableBtn);
