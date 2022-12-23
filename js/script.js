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
	infoBox.style.display = 'block';
	startQuizButton.style.display = 'none';
};

//quit to start button
const quitQuiz = () => {
	infoBox.style.display = 'none';
	startQuizButton.style.display = 'block';
};

const playQuiz = () => {
	quizBox.style.display = 'block';
	infoBox.style.display = 'none';
};

startQuizButton.addEventListener('click', startQuiz);
quitButton.addEventListener('click', quitQuiz);
continueButton.addEventListener('click', playQuiz);
