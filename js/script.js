'use strict';

// buttons
const startQuizButton = document.querySelector('.start-btn');
const quitButton = document.querySelector('.quit');
const continueButton = document.querySelector('.continue');
const nextButton = document.querySelector('.next');

// boxes/forms
const infoBox = document.querySelector('.info');
const quizBox = document.querySelector('.quiz-box');

// lets
let questions_count = 0;

//show info
const startQuiz = () => {
	infoBox.classList.add('activeInfo');
};

//quit to start button
const quitQuiz = () => {
	infoBox.classList.remove('activeInfo');
};

//show questions
const playQuiz = () => {
	quizBox.classList.add('activeQuiz');
	infoBox.classList.remove('activeInfo');
	showQuestions(2);
};

//getting questions and options from array
const showQuestions = (index) => {
	const questionText = document.querySelector('.question-text');
	const optionList = document.querySelector('.option-list');
	let questionTag = `<p class="question">${questions[index].question}</p>`;
	let optionTag =
		`<div class="option"><p class="option-text">${questions[index].options[0]}</p></div>` +
		`<div class="option"><p class="option-text">${questions[index].options[1]}</p></div>` +
		`<div class="option"><p class="option-text">${questions[index].options[2]}</p></div>` +
		`<div class="option"><p class="option-text">${questions[index].options[3]}</p></div>`;

	questionText.innerHTML = questionTag;
	optionList.innerHTML = optionTag;
};

startQuizButton.addEventListener('click', startQuiz);
quitButton.addEventListener('click', quitQuiz);
continueButton.addEventListener('click', playQuiz);
