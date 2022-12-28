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
let questions_numb = 1;

//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------

//question counter
const handleCounter = (index) => {
	const counter = document.querySelector('.total-questions');
	let counterValue = `<p class="total-questions-info"><span>${index}</span> of <span>${questions.length}</span> questions</p>`;

	counter.innerHTML = counterValue;
};

//if next button is clicked
const handleNext = () => {
	if (questions_count < questions.length - 1) {
		questions_count++;
		questions_numb++;
		showQuestions(questions_count);
		handleCounter(questions_numb);
	} else {
		console.log('Quiz completed');
	}
};

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
	showQuestions(0);
	handleCounter(1);
};

//getting questions and options from array
const showQuestions = (index) => {
	const questionText = document.querySelector('.question-text');
	const optionList = document.querySelector('.option-list');
	let questionTag = `<p class="question">${questions[index].numb}. ${questions[index].question}</p>`;
	let optionTag =
		`<div class="option"><p class="option-text">${questions[index].options[0]}</p></div>` +
		`<div class="option"><p class="option-text">${questions[index].options[1]}</p></div>` +
		`<div class="option"><p class="option-text">${questions[index].options[2]}</p></div>` +
		`<div class="option"><p class="option-text">${questions[index].options[3]}</p></div>`;

	questionText.innerHTML = questionTag;
	optionList.innerHTML = optionTag;

	const options = optionList.querySelectorAll('.option');
	for (let option of options) {
		option.setAttribute('onclick', 'optionSelected(this)');
	}
};

const optionSelected = (answer) => {
	let userAnswer = answer.textContent;

	let correctAnswer = questions[questions_count].answer;

	if (userAnswer == correctAnswer) {
		console.log('Answer is correct');
	} else {
		console.log('Answer is not correct');
	}
};

//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------

startQuizButton.addEventListener('click', startQuiz);
quitButton.addEventListener('click', quitQuiz);
continueButton.addEventListener('click', playQuiz);
nextButton.addEventListener('click', handleNext);
