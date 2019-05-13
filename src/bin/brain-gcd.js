#!/bin/node
import userAnswer from '..';

console.log('Welcome to the Brain Games!\nFind the greatest common divisor of given numbers.');
const userName = userAnswer('May I have your name? ');

console.log(`Hello, ${userName}!`);

function getRandomInt(min, max){
	return Math.floor(Math.random() *  (max - min +1)) + min;
}

const getGCD = (a, b) => {
	for(let counter = a; counter >= 1; counter--) {
		if(a % counter == 0 && b % counter == 0) return counter;
	}
};

for(let counter = 3; counter > 0; counter--) {
	let number_one = getRandomInt(1, 99);
	let number_two = getRandomInt(1, 99);
	let gcd = getGCD(number_one, number_two);
	console.log(`Question:  ${number_one} ${number_two}`);
	let answer = userAnswer('Your answer: ');
	if(answer==gcd){
		console.log('Correct!');
			if(counter==1) {
	                       console.log(`Congratulations, ${userName}!`);
			}
	}  else {
	console.log(`'${answer}' is wrong answer ;(. Correct answer was '${gcd}'.\n Let's try again, ${userName}!`);
		break;
	}
}
