#!/bin/node
import userAnswer from '..';

console.log('Welcome to the Brain Games!\nAnswer \"yes\" if number even otherwise answer \"no\".');
const userName = userAnswer('May I have your name? ');

console.log(`Hello, ${userName}!`);

function getRandomInt(min, max){
	return Math.floor(Math.random() *  (max - min +1)) + min;
}

function parityCheck(number){
	if(number%2==0) {
		return 'yes';
	}  else {
		return 'no';
	}
}

for(let counter = 3; counter > 0; counter--) {
	let number = getRandomInt(1, 100);
	console.log('Question: ' + number);
	let answer = userAnswer('Your answer: ');
	if(answer==parityCheck(number)){
		console.log('Correct!');
			if(counter==1) {
	                       console.log(`Congratulations, ${userName}!`);
			}
	}  else {
	console.log(`'${answer}' is wrong answer ;(. Correct answer was '${parityCheck(number)}'.\n Let's try again, ${userName}!`);
		break;
	}
}
