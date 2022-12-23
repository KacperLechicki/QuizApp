'use strict';

// buttons
const startQuizButton = document.querySelector('.start-btn');
const quitButton = document.querySelector('.quit');

// boxes/forms
const infoBox = document.querySelector('.info');

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

startQuizButton.addEventListener('click', startQuiz);
quitButton.addEventListener('click', quitQuiz);
