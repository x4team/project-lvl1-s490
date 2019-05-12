#!/bin/node
import userAnswer from '..';

console.log('Welcome to the Brain Games!\nWhat is the result of the expression?');
const userName = userAnswer('May I have your name? ');

console.log(`Hello, ${userName}!`);

function getRandomInt(min, max){
	return Math.floor(Math.random() *  (max - min +1)) + min;
}

function getMathOperation(number) {
	if(number == 1) {
	return '+';
	} else if(number == 2) {
	return '-';
	} else if(number == 3) {
	return '*';
	}
}

function Calculation(number_one, number_two, operation) {
	if(operation == '+') {
		return number_one + number_two;	
	} else if(operation == '-') {
		return number_one - number_two;
	} else if(operation == '*') {
		return number_one * number_two;
	}	
}

for(let counter = 3; counter > 0; counter--) {
	let operation = getMathOperation(getRandomInt(1, 3));
	let number_one = getRandomInt(1, 99);
	let number_two = getRandomInt(1, 99);
	let total = Calculation(number_one, number_two, operation);
	console.log(`Question:  ${number_one} ${operation} ${number_two}`);
	let answer = userAnswer('Your answer: ');
	if(answer==total){
		console.log('Correct!');
			if(counter==1) {
	                       console.log(`Congratulations, ${userName}!`);
			}
	}  else {
	console.log(`'${answer}' is wrong answer ;(. Correct answer was '${total}'.\n Let's try again, ${userName}!`);
		break;
	}
}
