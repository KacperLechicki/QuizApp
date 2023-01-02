'use strict';

// buttons
const startQuizButton = document.querySelector('.start-btn');
const quitButton = document.querySelector('.quit');
const continueButton = document.querySelector('.continue');
const nextButton = document.querySelector('.next');
const replayButton = document.querySelector('.replay');
const quitAllButton = document.querySelector('.quitAll');

// boxes/forms
const infoBox = document.querySelector('.info');
const quizBox = document.querySelector('.quiz-box');
const optionList = document.querySelector('.option-list');
const checkIcon = '<div class="icon check"><i class="fas fa-check"></i></div>';
const crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';
const timerCount = document.querySelector('.timer-sec');
const timeOff = document.querySelector('.time-text');
const result = document.querySelector('.result-box');

// lets
let questions_count = 0;
let questions_numb = 1;
let clock;
let timeValue = 15;
let userScore = 0;

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
	nextButton.style.visibility = 'hidden';

	if (questions_count < questions.length - 1) {
		questions_count++;
		questions_numb++;
		showQuestions(questions_count);
		handleCounter(questions_numb);
		clearInterval(clock);
		startTimer(timeValue);
		startTimerLine(timelineWidth);
		timeOff.textContent = 'Time left:';
	} else {
		clearInterval(clock);
		clearInterval(clockLine);
		showResultBox();
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
	userScore = 0;
	quizBox.classList.add('activeQuiz');
	infoBox.classList.remove('activeInfo');
	showQuestions(questions_count);
	handleCounter(questions_numb);
	startTimer(timeValue);
	startTimerLine(timelineWidth);
};

//getting questions and options from array
const showQuestions = (index) => {
	const questionText = document.querySelector('.question-text');
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
	clearInterval(clock);

	let userAnswer = answer.textContent;
	let correctAnswer = questions[questions_count].answer;
	let allOptions = optionList.children.length;

	if (userAnswer == correctAnswer) {
		answer.classList.add('correct');
		userScore++;
	} else {
		answer.insertAdjacentHTML('beforeend', crossIcon);
		answer.classList.add('incorrect');
	}

	//disable options after users choice
	for (let i = 0; i < allOptions; i++) {
		if (optionList.children[i].textContent == correctAnswer) {
			optionList.children[i].setAttribute('class', 'option correct');
			optionList.children[i].insertAdjacentHTML('beforeend', checkIcon);
		}
		optionList.children[i].classList.add('disabled');
	}

	nextButton.style.visibility = 'visible';
};

const startTimer = (time) => {
	clock = setInterval(timer, 1000);

	function timer() {
		timerCount.textContent = time;
		time--;

		if (time < 9) {
			let addZero = timerCount.textContent;
			timerCount.textContent = '0' + addZero;
		}
		if (time < 0) {
			clearInterval(clock);
			timerCount.textContent = '00';

			let correctAnswer = questions[questions_count].answer;
			let allOptions = optionList.children.length;

			for (let i = 0; i < allOptions; i++) {
				if (optionList.children[i].textContent == correctAnswer) {
					optionList.children[i].setAttribute('class', 'option correct');
					optionList.children[i].insertAdjacentHTML('beforeend', checkIcon);
				}
				optionList.children[i].classList.add('disabled');
			}
			nextButton.style.visibility = 'visible';
			timeOff.textContent = 'Time is off';
		}
	}
};

const showResultBox = () => {
	infoBox.classList.remove('activeInfo');
	quizBox.classList.remove('activeQuiz');
	result.classList.add('activeResult');
	const scoreText = result.querySelector('.score-text');
	scoreText.innerHTML = `Your score is <span>${userScore}</span> out of <span>${questions.length}</span>`;
};

const replayQuizHandle = () => {
	restartValues();
	quizBox.classList.add('activeQuiz');
	result.classList.remove('activeResult');
};

const quitQuizHandle = () => {
	window.location.reload();
	restartValues();
};

const restartValues = () => {
	questions_count = 0;
	questions_numb = 1;
	timeValue = 15;
	timelineWidth = 0;
	userScore = 0;
	showQuestions(questions_count);
	handleCounter(questions_numb);
	clearInterval(clock);
	startTimer(timeValue);
	clearInterval(clockLine);
	startTimerLine(timelineWidth);
	nextButton.style.visibility = 'hidden';
	timeOff.textContent = 'Time left:';
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
replayButton.addEventListener('click', replayQuizHandle);
quitAllButton.addEventListener('click', quitQuizHandle);
