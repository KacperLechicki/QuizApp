'use strict';

// buttons
const startQuizButton = document.querySelector('.start-btn');
const quitButton = document.querySelector('.quit');
const continueButton = document.querySelector('.continue');

// boxes/forms
const infoBox = document.querySelector('.info');
const quizBox = document.querySelector('.quiz-box');

//show info
const startQuiz = () => {
	infoBox.classList.add('activeInfo')
};

//quit to start button
const quitQuiz = () => {
	infoBox.classList.remove('activeInfo');
};

//show questions
const playQuiz = () => {
	quizBox.classList.add('activeQuiz');
	infoBox.classList.remove('activeInfo');
};

startQuizButton.addEventListener('click', startQuiz);
quitButton.addEventListener('click', quitQuiz);
continueButton.addEventListener('click', playQuiz);
