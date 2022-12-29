'use strict';

// buttons
const startQuizButton = document.querySelector('.start-btn');
const quitButton = document.querySelector('.quit');
const continueButton = document.querySelector('.continue');
const nextButton = document.querySelector('.next');

// boxes/forms
const infoBox = document.querySelector('.info');
const quizBox = document.querySelector('.quiz-box');
const optionList = document.querySelector('.option-list');
const checkIcon = '<div class="icon check"><i class="fas fa-check"></i></div>';
const crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';
const timerCount = document.querySelector('.timer-sec');
const timeline = document.querySelector('.timeline');

// lets
let questions_count = 0;
let questions_numb = 1;
let clock;
let clockLine;
let timeValue = 15;
let timelineWidth = 0;

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
	nextButton.style.display = 'none';

	if (questions_count < questions.length - 1) {
		questions_count++;
		questions_numb++;
		showQuestions(questions_count);
		handleCounter(questions_numb);
		clearInterval(clock);
		startTimer(timeValue);
		clearInterval(clockLine);
		startTimerLine(timelineWidth);
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
	startTimer(timeValue);
	clearInterval(clockLine);
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
	clearInterval(clockLine);

	let userAnswer = answer.textContent;
	let correctAnswer = questions[questions_count].answer;
	let allOptions = optionList.children.length;

	if (userAnswer == correctAnswer) {
		answer.classList.add('correct');
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

	nextButton.style.display = 'block';
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
		}
	}
};

const startTimerLine = (time) => {
	clockLine = setInterval(timer, 29);

	function timer() {
		time += 1;
		timeline.style.width = time + 'px';

		if (time > 549) {
			clearInterval(clockLine);
		}
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
