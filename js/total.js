let totalScore = document.querySelector(".total-score");
let viewScore = document.querySelector(".view-score");
let homePage = document.querySelector(".home-page");

setScore = () => {
	if (viewScore.value == 1) {
		homePage.setAttribute("href", "/index.html");
	}
	totalScore.innerHTML = `You scored a ${""} on the quiz!`;
	viewScore.innerHTML = "Go Home";
	viewScore.value = 1;
};

viewScore.addEventListener("click", setScore);
